/** * @desc: * @author TQL * @date 2022/7/1 * @name Load */
<script lang="ts" setup>
import { Button, Space, message } from 'ant-design-vue';
import { fakeApi } from '../../../../utils';
import FR, { useForm } from 'form-render-vue3';

const form = useForm({
  initialValue: {},
  showValidate: true,
  onChange: (newFormData: any) => {
    console.log(newFormData);
  },
});
const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '日期范围',
      type: 'range',
      format: 'date',
    },
  },
};

const getRemoteData = () => {
  fakeApi('xxx/getForm').then(() => {
    form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
  });
};

const onFinish = (data: any, errors: any[]) => {
  if (errors.length > 0) {
    setTimeout(function () {
      message.error(
        '校验未通过：' + JSON.stringify(errors.map((item) => item.name)),
      );
    });
  } else {
    fakeApi('xxx/submit', data).then(() => message.success('提交成功！'));
  }
};
</script>

<template>
  <div style="width: 400px">
    <FR :form="form" :schema="schema" @finish="onFinish" />
    <Space>
      <Button @click="getRemoteData">加载服务端数据</Button>
      <Button type="primary" @click="() => form.submit()">
        提交（见console）
      </Button>
    </Space>
  </div>
</template>
