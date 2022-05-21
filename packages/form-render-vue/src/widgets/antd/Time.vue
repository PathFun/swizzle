<script lang="ts">
import { defineComponent, CSSProperties, h, PropType } from 'vue'
import dayjs from 'dayjs';
import { TimePicker } from 'ant-design-vue';
import { getFormat } from '../../utils';
export default defineComponent({
  name: 'Time',
  inheritAttrs: false,
  props: {
    onChange: {
      type: Function,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readOnly: Boolean,
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    },
    format: {
      type: String,
      default: 'date'
    },
    otherProps: {
      type: Object
    }
  },
  setup(props) {

    const handleChange = (value: any, string: any) => {
      props.onChange(string);
    };

    return () => {
      const { onChange, format, value, style, otherProps = {}, ...rest } = props
      const timeFormat = getFormat(format);
      const _value = value ? dayjs(value, timeFormat) : undefined;

      const timeParams = {
        ...otherProps,
        value: _value,
        style: { width: '100%', ...style },
        onChange: handleChange,
        format: timeFormat,
        ...rest,
      };

      return h(TimePicker, { ...timeParams });
    }
  }
})
</script>