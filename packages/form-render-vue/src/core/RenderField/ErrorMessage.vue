<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { translateMessage } from '../../utils';
import './ErrorMessage.less';
import { PropSchema } from '../../Interface';

export default defineComponent({
  inheritAttrs: false,
  props: {
    message: {},
    schema: {
      type: Object as PropType<PropSchema>,
      default: (): PropSchema => ({}),
    },
    softHidden: { type: Boolean, default: false },
    hardHidden: { type: Boolean, default: false },
  },
  setup(props) {
    return () => {
      const { message, schema, softHidden, hardHidden } = props;
      let msg = '';
      if (typeof message === 'string') msg = message;
      if (Array.isArray(message)) {
        msg = message[0] || '';
      }

      msg = translateMessage(msg, schema);

      if (hardHidden) return h('div', { class: `error-message` });

      return !msg && softHidden
        ? null
        : h('div', { class: `error-message` }, msg);
    };
  },
});
</script>
