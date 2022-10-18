<template>
  <!-- <Core
    v-for="(child, index) in childData"
    :key="index"
    :data-index="dataIndex"
    :display-type="displayType"
    :id="child"
    :hide-title="hideTitle"
  /> -->
  <table
    class="table-layout"
    :class="otherProps.customClass"
    :border="!!otherProps.border"
  >
    <tbody>
      <tr v-for="(cols, rowIdx) in otherProps.rows || []" :key="rowIdx">
        <template v-for="(col, colIdx) in cols">
          <td
            :key="colIdx"
            v-if="!col.merged"
            class="table-cell"
            :style="{
              width: col.cellWidth + '!important' || '',
              height: col.cellHeight + '!important' || '',
            }"
            :colspan="col.colspan || 1"
            :rowspan="col.rowspan || 1"
          >
            <Core
              v-if="col.widget"
              :data-index="dataIndex"
              :display-type="displayType"
              :id="`${parentId}.${col.widget}`"
              :hide-title="otherProps.hideTitle"
            />
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import Core from '../../Core.vue';
import { defineProps } from 'vue';

defineProps<{
  parentId: string;
  childData: any[];
  dataIndex: number[];
  displayType: 'column' | 'row' | 'inline';
  hideTitle: boolean;
  otherProps: Record<string, any>;
}>();
</script>
<style lang="less" scoped>
table.table-layout {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  :deep(td) {
    border: 1px solid #d9d9d9;
    display: table-cell;
    padding: 4px 11px;
  }
}
</style>
