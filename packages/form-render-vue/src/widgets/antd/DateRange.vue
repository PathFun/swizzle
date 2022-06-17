<script lang="ts">
import { defineComponent, h, CSSProperties, PropType } from 'vue';
import { DatePicker } from 'ant-design-vue';
import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(weekday);
dayjs.extend(localeData);
import { getFormat } from '../../utils';
export default defineComponent({
  name: 'DateRange',
  inheritAttrs: false,
  props: {
    onChange: {
      type: Function as PropType<(...args: any[]) => void>,
      required: true,
    },
    value: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
    readOnly: Boolean,
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    format: {
      type: String,
      default: 'date',
    },
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    const handleChange = (val: any, stringList: any) => {
      const emptyList1 = stringList[0] === '' || stringList[1] === '';
      const emptyList2 =
        stringList[0] === undefined || stringList[1] === undefined;
      if (emptyList1 || emptyList2) {
        props.onChange && props.onChange(null);
      } else {
        props.onChange && props.onChange(stringList);
      }
    };

    return () => {
      const {
        onChange,
        format,
        value,
        style,
        otherProps = {},
        ...rest
      } = props;
      const dateFormat = getFormat(format);
      let [start, end] = Array.isArray(value) ? value : [];
      // week的时候会返回 2020-31周 quarter会返回 2020-Q2 需要处理之后才能被 day
      if (typeof start === 'string' && typeof end === 'string') {
        if (format === 'week') {
          start = start.substring(0, start.length - 1);
          end = end.substring(0, end.length - 1);
        }
        if (format === 'quarter') {
          start = start.replace('Q', '');
          end = end.replace('Q', '');
        }
      }

      let _value: [Dayjs, Dayjs] | undefined = undefined;

      if (start && end) {
        _value = [dayjs(start, dateFormat), dayjs(end, dateFormat)];
      }

      let dateParams: { [key: string]: any } = {
        ...otherProps,
        value: _value,
        style: { width: '100%', ...style },
        onChange: handleChange,
      };

      if (format === 'dateTime') {
        dateParams.showTime = true;
      }

      if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
        dateParams.picker = format;
      }

      dateParams = { ...rest, ...dateParams };

      if (dateFormat === format) {
        dateParams.format = format;
      }

      return h(DatePicker.RangePicker, { ...dateParams });
    };
  },
});
</script>
