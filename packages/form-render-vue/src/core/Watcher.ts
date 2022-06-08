import { getValueByPath } from '../utils';
import { computed, PropType, watch } from 'vue';

const Watcher = {
  props: {
    watchKey: String,
    watchMap: Object as PropType<{
      immediate?: boolean;
      handler: (...arg) => void;
    }>,
    formData: Object,
    firstMount: Boolean,
  },
  setup(props) {
    const runWatcher = (watchObj, watchKey, watchValue) => {
      if (typeof watchObj === 'function') {
        try {
          watchObj(watchValue);
        } catch (error) {
          console.log(`${watchKey}对应的watch函数执行报错：`, error);
        }
      } else if (watchObj && typeof watchObj.handler === 'function') {
        try {
          watchObj.handler(watchValue);
        } catch (error) {
          console.log(`${watchKey}对应的watch函数执行报错：`, error);
        }
      }
    };

    const value = computed(() =>
      getValueByPath(props.formData, props.watchKey),
    );
    const watchObj = props.watchMap[props.watchKey];

    watch(value, (newValue) => {
      if (props.firstMount) {
        const immediate = watchObj && watchObj.immediate;
        if (immediate) {
          runWatcher(watchObj, props.watchKey, newValue);
        }
      } else {
        runWatcher(watchObj, props.watchKey, newValue);
      }
    });
  },
};

export default Watcher;
