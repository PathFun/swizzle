<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { Collapse } from 'ant-design-vue';
import { Schema } from '../../Interface';
const { Panel } = Collapse;

declare type Key = string | number;

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: {},
    title: {
      type: String,
      default: '',
    },
    theme: {
      type: [Number, String],
      default: '',
    },
    displayType: String as PropType<'column' | 'row' | 'inline'>,
    schema: {
      type: Object as PropType<Schema>,
    },
    allCollapsed: {
      type: Boolean,
      default: false,
    },
    otherProps: {
      type: Object,
    },
    onChange: {
      type: Function as PropType<(...args: any[]) => any>,
      required: true,
    },
  },
  components: {
    Collapse,
    Panel,
  },
  setup(props) {
    const collapsed = ref<boolean>(false);

    const activeKey = ref<number[]>([]);

    const handleToggle = function (keyList: Key | Key[]) {
      if (Array.isArray(keyList) && keyList.length > 0) {
        collapsed.value = false;
        activeKey.value = [1];
      } else {
        collapsed.value = true;
        activeKey.value = [];
      }
    };

    watch(
      () => props.allCollapsed,
      function (newVal: boolean) {
        collapsed.value = newVal;
      },
    );

    return {
      activeKey,
      handleToggle,
    };
  },
});
</script>
<template>
  <div v-if="!title" class="w-100">
    <slot />
  </div>
  <div v-else-if="theme === '1'" class="w-100">
    <div
      style="
         {
          font-size: 17px;
          font-weight: 500;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 16px;
        }
      "
    >
      {{ title }}
    </div>
    <div
      :style="{
        marginLeft: displayType === 'row' ? 0 : '12px',
      }"
    >
      <slot />
    </div>
  </div>
  <!-- 新增卡片视图-->
  <div v-else-if="theme === '2'" class="fr-theme-card-wrap">
    <div>
      <div :id="title" class="fr-theme-card-title">{{ title }}</div>
      <div
        :style="{
          marginLeft: displayType === 'row' ? 0 : '12px',
        }"
      >
        <slot />
      </div>
    </div>
  </div>
  <div v-else class="w-100">
    <collapse :active-key="activeKey" @change="handleToggle">
      <Panel :key="1" class="fr-collapse-object">
        <template #header>
          <span style="font-size: 16px; font-weight: 500">{{ title }}</span>
        </template>
        <slot />
      </Panel>
    </collapse>
  </div>
</template>
