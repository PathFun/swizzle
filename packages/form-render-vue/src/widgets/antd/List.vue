<script lang="ts" setup>
// eslint-disable-next-line no-undef
const props = defineProps<{
  onChange: (...args: any[]) => any;
}>();
</script>
<template>
  <div class="w-100">
    <slot />
  </div>
</template>
