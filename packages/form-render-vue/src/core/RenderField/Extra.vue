<script lang="ts">
import { defineComponent, h, PropType } from "vue";
import { usePropsStore } from '../../hooks';
import './Extra.less';
import { PropSchema } from "../../../Interface";
export default defineComponent({
  inheritAttrs: false,
  props: {
    schema: {
      type: Object as PropType<PropSchema>,
      default: ():PropSchema => ({})
    },
  },
  setup(props) {

    const { widgets } = usePropsStore() || {};

    return () => {
      const { schema = {} } = props
      const { extra } = schema;
      if (!extra) return null;

      // widget 这个api也可以不对外
      if (typeof extra === 'object' && extra.widget && typeof extra.widget === 'string') {
        const Widget = widgets[extra.widget] || null
        if (Widget) return h(Widget, { schema });
      }

      let __html: string = '';
      if (typeof extra === 'string') {
        __html = extra;
      }
      // 内部BU使用的口子，这个api不对外，也没有必要
      if (typeof extra === 'object' && extra.text && typeof extra.text === 'string') {
        __html = extra.text;
      }
      return __html && h('div', { class: 'fr-form-item-extra',  innerHTML: __html });
    }
  }
})
</script>
