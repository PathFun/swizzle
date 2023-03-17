<script setup lang="ts">
import FR, { useForm } from 'form-render-vue3';
import { Button as AButton } from 'ant-design-vue';
import { ref } from 'vue';
const form = useForm({ initialValue: {}, showValidate: true });
const FRRef = ref<HTMLElement | null>(null);
const schema: any = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '日期',
      type: 'range',
      format: 'date',
    },
    showSetting: {
      title: '是否展示网址',
      type: 'boolean',
    },
    siteUrl: {
      title: '网址',
      type: 'string',
      placeholder: '此处必填',
      hidden: '{{formData.showSetting !== true}}',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const onFinish = (formData: any, errors: string | any[]) => {
  if (errors.length > 0) {
    alert('errors:' + JSON.stringify(errors));
  } else {
    alert('formData:' + JSON.stringify(formData, null, 2));
  }
};
</script>
<template>
  <FR
    :schema="schema"
    :form="form"
    displayType="row"
    ref="FRRef"
    @finish="onFinish"
  />
  <a-button type="primary" @click="() => form.submit()">提交</a-button>
</template>
