/** * @desc: * @author TQL * @date 2022/7/1 * @name Demo */

<script setup lang="tsx">
import { Input, Button } from 'ant-design-vue';
import FR, { useForm } from 'form-render-vue3';
import type { Schema } from 'form-render-vue3';
import { ref } from 'vue';

const FRRef = ref<HTMLElement | null>(null);
const form = useForm({
  formData: {},
  showValidate: true,
  onChange: (formData: { [key: string]: any }) => {
    console.log(formData);
  },
});

const schema: Schema = {
  type: 'object',
  properties: {
    string: {
      title: '网址输入自定义组件',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '单选',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['选项1', '选项2', '选项3'],
    },
  },
};

const SiteInput = (props: any) => (
  <Input addonBefore="https://" addonAfter=".com" {...props} />
);

const onFinish = (formData: any) => {
  alert(JSON.stringify(formData, null, 2));
};
</script>
<template>
  <div>
    <FR
      ref="FRRef"
      :form="form"
      :schema="schema"
      :widgets="{ site: SiteInput }"
      @finish="onFinish"
    />
    <Button type="primary" @click="() => FRRef.submit()"> 提交 </Button>
  </div>
</template>
