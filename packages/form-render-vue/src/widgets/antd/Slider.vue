<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import { InputNumber, Slider } from 'ant-design-vue';
export default defineComponent({
  name: "Slider",
  inheritAttrs: false,
  props: {
    schema: Object,
    onChange: {
      type: Function as PropType<(...args: any[]) => any>
    },
    value: Number,
    disabled: Boolean,
    readOnly: Boolean,
    hideInput: Boolean,
    inputProps: Object,
    otherProps: {
      type: Object
    }
  },
  setup(props) {
    return () => {
      const { hideInput, schema = {}, otherProps = {}, onChange, value, inputProps } = props
      const { max, min, step } = schema;
      let setting = {};
      if (max || max === 0) {
        setting = { max };
      }

      if (min || min === 0) {
        setting = { ...setting, min };
      }

      if (step) {
        setting = { ...setting, step };
      }

      return h('div', { class: 'fr-slider' }, [
          h('div', { style: { flex: 1, marginRight: hideInput ? '0' : '12px' } }, h(Slider, {
            ...otherProps,
            ...setting,
            onChange,
            value: typeof value === 'number' ? value : min || 0,
            style: { flex: 1, marginRight: hideInput ? '0' : '12px' },
          })),
          hideInput ? null : h(InputNumber, {
            ...otherProps,
            ...setting,
            ...inputProps,
            style: { width: '90px' },
            value,
            onChange
          })
      ])
    }
  }
})
</script>