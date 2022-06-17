<script setup lang="ts">
import FR, { useForm } from 'form-render-vue3';
import type { Schema } from 'form-render-vue3';
import { Button as AButton } from 'ant-design-vue';
import { reactive, ref } from 'vue';
const defaultFormData = reactive({});
const form = useForm({ formData: defaultFormData, showValidate: true });
const FRRef = ref<HTMLElement | null>(null);
const schema: Schema = {
  type: 'object',
  properties: {
    input1: {
      title: '简单输入框',
      type: 'string',
      required: true,
    },
    select1: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
    },
  },
};
</script>
<template>
  <FR :schema="schema" :form="form" displayType="row" ref="FRRef" />
  <a-button type="primary" @click="() => FRRef.submit()">提交</a-button>
</template>
