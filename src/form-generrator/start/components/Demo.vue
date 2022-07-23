<script setup lang="ts">
import Generator from 'form-generator-antv';
import 'form-generator-antv/dist/style.css';
import 'form-render-vue3/dist/style.css';
const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '简单输入框',
      type: 'string',
    },
  },
};

const handleClick = () => {
  console.log(1111111111);
};
</script>

<template>
  <Generator
    class="generator"
    :defaultValue="defaultValue"
    :extraButtons="[{ text: '去playground验证', onclick: handleClick }]"
  />
</template>
