<script lang="ts">
import { defineComponent, h, CSSProperties, PropType } from 'vue';
import { isCheckBoxType } from '../../utils';
import { usePropsStore } from '../../hooks';
import Description from './Description.vue';

export default defineComponent({
  name: 'FieldTitle',
  inheritAttrs: false,
  components: {
    Description,
  },
  props: {
    labelClass: String,
    labelStyle: Object as PropType<CSSProperties>,
    displayType: String as PropType<'column' | 'row' | 'inline'>,
    schema: Object,
  },
  setup(props) {
    const useProps = usePropsStore();
    return () => {
      const { displayType: globalDisplayType, readOnly } = useProps;
      const {
        labelClass = '',
        labelStyle = {},
        schema = {},
        displayType = 'column',
      } = props;
      const { title, required, type } = schema;
      const isObjType = type === 'object';

      let _displayType =
        schema.displayType || displayType || globalDisplayType || 'column';

      const Label = title
        ? h(
            'label',
            {
              class: `fr-label-title ${
                isCheckBoxType(schema, readOnly) || _displayType === 'column'
                  ? 'no-colon'
                  : ''
              }`,
              title,
            },
            [
              required === true &&
                h('span', { class: 'fr-label-required' }, ' *'),
              h(
                'span',
                {
                  class: `${isObjType ? 'b' : ''} ${
                    _displayType === 'column' ? 'flex-none' : ''
                  }`,
                },
                h('span', { innerHTML: title }),
              ),
              h(Description, { schema, displayType: _displayType }),
            ],
          )
        : '';

      return h('div', { class: labelClass, style: labelStyle }, Label);
    };
  },
});
</script>
