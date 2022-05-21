<script lang="ts">
import { defineComponent, CSSProperties, h, PropType, computed } from 'vue'
import dayjs from 'dayjs';
import { DatePicker } from 'ant-design-vue';
import { getFormat } from '../../utils';

export default defineComponent({
  name: 'Date',
  inheritAttrs: false,
  props: {
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
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

    const valueObj = computed(() => {
      const { value, format } = props
      let _value: any = value || undefined;
      if (typeof _value === 'string') {
        if (format === 'week') {
          _value = _value ? _value.substring(0, _value.length - 1) : _value;
        }
        if (format === 'quarter') {
          _value = _value.replace('Q', '');
        }
      }
      if (_value) {
        _value = dayjs(_value, getFormat(format));
      }
      return _value
    })

    return () => {
      const { onChange, format, value, style, otherProps = {} } = props

      const dateFormat = getFormat(props.format);

      const dateParams: {[key: string]: any} = {
        ...otherProps,
        value: valueObj,
        style: { width: '100%', ...style },
        onChange: handleChange,
      };

      // TODO: format 是在 options 里自定义的情况，是否要判断一下要不要 showTime
      if (format === 'dateTime') {
        dateParams.showTime = true;
      }

      if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
        dateParams.picker = format;
      }

      if (dateFormat === format) {
        dateParams.format = format;
      }

      return h(DatePicker, { ...dateParams });
    }
  }
})
</script>