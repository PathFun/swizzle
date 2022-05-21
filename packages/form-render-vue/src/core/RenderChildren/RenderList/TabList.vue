<script lang="ts">
import { defineComponent, PropType, h, ref } from 'vue';
import Core from '../../Core.vue';
import { Tabs } from 'ant-design-vue'
import { PropSchema } from "../../../../Interface";
const { TabPane } = Tabs;

const fnDefine = {
  type: Function as PropType<(...args: any[]) => any>,
  default: () => () => {}
}

const fnDefault = (idx: number, extraProps?: object) => {
  return {
    formItem: {},
    dataIndex: [],
    ...extraProps,
  }
}

export default defineComponent({
  name: 'TabList',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object as PropType<PropSchema>,
      default: () => ({})
    },
    displayList: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    listData: {},
    changeList: fnDefine,
    deleteItem: fnDefine,
    addItem: fnDefine,
    copyItem: fnDefine,
    moveItemUp: fnDefine,
    moveItemDown: fnDefine,
    displayType: {
      type: String as PropType<'column' | 'row' | 'inline'>,
      default: 'column'
    },
    getFieldsProps: {
      type: Function as PropType<(idx: number, extraProps?: object) => {
        formItem: { [key: string ]: any },
        dataIndex: any[],
        [key: string ]: any,
      }>,
      required: true,
      default: () => fnDefault
    }
  },
  setup(aProps) {
    const activeKey = ref('0');
    const setActiveKey = (targetKey: string | number) => {
      activeKey.value = `${targetKey}`
    }
    const onEdit = (targetKey: string | number | KeyboardEvent | MouseEvent, action: 'add' | 'remove') => {
      if (action === 'add') {
        const currentKey = aProps.addItem();
        setActiveKey(currentKey);
      } else if (action === 'remove') {
        aProps.deleteItem(Number(targetKey));
        const keyNum = Number(targetKey)
        setActiveKey(keyNum > 1 ? keyNum - 1 : 0);
      } else {
        return null;
      }
    };

    return () => {
      const { schema = {}, displayList = [], getFieldsProps, displayType } = aProps
      const { props = {} } = schema;
      const { tabName, type, ...restProps } = props;

      const childrenList: any[] = displayList.map((item, idx) => {
        const fieldsProps = getFieldsProps(idx);
        fieldsProps.displayType = displayType;
        const currentTabPaneName:any = tabName && tabName instanceof Array ? tabName[idx] || idx + 1 :
            `${tabName || '项目'} ${idx + 1}`;
        return h(TabPane, { tab: currentTabPaneName, key:`${idx}` },
            h(Core, { ...fieldsProps })
        )
      })

      return h(Tabs, { type: type || 'line', onChange: setActiveKey, onEdit, ...restProps }, [ ...childrenList])
    }
  }
})

</script>
