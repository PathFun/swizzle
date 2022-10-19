<script lang="ts" setup>
import 'ant-design-vue/dist/antd.css';
import { Button, Space, message } from 'ant-design-vue';
import FR, { useForm } from './FR.vue';
import { reactive } from 'vue';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const fakeApi = (url = '', data = {}) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};

const formData = reactive({});

const form = useForm({
  formData,
  onChange: (newFormData) => {
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
    title: '表格类型',
    description: '表格类型',
    type: 'object:table',
    props: {
      border: 1,
      hideTitle: false,
      rows: [
        [
          {
            merged: false,
            colspan: 1,
            rowspan: 1,
          },
          {
            merged: false,
            colspan: 2,
            rowspan: 1,
            widgets: ['input3'],
          },
        ],
        [
          {
            merged: false,
            colspan: 1,
            rowspan: 1,
            widgets: ['input4'],
          },
          {
            merged: false,
            colspan: 1,
            rowspan: 1,
          },
          {
            merged: false,
            colspan: 1,
            rowspan: 2,
            widgets: ['select2'],
          },
        ],
        [
          {
            merged: false,
            colspan: 2,
            rowspan: 1,
            widgets: ['input2', 'input5'],
          },
          {
            merged: true,
            colspan: 1,
            rowspan: 1,
          },
        ],
      ],
    },
    properties: {
      select2: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['早上', '中午', '晚上'],
      },
      input2: {
        title: '输入框2',
        type: 'string',
        required: true,
      },
      input3: {
        title: '输入框3',
        type: 'string',
        required: true,
      },
      input4: {
        title: '输入框4',
        type: 'string',
        required: true,
      },
      input5: {
        title: '输入框5',
        type: 'string',
        required: true,
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

const changeSchema = () => {
  Object.assign(schema, {
    type: 'object',
    properties: {
      inp1: {
        title: '输入框121',
        type: 'string',
        required: true,
      },
      sel1: {
        title: '单选121',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['早', '中', '晚'],
      },
    },
  });
};

const watchMap = {
  '#': (v) => console.log(v),
};
</script>

<template>
  <div style="width: 100%; padding: 30px">
    <FR
      :form="form"
      :schema="schema"
      display-type="row"
      theme="1"
      @finish="onFinish"
      :watch-map="watchMap"
    />
    <Space>
      <Button @click="getRemoteData">加载服务端数据</Button>
      <Button @click="changeSchema">点击修改Schema</Button>
      <Button type="primary" @click="() => form.submit()">
        提交（见console）
      </Button>
    </Space>
  </div>
</template>
