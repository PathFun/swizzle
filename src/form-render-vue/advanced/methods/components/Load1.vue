/** * @desc: * @author TQL * @date 2022/7/1 * @name Load */
<script lang="ts" setup>
import { Button, message } from 'ant-design-vue';
import { fakeApi } from '../../../../utils';
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
const schema = {
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

// 服务端校验在这里做
const beforeFinish = ({ data, errors, schema, ...rest }: any) => {
  console.log(data, errors, schema, rest);
  return fakeApi('xxx/validation').then(() => {
    return { name: 'select1', error: ['外部校验错误'] };
  });
};
</script>

<template>
  <div style="width: 400px">
    <FR
      :form="form"
      :schema="schema"
      @finish="onFinish"
      @beforeFinish="beforeFinish"
    />
    <Space>
      <Button type="primary" @click="() => form.submit()">
        提交（见console）
      </Button>
    </Space>
  </div>
</template>
