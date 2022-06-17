<script setup lang="ts">
import FR, { useForm } from 'form-render-vue3';
import type { Schema } from 'form-render-vue3';
const form = useForm({
  formData: {},
  showValidate: true,
  onChange: (formData: { [key: string]: any }) => {
    console.log(formData);
  },
});

const basic: Schema = {
  type: 'object',
  properties: {
    url: {
      title: 'url输入框',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email输入框',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '正则校验字符串',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};
</script>
<template>
  <FR :schema="basic" :form="form" />
</template>
