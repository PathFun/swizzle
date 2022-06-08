<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType, h } from 'vue';
import { Radio } from 'ant-design-vue';
import { getArray } from '../../utils';
export default defineComponent({
  name: 'Radio',
  inheritAttrs: false,
  props: {
    schema: Object,
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
      required: true,
    },
    value: {
      type: [String, Number],
    },
    disabled: Boolean,
    readOnly: Boolean,
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    options: {},
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    const options = computed(() => {
      const { options: _options, schema } = props;
      if (_options && Array.isArray(_options)) {
        return _options;
      } else {
        const { enum: enums, enumNames } = schema || {};
        return getArray(enums).map((item, idx) => {
          let label =
            enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
          return { label, value: item };
        });
      }
    });

    return () => {
      const { schema, otherProps = {}, ...rest } = props;
      const finalProps = {
        ...otherProps,
        ...rest,
        options: options.value,
      };
      return h(
        Radio.Group,
        { ...finalProps, mode: 'multiple' },
        {
          label: ({ label }) =>
            typeof label === 'string' && label[0] === '<'
              ? h('span', { innerHTML: label })
              : label,
        },
      );
    };
  },
});
</script>
