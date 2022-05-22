<template>
  <template v-if="watchList.length">
    <Watcher
      v-for="key in watchList"
      :key="key"
      :watch-key="key"
      :watch-map="watchMap"
      :first-mount="firstMount"
      :form-data="formData"
    />
  </template>
  <Core/>
</template>

<script lang="ts">
import { defineComponent, CSSProperties, PropType, onUnmounted, computed } from 'vue'
import Core from './Core.vue'
import { useFormStore, PropsCtx } from "../hooks";
import { Schema, WatchProperties } from "../../Interface";
import Watcher from "./Watcher";

export default defineComponent({
  name: 'FRCore',
  inheritAttrs: false,
  components: {
    Core,
    Watcher
  },
  emits: ['finish', 'beforeFinish', 'valuesChange'],
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    widgets: {
      type: Object
    },
    allCollapsed: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    },
    globalProps: {
      type: Object,
      default: () => ({})
    },
    mapping: {
      type: Object,
      default: () => ({})
    },
    labelWidth: {
      type: [Number, String],
      default: '110'
    },
    column: {
      type: [Number, String],
      default: 1
    },
    debounceInput: {
      type: Boolean,
      default: false
    },
    debug:  {
      type: Boolean,
      default: false
    },
    size: String as PropType<'large' | 'small' | 'default'>,
    displayType: {
      type: String as PropType<'column' | 'row' | 'inline'>
    },
    id: [Number, String],
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String as PropType<'cn' | 'en'>,
      default: 'cn',
    },
    theme: {
      type: [Number, String],
      default: ''
    },
    validateMessages: {
      type: Object,
      default: () =>({})
    },
    watchMap: {
      type: Object as PropType<WatchProperties>,
      default: () => ({})
    },
  },
  setup(props, { emit, expose }) {
    const form = useFormStore();

    const handleSubmit = async () => await form.submit()

    form.setDefault({
      beforeFinish: (...args: any[]) => emit('beforeFinish', ...args),
      onFinish: (...args: any[]) => emit('finish', ...args),
      validateMessages: props.validateMessages,
      locale: props.locale,
      id: props.id,
      schema: props.schema
    })

    PropsCtx({
      globalProps: props.globalProps,
      displayType: props.displayType,
      theme: props.theme,
      column: props.column,
      debounceInput: props.debounceInput,
      debug: props.debug,
      labelWidth: props.labelWidth,
      validateMessages: props.validateMessages,
      locale: props.locale,
      readOnly: props.readOnly,
      disabled: props.disabled,
      allCollapsed: props.allCollapsed,
      widgets: props.widgets,
      mapping: props.mapping,
      watchMap: props.watchMap,
      onValuesChange: (changedValues: any, formData: any) => emit('valuesChange', changedValues, formData)
    });

    setTimeout(form.onMountLogger, 0);

    const watchList = computed<string[]>(() => Object.keys(props.watchMap) || [])

    onUnmounted(function () {
      form.resetFields();
    });
    expose({ handleSubmit });

    return {
      watchList,
      firstMount: computed<boolean>(() => form.firstMount),
      formData: computed<any>(() => form.formData)
    }
  }
})
</script>