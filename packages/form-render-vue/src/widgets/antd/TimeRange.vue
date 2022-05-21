<script lang="ts">
import { defineComponent, h, CSSProperties, PropType } from 'vue'
import { TimePicker } from 'ant-design-vue';
const { TimeRangePicker } = TimePicker;
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
declare type EventValue<DateType> = DateType | null;
declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;
import { getFormat } from '../../utils';
export default defineComponent({
  name: 'TimeRange',
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
    const handleChange = (value: any, stringList: any) => {
      const emptyList1 = stringList[0] === '' || stringList[1] === '';
      const emptyList2 =
          stringList[0] === undefined || stringList[1] === undefined;
      if (emptyList1 || emptyList2) {
        props.onChange(undefined);
      } else {
        props.onChange(stringList);
      }
    };
    return () => {
      const { onChange, format, value, style, otherProps = {}, ...rest } = props;
      const timeFormat = getFormat(format);
      let [start, end] = Array.isArray(value) ? value : [];
      const _value:RangeValue<Dayjs>|RangeValue<string> = start && end ? [dayjs(start, timeFormat), dayjs(end, timeFormat)] : null;

      const timeParams = {
        ...otherProps,
        style: { width: '100%', ...style },
        value: _value,
        onChange: handleChange,
        ...rest,
      };

      return h(TimeRangePicker, { ...timeParams });
    }
  }
})
</script>