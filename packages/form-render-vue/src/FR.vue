<script lang="ts">
import {
  defineComponent,
  PropType,
  CSSProperties,
  watch,
  onMounted,
  reactive,
  ref,
} from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import { FRCore } from './core';
import {
  FormInstance,
  Schema,
  WatchProperties,
  ISubmitExposed,
} from './Interface';
import useForm from './useForm';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { widgets as defaultWidgets } from './widgets/antd';
import { mapping as defaultMapping } from './mapping';
import './atom.less';
import './index.less';
import { FormCtx } from './hooks';

export { defaultWidgets, defaultMapping, useForm };

export default defineComponent({
  name: 'FR',
  inheritAttrs: false,
  props: {
    form: {
      type: Object as PropType<FormInstance>,
      default: () => ({}),
    },
    schema: {
      type: Object as PropType<Schema>,
      required: true,
      default: () => ({}),
    },
    configProvider: {
      type: Object,
      default: () => ({}),
    },
    widgets: {
      type: Object,
      default: () => ({}),
    },
    allCollapsed: {
      type: Boolean,
      default: false,
    },
    validateMessages: {
      type: Object,
      default: () => ({}),
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    className: {
      type: String,
      default: '',
    },
    mapping: {
      type: Object,
      default: () => ({}),
    },
    globalProps: {
      type: Object,
      default: () => ({}),
    },
    labelWidth: [Number, String],
    column: Number,
    debounceInput: {
      type: Boolean,
      default: false,
    },
    debug: {
      type: Boolean,
      default: false,
    },
    size: String as PropType<'large' | 'small' | 'default'>,
    displayType: String as PropType<'column' | 'row' | 'inline'>,
    id: [Number, String],
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    locale: {
      type: String as PropType<'cn' | 'en'>,
      default: 'cn',
    },
    theme: [Number, String],
    watchMap: {
      type: Object as PropType<WatchProperties>,
      default: () => ({}),
    },
  },
  components: {
    FRCore,
    ConfigProvider,
  },
  emits: ['finish', 'beforeFinish', 'valuesChange'],
  setup(props, { expose }) {
    FormCtx(props.form);

    const fRCoreRef = ref<ISubmitExposed | null>(null);

    const submit = async () => {
      return fRCoreRef.value && (await fRCoreRef.value.handleSubmit());
    };

    watch(
      () => props.locale,
      (newValue) => {
        if (newValue === 'cn') {
          dayjs.locale('zh-cn');
        } else {
          dayjs.locale('en');
        }
      },
    );

    const rootPropsRef = reactive({});

    onMounted(function () {
      const { size, className, style, id } = props;
      let sizeCls = '';
      if (size === 'small') {
        sizeCls = 'fr-form-small';
      } else if (size === 'large') {
        sizeCls = 'fr-form-large';
      }

      const rootProps: { [key: string]: any } = {
        class: `fr-container ${sizeCls} ${className || ''}`,
      };

      if (style && typeof style === 'object') {
        rootProps.style = props.style;
      }

      if (id && ['number', 'string'].indexOf(typeof id) > -1) {
        rootProps.id = id;
      }

      Object.assign(rootPropsRef, { ...rootProps });
    });

    expose({ submit });

    return {
      zhCN,
      enUS,
      defaultWidgets,
      rootPropsRef,
      defaultMapping,
      fRCoreRef,
    };
  },
});
</script>
<template>
  <ConfigProvider
    v-bind="{ locale: locale === 'cn' ? zhCN : enUS, ...configProvider }"
  >
    <div v-bind="rootPropsRef">
      <FRCore
        ref="fRCoreRef"
        @valuesChange="(...arg) => $emit('valuesChange', ...arg)"
        @finish="(...arg) => $emit('finish', ...arg)"
        @beforeFinish="(...arg) => $emit('beforeFinish', ...arg)"
        v-bind="{
          widgets: { ...defaultWidgets, ...widgets },
          locale,
          style,
          schema,
          allCollapsed,
          validateMessages,
          mapping: { ...defaultMapping, ...mapping },
          globalProps,
          labelWidth,
          column,
          debounceInput,
          debug,
          size,
          displayType,
          id,
          disabled,
          readOnly,
          theme,
          watchMap,
        }"
      />
    </div>
  </ConfigProvider>
</template>
