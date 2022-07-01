/** * @desc: * @author TQL * @date 2022/7/1 * @name Load */
<script lang="ts" setup>
import { Button, Space, message } from 'ant-design-vue';
import { fakeApi, delay } from '../../../../utils';
import FR, { useForm } from 'form-render-vue3';
import { reactive } from 'vue';

const formData = reactive({});

const form = useForm({
  formData,
  showValidate: true,
  onChange: (newFormData: any) => {
    Object.assign(formData, newFormData);
  },
});
const schema = reactive({});

const getRemoteData = () => {
  fakeApi('xxx/getForm').then((_) => {
    form.setValues({ input1: 'hello world', select1: 'c' });
  });
};

// 异步加载表单
delay(1000).then((_) => {
  Object.assign(schema, {
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
  });
});

const onFinish = (data: any, errors: any[]) => {
  if (errors.length > 0) {
    setTimeout(function () {
      message.error(
        '校验未通过：' + JSON.stringify(errors.map((item) => item.name)),
      );
    });
  } else {
    fakeApi('xxx/submit', data).then((_) => message.success('提交成功！'));
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
