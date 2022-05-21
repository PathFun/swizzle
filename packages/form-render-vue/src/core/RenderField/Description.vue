<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
export default defineComponent({
  name: 'Description',
  inheritAttrs: false,
  props: {
    displayType: String as PropType<'column' | 'row' | 'inline'>,
    schema: Object
  },
  setup(props) {
    return () => {
      const { displayType = 'column', schema = {} } = props
      const { description, descType } = schema;
      if (!description) return null;

      switch (displayType) {
        case 'row':
          return h('span', {
            class: 'fr-tooltip-toggle',
            'aria-label': description,
          },[
            h('i', { class: 'fr-tooltip-icon' }),
            h('div', { class: 'fr-tooltip-container' },
                [
                  h('i', { class: 'fr-tooltip-triangle' }),
                  description
                ]
            )
          ]);
        case 'inline':
          return null;
        default:
          if (descType === 'icon') {
            return h('span', {
              class: 'fr-tooltip-toggle',
              'aria-label': description,
            },[
              h('i', { class: 'fr-tooltip-icon' }),
              h('div', { class: 'fr-tooltip-container' },
                  [
                    h('i', { class: 'fr-tooltip-triangle' }),
                    description
                  ]
              )
            ]);
          }
          return h('span', { class: 'fr-desc ml2' }, `( ${description} )`)
      }
    }
  }
})
</script>