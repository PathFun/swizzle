<script lang="ts">
import { defineComponent, PropType, h } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { Upload, message, Button } from 'ant-design-vue';
import type { UploadFile, UploadChangeParam } from 'ant-design-vue';
export default defineComponent({
  name: 'Upload',
  inheritAttrs: false,
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
      required: true,
    },
    otherProps: {
      type: Object,
    },
  },
  setup(props) {
    const finalProps = {
      name: 'file',
      onChange(info: UploadChangeParam<UploadFile<any>>) {
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功`);
          props.onChange && props.onChange(info.file.response.url);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败`);
        }
      },
      onRemove() {
        props.onChange && props.onChange('');
      },
      ...(props.otherProps?.uploadProps || {}),
    };

    return () => {
      const { otherProps = {}, value } = props;
      const { buttonProps = {} } = otherProps;
      const btnProps = {
        ...buttonProps,
        ...otherProps,
      };

      return h('div', { class: 'fr-upload-mod' }, [
        h(
          Upload,
          {
            class: 'fr-upload-file',
            ...finalProps,
          },
          () =>
            h(
              Button,
              { ...btnProps },
              { icon: () => h(UploadOutlined), default: () => '上传' },
            ),
        ),
        value
          ? h(
              'a',
              {
                href: value,
                target: '_blank',
                rel: 'noopener noreferrer',
                class: 'fr-upload-preview',
              },
              '已上传地址',
            )
          : null,
      ]);
    };
  },
});
</script>
