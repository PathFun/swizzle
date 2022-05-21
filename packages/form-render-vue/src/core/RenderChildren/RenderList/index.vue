<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import VirtualList from "./VirtualList.vue";
import SimpleList from './SimpleList.vue';
import TabList from './TabList.vue';
import CardList from './CardList.vue';
import TableList from './TableList.vue';
import DrawerList from './DrawerList.vue';
import './list.less';
import { getDataPath } from "../../../utils";
import { useFormStore } from "../../../hooks";
import { get } from 'lodash-es';
import { Error, PropSchema } from "../../../../Interface";


export default defineComponent({
  name: "RenderList",
  inheritAttrs: false,
  props: {
    parentId: {
      type: String,
      default: '#'
    },
    schema: {
      type: Object as PropType<PropSchema>,
      default: () => ({})
    },
    dataIndex: {
      type: Array as PropType<number[]>,
      default: (): number[] => []
    },
    childData: {
      type: Array as PropType<any[]>,
      default: (): any[] => []
    },
    errorFields: {
      type: Array as PropType<Error[]>,
      default: (): Error[] => []
    },
    displayType: {
      type: String as PropType<'column' | 'row' | 'inline'>,
      default: 'column'
    },
  },
  setup(props) {
    const form = useFormStore();
    return () => {
      const { schema, parentId, childData, dataIndex, errorFields, displayType } = props;
      const { formData, flatten, removeTouched, onItemChange } = form
      let renderWidget = 'list';
      try {
        // @ts-ignore
        renderWidget = schema.widget;
      } catch (error) {

      }

      // 计算 list对应的formData
      const dataPath = getDataPath(parentId, dataIndex);
      let listData;
      if (typeof dataPath === 'string') {
        // TODO: listData会有不少“窟窿”，submit 的时候，listData 需要补齐 or filter
        listData = get(formData, dataPath);
      }

      const displayList = Array.isArray(listData) ? listData : [{}];

      const changeList = (newList: any) => {
        onItemChange(dataPath, newList);
      };

      const addItem = () => {
        const newList = [...displayList, {}];
        const newIndex = newList.length - 1;
        onItemChange(dataPath, newList);
        return newIndex;
      };

      const copyItem = (idx: number) => {
        const newItem = displayList[idx];
        const newList = [
          ...displayList.slice(0, idx),
          newItem,
          ...displayList.slice(idx),
        ];
        onItemChange(dataPath, JSON.parse(JSON.stringify(newList)));
      };

      const deleteItem = (idx: number) => {
        // TODO: 删除元素的时候，也需要delete相对于的校验信息（errorFields）
        // remark: 删除时，不存在的item需要补齐，用null
        const newList = displayList.filter((item, kdx) => kdx !== idx);
        onItemChange(dataPath, newList);
        removeTouched(`${dataPath}[${idx}]`);
      };

      //TODO1: 上线翻页要正确！！现在是错的
      const moveItemUp = (idx: number) => {
        if (idx === 0) return;
        const currentItem = displayList[idx];
        const itemAbove = displayList[idx - 1];
        const newList = displayList;
        newList[idx] = itemAbove;
        newList[idx - 1] = currentItem;
        onItemChange && onItemChange(dataPath, newList);
        // TODO: 这块懒了，之后要处理一下
        removeTouched(`${dataPath}[${idx}]`);
      };

      const moveItemDown = (idx: number) => {
        if (idx >= displayList.length - 1) return;
        const currentItem = displayList[idx];
        const itemBelow = displayList[idx + 1];
        const newList = displayList;
        newList[idx] = itemBelow;
        newList[idx + 1] = currentItem;
        onItemChange(dataPath, newList);
        // TODO: 这块懒了，之后要处理一下
        removeTouched(`${dataPath}[${idx}]`);
      };

      let itemSchema = {
        type: 'object',
        properties: {},
        props: schema.props || {},
        _id: schema._id,
      };
      const itemFlatten = {
        schema: itemSchema,
        children: childData,
      };

      const getFieldsProps = (idx: number, extraProps?: object) => {
        return {
          formItem: itemFlatten,
          dataIndex: [...dataIndex, idx],
          ...extraProps || {},
        };
      };

      const displayProps = {
        displayList,
        changeList,
        schema,
        dataPath,
        dataIndex,
        childData,
        deleteItem,
        addItem,
        copyItem,
        moveItemDown,
        moveItemUp,
        listData,
        flatten,
        errorFields,
        displayType,
        getFieldsProps,
      };

      switch (renderWidget) {
        case 'list0':
        case 'cardList':
          return h(CardList, { ...displayProps });
        case 'list1':
        case 'simpleList':
          return h(SimpleList, { ...displayProps });
        case 'list2':
        case 'tableList':
          return h(TableList, { ...displayProps });
        case 'list3':
        case 'drawerList':
          return h(DrawerList, { ...displayProps });
        case 'list4':
        case 'virtualList':
          return h(VirtualList, { ...displayProps });
        case 'tabList':
          return h(TabList, { ...displayProps });
        default:
          return h(CardList, { ...displayProps });
      }
    }
  }
})
</script>