<template>
  <Row v-bind="schema.row || {}" style="width: 100%">
    <template v-if="isDesigning">
      <Col
        v-for="(col, rowIdx) in schema.rows || []"
        :key="rowIdx"
        v-bind="col"
      >
        <slots.wrapper
          :_id="`${_id}|${rowIdx}`"
          :item="{ schema }"
          inside
          :_children="col.widgets.map((d) => `${_id}/${d}`)"
        />
      </Col>
    </template>
    <template v-else>
      <Col v-for="(col, index) in schema.rows || []" :key="index" v-bind="col">
        <template v-for="widgetName in col.widgets">
          <slot
            name="subForm"
            :id="childrenMap[widgetName]"
            :dataIndex="dataIndex"
            :displayType="displayType"
            :labelAlign="labelAlign"
            :hideTitle="hideTitle"
          />
        </template>
      </Col>
    </template>
  </Row>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import { Row, Col } from 'ant-design-vue';

const props = defineProps({
  schema: {
    type: Object,
    default: () => ({}),
  },
  _id: String,
  isDesigning: Boolean,
  dataIndex: {
    type: Array,
    default: () => [],
  },
  displayType: {
    type: String,
    default: '',
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
  labelAlign: {
    type: String,
    default: 'right',
  },
  children: {
    type: Array,
    default: () => [],
  },
});

const childrenMap = computed(() => {
  const map = {};
  props.children.forEach((child) => {
    const childDeepKeyList = child.split('.');
    let lastKey = childDeepKeyList[childDeepKeyList.length - 1];
    if (lastKey.endsWith('[]')) {
      lastKey = lastKey.slice(0, -2);
    }
    map[lastKey] = child;
  });
  return map;
});

const slots = useSlots();

console.log(props.schema, slots);
</script>
