<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { Checkbox } from 'ant-design-vue';

import { getArray } from '../../utils';
export default defineComponent({
  name: 'Checkboxes',
  inheritAttrs: false,
  props: {
    schema: Object,
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
    },
    value: Array as PropType<any[]>,
    options: Array,
    disabled: Boolean,
    readOnly: Boolean,
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    return () => {
      const {
        schema,
        options: _options,
        otherProps = {},
        value,
        ...rest
      } = props;
      let options;
      // 如果已经有外部注入的options了，内部的schema就会被忽略
      if (_options && Array.isArray(_options)) {
        options = _options;
      } else {
        const { enum: enums, enumNames } = schema || {};
        options = getArray(enums).map((item, idx) => {
          let label =
            enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
          return { label, value: item };
        });
      }

      const checkboxesProps = {
        ...otherProps,
        options,
        value: typeof value === 'number' ? value : undefined,
        mode: 'multiple',
        ...rest,
      };
      return h(
        Checkbox.Group,
        { ...checkboxesProps },
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

<style scoped></style>
