<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType, h } from 'vue';
import { Select } from 'ant-design-vue';
import { getArray } from '../../utils';
import { isUndefined } from 'lodash-es';
export default defineComponent({
  name: 'MultiSelect',
  inheritAttrs: false,
  props: {
    schema: Object,
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
      required: true,
    },
    value: {},
    disabled: Boolean,
    readOnly: Boolean,
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    options: Array,
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    const handleChange = (val: any) => {
      let _val = !isUndefined(val) ? val : null;
      props.onChange && props.onChange(_val);
    };

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
      const { value, style, onChange, otherProps = {}, ...rest } = props;
      const _value = Array.isArray(value) ? value : undefined;
      const finalProps = {
        ...rest,
        ...otherProps,
        value: _value,
        options: options.value,
        style: { width: '100%', ...style },
        onChange: handleChange,
      };
      return h(
        Select,
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
