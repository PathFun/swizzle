<script setup lang="ts">
import { FR as FormRenderVue, useForm } from 'form-render-vue3';
import type { Schema } from 'form-render-vue3';
const form = useForm({
  formData: {},
  showValidate: true,
  onChange: (formData: { [key:string]: any }) => {
    // console.log(formData)
  } });

const title: Schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '展示更多内容',
      type: 'boolean',
    },
    select1: {
      title: '请假原因',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['病假', '有事', '其它 (需注明具体原因)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '具体原因',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

</script>
<template>
  <FormRenderVue
    :schema="title"
    :form="form"
    display-type="row"
  />
</template>
