<script setup lang="ts">
import FR, { useForm } from 'form-render-vue3';

const form = useForm({
  initialValue: {},
  showValidate: true,
  onChange: (formData: { [key: string]: any }) => {
    console.log(formData);
  },
});

const schema: any = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "输入框"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '配置',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input大小',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['大', '中', '小'],
          widget: 'radio',
        },
        hidden: {
          title: '是否隐藏',
          type: 'boolean',
        },
        readOnly: {
          title: '是否只读',
          type: 'boolean',
        },
        disabled: {
          title: '是否置灰',
          type: 'boolean',
        },
      },
    },
  },
};
</script>
<template>
  <FR :schema="schema" :form="form" display-type="row" />
</template>
