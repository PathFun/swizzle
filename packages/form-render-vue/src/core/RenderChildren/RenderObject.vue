<script lang="ts" setup>
import Core from "../Core.vue";

const props = defineProps<{
  childData: any[],
  dataIndex: number[],
  displayType: 'column' | 'row' | 'inline',
  hideTitle: boolean,
}>()

</script>
<template>
  <Core v-for="(child, index) in childData"
        :key="index"
        :data-index="dataIndex"
        :display-type="displayType"
        :id="child"
        :hide-title="hideTitle"
  />
</template>