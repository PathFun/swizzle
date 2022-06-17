<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { usePropsStore, useFormStore } from '../../hooks';
import { extraSchemaList, getWidgetName } from '../../mapping';
import { isListType, isObjType } from '../../utils';
import { transformProps } from '../../createWidget';
import { PropSchema } from '../../Interface';

const ErrorSchema = defineComponent({
  inheritAttrs: false,
  props: {
    schema: Object as PropType<PropSchema>,
  },
  setup(props) {
    return () => {
      const text: string = JSON.stringify(props.schema);
      return h('div', [
        h('div', { style: { color: 'red' } }, 'schema未匹配到展示组件:'),
        h('div', text),
      ]);
    };
  },
});

export default defineComponent({
  name: 'RenderField',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object as PropType<PropSchema>,
      default: (): PropSchema => ({}),
      required: true,
    },
    onChange: {
      type: Function,
      default: () => {
        console.error('error');
      },
    },
    value: {},
    dependValues: {
      type: Array as PropType<any[]>,
      default: (): any[] => [],
    },
    onItemChange: {
      type: Function,
      default: () => {
        console.error('error');
      },
    },
    formData: {},
    getValue: {
      type: Function,
      default: () => {
        console.error('error');
      },
    },
    readOnly: {
      type: [Boolean, String],
      default: false,
    },
    dataPath: { type: String, default: '' },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    dataIndex: {
      type: Array as PropType<number[]>,
      default: (): number[] => [],
    },
  },
  components: {
    ErrorSchema,
  },
  setup(props, { slots }) {
    const propStore = usePropsStore();
    const formStore = useFormStore();

    return () => {
      const {
        schema = {},
        onChange,
        value,
        dependValues,
        onItemChange,
        formData,
        getValue,
        readOnly,
        dataPath,
        disabled,
        dataIndex,
      } = props;

      const { widgets, mapping, globalProps, theme } = propStore;
      const {
        setValueByPath,
        getSchemaByPath,
        setSchemaByPath,
        setSchema,
        setValues,
        getValues,
        resetFields,
        setErrorFields,
        removeErrorField,
      } = formStore;

      let widgetName = getWidgetName(schema, mapping);
      const customName = schema.widget;
      if (customName && widgets[customName]) {
        widgetName = customName;
      }
      const readOnlyName = schema.readOnlyWidget || 'html';
      if (readOnly && !isObjType(schema) && !isListType(schema)) {
        widgetName = readOnlyName;
      }
      if (!widgetName) {
        widgetName = 'input';
        return h(ErrorSchema, { schema });
      }
      const Widget = widgets[widgetName];

      const extraSchema = extraSchemaList[widgetName] || {};
      let widgetProps = {
        schema: { ...schema, ...extraSchema },
        onChange,
        value,
        disabled,
        readOnly,
        theme,
        otherProps: {
          ...schema?.props,
        },
        ...globalProps,
      };

      if (schema.type === 'string' && typeof schema.max === 'number') {
        widgetProps.maxLength = schema.max;
      }

      ['title', 'placeholder', 'disabled', 'format'].forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(schema, key)) {
          widgetProps[key] = schema[key];
        }
      });

      if (schema.props) {
        widgetProps = { ...widgetProps, ...schema.props };
      }

      Object.keys(schema).forEach((key) => {
        if (
          typeof key === 'string' &&
          key.toLowerCase().indexOf('props') > -1 &&
          key.length > 5
        ) {
          widgetProps[key] = schema[key];
        }
      });

      const hideSelf = (hidden = true) => {
        setSchemaByPath(schema._id, { hidden });
      };

      // 避免传组件不接受的props，按情况传多余的props
      widgetProps.addons = {
        dependValues,
        onItemChange,
        getValue,
        formData,
        dataPath,
        dataIndex,
        setValueByPath,
        setValue: setValueByPath,
        getSchemaByPath,
        setSchemaByPath,
        setSchema,
        setValues,
        getValues,
        resetFields,
        setErrorFields,
        removeErrorField,
        hideSelf,
      };

      const finalProps = transformProps(widgetProps);

      // return h(Suspense,{}, {
      //   fallback: h('div'),
      //   default: h('div', { class: 'fr-item-wrapper' }, h(Widget, { ...finalProps }, _children || false))
      // })
      return h(
        'div',
        { class: 'fr-item-wrapper' },
        h(Widget, { ...finalProps }, () => slots.default && slots.default()),
      );
    };
  },
});
</script>
