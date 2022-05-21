<script lang="ts">
import { defineComponent, computed, h } from "vue";
import { isUrl } from '../../utils';
import { Input } from 'ant-design-vue';
const UrlNode = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    addonText: {
      type: String
    }
  },
  setup(props) {
    const useUrl = computed(() => isUrl(props.value));
    return () => {
      const { value = '', addonText = '测试链接' } = props
      return useUrl ? h('a', { target: '_blank', href: value }, addonText ) : null
    }
  }
})

export default defineComponent({
  props: {
    value: {
      type: String
    },
    prefix: {
      type: String
    },
    suffix:{
      type: String
    },
    disabled: Boolean,
    readOnly: Boolean,
    addonText:{
      type: String
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const handleChange = (event: Event) => {
      const { onChange, prefix, suffix } = props
      let _value = (event.target as HTMLInputElement).value
      if (!_value) {
        onChange(_value);
        return;
      }
      if (prefix) {
        _value = prefix + _value;
      }
      if (suffix) {
        _value = _value + suffix;
      }
      onChange(_value);
    };

    return () => {
      const { prefix, suffix, value, ...rest } = props;
      let _value = value || '';
      if (prefix) _value = _value.replace(prefix, '');
      if (suffix) _value = _value.replace(suffix, '');

      return h(Input, {
        ...rest,
        value: _value,
        prefix: prefix,
        suffix: suffix,
        onChange: handleChange
      } , {
        addonAfter: h(UrlNode)
      })
    }
  }
})
</script>
<template>
  <div class="w-100">
    <slot />
  </div>
</template>
