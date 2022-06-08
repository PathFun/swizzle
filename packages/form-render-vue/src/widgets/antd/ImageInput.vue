<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { Input as ImageInput, Popover } from 'ant-design-vue';
import { PictureOutlined } from '@ant-design/icons-vue';
const DEFAULT_IMG =
  'https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png';

const PreviewNode = defineComponent({
  props: ['value'],
  inheritAttrs: false,
  setup(props) {
    return () => {
      return h(
        Popover,
        {
          class: 'fr-preview',
          placement: 'bottom',
        },
        {
          content: () =>
            h('img', {
              src: props.value || DEFAULT_IMG,
              alt: '图片地址错误',
              class: 'fr-preview-image',
            }),
          default: () => h(PictureOutlined),
        },
      );
    };
  },
});

export default defineComponent({
  name: 'ImageInput',
  inheritAttrs: false,
  props: {
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
      required: true,
    },
    value: String,
    disabled: Boolean,
    readOnly: Boolean,
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    return () => {
      const { otherProps = {}, ...rest } = props;
      return h(
        ImageInput,
        { ...otherProps, ...rest },
        {
          addonAfter: () => h(PreviewNode, { value: props.value }),
        },
      );
    };
  },
});
</script>
