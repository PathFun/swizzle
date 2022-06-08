<script lang="ts">
import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'Html',
  inheritAttrs: false,
  props: {
    schema: Object,
    value: {},
  },
  setup(props) {
    return () => {
      const { schema = {}, value } = props;
      let __html = '-';
      if (schema.type === 'boolean') {
        __html = value === true ? '✔' : '✘';
      } else if (
        Array.isArray(schema.enum) &&
        Array.isArray(schema.enumNames)
      ) {
        if (['string', 'number'].indexOf(typeof value) > -1) {
          const idx = schema.enum.indexOf(value);
          __html = schema.enumNames[idx] || '-';
        } else if (Array.isArray(value)) {
          let idxStr = '-';
          value.forEach((v) => {
            const idx = schema.enum.indexOf(v);
            const name = schema.enumNames[idx];
            if (name) {
              idxStr += ',' + name;
            }
          });
          __html = idxStr.replace('-,', '');
        }
      } else if (typeof value === 'number') {
        __html = String(value);
      } else if (typeof value === 'string') {
        __html = value;
      } else if (
        schema.type === 'range' &&
        Array.isArray(value) &&
        value[0] &&
        value[1]
      ) {
        __html = `${value[0]} - ${value[1]}`;
      } else if (value && ['number', 'string'].indexOf(typeof value) === -1) {
        __html = JSON.stringify(value);
      }

      return h('div', { innerHTML: __html });
    };
  },
});
</script>
