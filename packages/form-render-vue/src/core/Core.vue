<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch,
  watchEffect,
  h,
} from 'vue';
import CoreRender from './CoreRender.vue';
import { useFormStore, usePropsStore } from '../hooks';
import {
  getParentProps,
  getParentPath,
  getValueByPath,
  getDataPath,
  parseRootValueInSchema,
  clone,
} from '../utils';
import { PropSchema } from '../Interface';

export default defineComponent({
  name: 'Core',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '#',
    },
    dataIndex: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    formItem: {
      type: Object as PropType<{ [key: string]: any }>,
      default: undefined,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    hideValidation: {
      type: Boolean,
      default: false,
    },
    debugCss: {
      type: Boolean,
      default: false,
    },
    displayType: {
      type: String as PropType<'column' | 'row' | 'inline'>,
    },
  },
  setup(props) {
    const form = useFormStore();
    const propsStore = usePropsStore();
    let snapShot: PropSchema = {};

    const allTouched = computed<boolean>(() => form.allTouched);

    const { displayType, column, labelWidth, readOnly } = propsStore;

    const item = computed<{ [key: string]: any }>(() =>
      props.formItem ? props.formItem : form.flatten[props.id],
    );

    const schema = ref<PropSchema>({});

    watch(
      item,
      (newValue = {}) => {
        schema.value = clone(newValue.schema);
      },
      {
        immediate: true,
      },
    );

    const dataPath: string = getDataPath(props.id, props.dataIndex);

    const parentPath = getParentPath(dataPath);

    const effectiveLabelWidth: string | number =
      getParentProps('labelWidth', props.id, form.flatten) || labelWidth;

    const coreValue: any = computed(() =>
      getValueByPath(form.formData, dataPath),
    );

    const dependValues = ref<any[]>([]);

    let rootValue;

    watchEffect(() => {
      if (!schema.value) return;
      const { dependencies } = schema.value;
      try {
        if (Array.isArray(dependencies)) {
          dependValues.value.splice(0);

          dependencies.forEach((d) => {
            const itemPath = getDataPath(d, props.dataIndex);
            const result = getValueByPath(form.formData, itemPath);
            dependValues.value.push(result);
          });
        }
      } catch (error) {
        console.error(`dependencies 计算报错，${dependencies}`);
      }

      try {
        rootValue = getValueByPath(form.formData, parentPath);
      } catch (error) {
        console.error(`rootValue 计算报错`);
      }
    });

    watch(
      () => form.isEditing,
      (newValue) => {
        const _schema = schema.value;
        if (newValue && snapShot) {
          schema.value = snapShot;
        } else {
          if (JSON.stringify(_schema).indexOf('rootValue') > -1) {
            schema.value = parseRootValueInSchema(_schema, rootValue);
          }
          snapShot = { ..._schema };
        }
      },
    );

    return () => {
      if (!item.value) return null;

      return h(CoreRender, {
        item: item.value,
        id: props.id,
        dataIndex: props.dataIndex,
        dataPath,
        coreValue: coreValue.value,
        dependValues: dependValues.value,
        hideValidation: props.hideValidation,
        debugCss: props.debugCss,
        schema: schema.value,
        displayType: props.displayType || displayType,
        column,
        labelWidth,
        readOnly,
        errorFields: form.errorFields,
        effectiveLabelWidth,
        allTouched: allTouched.value,
      });
    };

    // return {
    //   flatten: computed(() => form.flatten),
    //   dataPath,
    //   parentPath,
    //   coreValue,
    //   item,
    //   schema,
    //   dependValues,
    //   displayType,
    //   column,
    //   labelWidth,
    //   readOnly,
    //   effectiveLabelWidth,
    //   allTouched,
    //   errorFields: computed(() => form.errorFields)
    // }
  },
});
</script>

<!--<template>-->
<!--  <core-render-->
<!--      v-if="item"-->
<!--      :id="id"-->
<!--      :data-index="dataIndex"-->
<!--      :item="item"-->
<!--      :data-path="dataPath"-->
<!--      :coreValue="coreValue"-->
<!--      :depend-values="dependValues"-->
<!--      :hide-title="hideTitle"-->
<!--      :hide-validation="hideValidation"-->
<!--      :debug-css="debugCss"-->
<!--      :schema="schema"-->
<!--      :display-type="displayType"-->
<!--      :column="column"-->
<!--      :label-width="labelWidth"-->
<!--      :read-only="readOnly"-->
<!--      :error-fields="errorFields"-->
<!--      :effective-label-width="effectiveLabelWidth"-->
<!--      :all-touched="allTouched"-->
<!--  />-->
<!--</template>-->
