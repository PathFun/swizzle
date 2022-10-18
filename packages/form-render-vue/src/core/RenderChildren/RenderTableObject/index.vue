<template>
  <table class="table-layout" :class="customClass" :border="!!border">
    <tbody>
      <tr v-for="(cols, rowIdx) in rows || []" :key="rowIdx">
        <template v-for="(col, colIdx) in cols">
          <td
            :key="colIdx"
            v-if="!col.merged"
            class="table-cell"
            :colspan="col.colspan || 1"
            :rowspan="col.rowspan || 1"
          >
            <Core
              v-for="(item, idx) in col.widgets || []"
              :key="idx"
              :data-index="dataIndex"
              :display-type="displayType"
              :id="`${parentId}.${item}`"
              :hide-title="!!hideTitle"
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

interface Row {
  merged: boolean;
  colspan?: number;
  rowspan?: number;
  widgets: string[];
}

defineProps<{
  parentId: string;
  childData: any[];
  dataIndex: number[];
  displayType: 'column' | 'row' | 'inline';
  hideTitle?: boolean;
  customClass?: string;
  border?: boolean;
  rows?: Array<Row[]>;
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
