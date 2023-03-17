/** * @desc: * @author TQL * @date 2022/7/1 * @name Load */
<script lang="ts" setup>
import { Button, Space, message } from 'ant-design-vue';
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
    input1: {
      title: '简单输入框',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '对象',
      description: '这是一个对象类型',
      type: 'object',
      properties: {
        select1: {
          title: '单选',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const onMount = () => {
  console.log(1111111111);
  form.setSchemaByPath('obj1.select1', {
    enum: ['east', 'south', 'west', 'north'],
    enumNames: ['东', '南', '西', '北'],
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
    message.info(JSON.stringify(data));
  }
};
</script>

<template>
  <div style="width: 400px">
    <FR :form="form" :schema="schema" @finish="onFinish" @mount="onMount" />
    <Space>
      <Button type="primary" @click="() => form.submit()">
        提交（见console）
      </Button>
    </Space>
  </div>
</template>
