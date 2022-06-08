<script lang="ts">
import { defineComponent, h } from 'vue';
import ColorPicker from './color/index.vue';
import { Input, Popover } from 'ant-design-vue';

export default defineComponent({
  name: 'Color',
  inheritAttrs: false,
  props: {
    value: String,
    disabled: Boolean,
    readOnly: Boolean,
    otherProps: {
      type: Object,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const onPickerChange = (value: any) => {
      const { disabled, readOnly } = props;
      if (disabled || readOnly) return;
      emit('change', value);
    };
    const onInputChange = (e: any) => {
      emit('change', e.target.value);
    };

    return () => {
      const { readOnly, disabled, value = '#FFFFFF', otherProps = {} } = props;
      return h('div', { class: 'fr-color-picker' }, [
        h(
          Popover,
          { title: '', trigger: 'click' },
          {
            default: () =>
              h('div', {
                style: {
                  width: '40px',
                  height: '100%',
                  backgroundColor: value,
                  border: '1px solid #666',
                },
              }),
            content: () =>
              h(ColorPicker, {
                ...otherProps,
                value: value,
                onChange: onPickerChange,
              }),
          },
        ),
        readOnly
          ? h('span', value)
          : h(Input, {
              placeholder: value,
              disabled: disabled,
              value: value,
              onChange: onInputChange,
            }),
      ]);
    };
  },
});
</script>
