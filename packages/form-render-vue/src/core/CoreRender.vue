<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType, h } from 'vue'
import RenderList from './RenderChildren/RenderList/index.vue';
import RenderObject from './RenderChildren/RenderObject.vue';
import { RenderField } from './RenderField';
import {
  isLooselyNumber,
  isCssLength,
  isListType,
  isCheckBoxType,
  isObjType,
} from '../utils';
import type { Error, PropSchema } from "../../Interface";

const coreRenderProps = {
  id: {
    type: String,
    default: '#'
  },
  schema: {
    type: Object as PropType<PropSchema>,
    default: () => ({}),
    required: true
  },
  item: {
    type: Object as PropType<{ [key: string]: any }>,
    default: () => ({}),
    required: true
  },
  dataIndex: {
    type: Array as PropType<number[]>,
    default: (): number[] => []
  },
  dataPath: {
    type: String,
    default: ''
  },
  coreValue: {},
  dependValues: {
    type: Array as PropType<any[]>,
    default: (): any[] => []
  },
  hideTitle: {
    type: Boolean,
    default: false
  },
  hideValidation: {
    type: Boolean,
    default: false
  },
  debugCss: {
    type: Boolean,
    default: false
  },
  displayType: {
    type: String as PropType<'column' | 'row' | 'inline'>
  },
  column: {
    type: [Number, String],
    default: 1
  },
  labelWidth: {
    type: [Number, String],
    default: ''
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  errorFields: {
    type: Array as PropType<Error[]>,
    default: (): Error[] => []
  },
  effectiveLabelWidth: {
    type: [Number, String],
    default: ''
  },
  allTouched: {
    type: Boolean,
    default: false
  }
};

export default defineComponent({
  name: 'CoreRender',
  inheritAttrs: false,
  props: coreRenderProps,
  components: {
    RenderList,
    RenderObject,
    RenderField
  },
  setup(props) {
    const { displayType, effectiveLabelWidth } = props;

    const coreDisplayType:'column' | 'row' | 'inline' = props.schema.displayType || displayType || 'column';

    const isList = computed<boolean>(() => isListType(props.schema));
    const isObj = computed<boolean>(() => isObjType(props.schema));
    const isCheckBox = computed<boolean|undefined>(() => isCheckBoxType(props.schema, props.readOnly));
    const isComplex = computed<boolean>(() => isObj.value || isList.value);

    const isColumn = coreDisplayType === 'column'
    const isInline = coreDisplayType === 'inline'
    const isRow = coreDisplayType === 'row'

    const coreLabelWidth = isLooselyNumber(effectiveLabelWidth)
        ? Number(effectiveLabelWidth)
        : isCssLength(effectiveLabelWidth)
            ? effectiveLabelWidth
            : 110; // 默认是 110px 的长度

    const fieldClass = computed(() => {
      const { schema } = props
      return [
        !isInline && 'w-100',
        typeof schema.className === 'string' && schema.className,
        schema.type === 'object' && isObj.value && 'fr-field-object',
        schema.type === 'array' && isList.value && 'fr-field-column',
        schema.type === 'boolean' && isCheckBox.value && `flex ${isColumn ? 'flex-column' : ''}`,
        !isComplex.value && !isCheckBox.value && isColumn && 'flex-column',
        isInline && (schema.type !== 'object' || !isObj.value) && 'fr-field-inline',
        props.debugCss && 'debug'
      ].filter(d => d).join(' ')
    })

    const labelStyle = computed<CSSProperties>(() => {
      if (isComplex.value || isColumn) {
        return { flexGrow: 1 }
      }
      if (isInline) {
        return { marginTop: '5px', paddingLeft: '12px' }
      }
      return {
        width: `${coreLabelWidth}px`
      }
    })

    // return {
    //   coreDisplayType,
    //   isList,
    //   isObj,
    //   isCheckBox,
    //   isComplex,
    //   coreLabelWidth,
    //   otherLabelStyle,
    //   isColumn: coreDisplayType === 'column',
    //   isInline: coreDisplayType === 'inline',
    //   isRow: coreDisplayType === 'row'
    // }
    return () => {
      const { schema, item } = props
      if (schema.hidden) {
        return null
      }
      return h('div', { class: `fr-field flex ${fieldClass.value}`, style: !isObj.value ? {
          paddingRight: '8px',
          width: schema.width ? `${typeof schema.width === 'string' ? schema.width : schema.width + 'px' }` : `calc(100% /${props.column})`,
        } : {} }, h(RenderField, {
          fieldId: props.id,
          dataIndex: props.dataIndex,
          dataPath: props.dataPath,
          coreValue: props.coreValue,
          dependValues: props.dependValues,
          errorFields: props.errorFields,
          _schema: props.schema,
          displayType: coreDisplayType,
          hideTitle: props.hideTitle,
          hideValidation: props.hideValidation,
          labelClass: isInline ? '' : [
            'fr-label',
            schema.type === 'object' && isObj.value && schema.title ? 'fr-label-object': '',
            schema.type === 'array' && isList.value && schema.title ? 'fr-label-list': '',
            (!isComplex.value && !isCheckBox.value) && isColumn ? 'fr-label-column': '',
            (!isComplex.value && !isCheckBox.value) && isRow  ? 'fr-label-row': '',
            (!isComplex.value && !isCheckBox.value) && isRow && !isObj.value  ? 'flex-shrink-0 fr-label-row': '',
          ].filter(d => !!d).join(' '),
          labelStyle: labelStyle.value,
          contentClass: [
            'fr-content',
            schema.type === 'boolean' && isCheckBox.value ? 'fr-content-column' : '',
            (!isComplex.value && !isCheckBox.value) && isColumn ? 'fr-content-column' : '',
            (!isComplex.value && !isCheckBox.value) && isRow ? 'fr-content-row' : '',
            (!isComplex.value && !isCheckBox.value) && isRow && !isObj.value ? 'flex-grow-1 relative' : '',
            isInline ? 'fr-content-inline' : '',
          ].filter(d => !!d).join(' ')
      }, {
          default: () => [
            item.children && item.children.length > 0 && isObj.value && h('div', { class: 'flex flex-wrap' }, h(
                RenderObject, { dataIndex: props.dataIndex, displayType: coreDisplayType, hideTitle: props.hideTitle, childData: item.children }
            )),
            item.children && item.children.length > 0 && isList.value && h(RenderList, {
              parentId: props.id,
              schema,
              errorFields: props.errorFields,
              dataIndex: props.dataIndex,
              displayType: coreDisplayType,
              childData: item.children
            }),
            !item.children || !item.children.length && schema.title
          ]
      }))
    }
  }
})
</script>
<!--<template>-->
<!--  <div-->
<!--      v-if="!schema.hidden"-->
<!--      class="fr-field flex"-->
<!--      :class="[-->
<!--            !isInline && 'w-100',-->
<!--            typeof schema.className === 'string' && schema.className,-->
<!--            schema.type === 'object' && isObj && 'fr-field-object',-->
<!--            schema.type === 'array' && isList && 'fr-field-column',-->
<!--            schema.type === 'boolean' && isCheckBox && `flex ${isColumn ? 'flex-column' : ''}`,-->
<!--            !isComplex && !isCheckBox && isColumn && 'flex-column',-->
<!--            isInline && (schema.type !== 'object' || !isObj) && 'fr-field-inline',-->
<!--            debugCss && 'debug'-->
<!--          ]"-->
<!--      :style="!isObj ? {-->
<!--        paddingRight: '8px',-->
<!--        width: schema.width ? `${typeof schema.width === 'string' ? schema.width : schema.width + 'px' }` : `calc(100% /${column})`,-->
<!--      } : {}"-->
<!--      >-->
<!--    <render-field-->
<!--        :field-id="id"-->
<!--        :data-index="dataIndex"-->
<!--        :data-path="dataPath"-->
<!--        :coreValue="coreValue"-->
<!--        :depend-values="dependValues"-->
<!--        :error-fields="errorFields"-->
<!--        :_schema="schema"-->
<!--        :label-class="isInline ? '' : [-->
<!--            'fr-label',-->
<!--             schema.type === 'object' && isObj && schema.title ? 'fr-label-object': '',-->
<!--             schema.type === 'array' && isList && schema.title ? 'fr-label-list': '',-->
<!--             (!isComplex && !isCheckBox) && isColumn ? 'fr-label-column': '',-->
<!--             (!isComplex && !isCheckBox) && isRow  ? 'fr-label-row': '',-->
<!--             (!isComplex && !isCheckBox) && isRow && !isObj  ? 'flex-shrink-0 fr-label-row': '',-->
<!--          ].filter(d => !!d).join(' ')"-->
<!--        :label-style="{-->
<!--            width: `${coreLabelWidth}px`,-->
<!--            flexGrow: isComplex || isColumn ? 1 : 0,-->
<!--            ...otherLabelStyle-->
<!--        }"-->
<!--        :content-class="[-->
<!--            'fr-content',-->
<!--            schema.type === 'boolean' && isCheckBox ? 'fr-content-column' : '',-->
<!--            (!isComplex && !isCheckBox) && isColumn ? 'fr-content-column' : '',-->
<!--            (!isComplex && !isCheckBox) && isRow ? 'fr-content-row' : '',-->
<!--            (!isComplex && !isCheckBox) && isRow && !isObj ? 'flex-grow-1 relative' : '',-->
<!--            isInline ? 'fr-content-inline' : '',-->
<!--        ].filter(d => !!d).join(' ')"-->
<!--        :display-type="coreDisplayType"-->
<!--        :hide-title="hideTitle"-->
<!--        :hide-validation="hideValidation"-->
<!--    >-->
<!--      <template v-if="item.children && item.children.length > 0">-->
<!--        <div v-if="isObj" class="flex flex-wrap">-->
<!--          <render-object-->
<!--              :data-index="dataIndex"-->
<!--              :display-type="coreDisplayType"-->
<!--              :hide-title="hideTitle"-->
<!--              :child-data="item.children"-->
<!--          />-->
<!--        </div>-->
<!--        <render-list-->
<!--            v-else-if="isList"-->
<!--            :parent-id="id"-->
<!--            :schema="schema"-->
<!--            :data-index="dataIndex"-->
<!--            :error-fields="errorFields"-->
<!--            :display-type="coreDisplayType"-->
<!--            :child-data="item.children"-->
<!--        />-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        {{ schema.title }}-->
<!--      </template>-->
<!--    </render-field>-->
<!--  </div>-->
<!--</template>-->