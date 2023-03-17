<script setup lang="ts">
import FR, { useForm } from 'form-render-vue3';
const form = useForm({
  initialValue: {},
  showValidate: true,
  onChange: (formData: { [key: string]: any }) => {
    console.log(formData);
  },
});

const title: any = {
  type: 'object',
  properties: {
    inputName1: {
      title: '简单输入框',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "补充说明 <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};
</script>
<template>
  <FR :schema="title" :form="form" display-type="row" />
</template>
