<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import Core from "../../Core.vue";
import { Button, Popconfirm, Table } from "ant-design-vue";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons-vue";
const FIELD_LENGTH = 170;
const fnDefine = {
  type: Function,
  default: () => () => {}
}

export default defineComponent({
  name: 'VirtualList',
  inheritAttrs: false,
  props: {
    displayList: {
      type: Array,
      default: () => []
    },
    dataIndex: {
      type: Array,
      default: () => []
    },
    childData: {
      type: Array as PropType<any[]>,
      default: ():any[] => []
    },
    flatten: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    listData: {},
    deleteItem: fnDefine,
    addItem: fnDefine,
    moveItemUp: fnDefine,
    moveItemDown: fnDefine,
    changeList: fnDefine,
  },
  setup(AllProps) {
    return () => {
      const {
        schema,
        displayList,
        childData,
        flatten,
        dataIndex,
        moveItemUp,
        moveItemDown,
        deleteItem,
        listData,
        changeList,
        addItem
      } = AllProps
      const { props = {}, itemProps = {} } = schema;
      const { scrollY = 600, ...rest } = props;

      // const [vt, set_components] = useVT(() => ({ scroll: { y: scrollY } }), []);

      const dataSource = displayList.map((item, idx) => {
        return { index: idx };
      });

      const columns: any[] = childData.map((child: string) => {
        const item: any = flatten[child];
        const schema = (item && item.schema) || {};
        return {
          dataIndex: child,
          width: FIELD_LENGTH,
          title: schema.required ? [
            h('span', { class: 'fr-label-required' }, '*'),
            h('span', schema.title)
              ]: schema.title,
          customRender: (value: any, record: any, index: any) => {
            // Check: record.index 似乎是antd自己会给的，不错哦
            const childIndex = [...dataIndex, record.index];
            return h(Core, { hideTitle: true, displayType: 'inline', key: index, id: child, dataIndex: childIndex })
          },
        };
      });

      if (!props.hideDelete || Array.isArray(itemProps.buttons)) {
        columns.push({
          title: '操作',
          key: '$action',
          fixed: 'right',
          width: 120,
          customRender: (value: any, record: { [key: string]: any }, idx: number) => {
            const opList = [
              !props.hideDelete && h(Popconfirm, { onConfirm: () => deleteItem && deleteItem(idx), okText: '确定', cancelText: '取消' },
                  h('a', '删除')
              ),
              !props.hideMove && h(ArrowUpOutlined, { style: { color: '#1890ff', fontSize: 16, marginLeft: 8 }, onClick: () => moveItemUp && moveItemUp(idx) }),
              !props.hideMove && h(ArrowDownOutlined, { style: { color: '#1890ff', fontSize: 16, marginLeft: 8 }, onClick: () => moveItemDown && moveItemDown(idx) },)
            ]
            let otherList = []
            if (Array.isArray(itemProps.buttons)) {
              otherList = itemProps.buttons.map((item: any, index: number) => {
                const { callback, text, html } = item;
                let onClick = () => {};
                if (callback && typeof callback === 'string' && typeof window[callback] === 'function') {
                  onClick = () => {
                    window[callback]({
                      value: listData,
                      onChange: changeList,
                      schema,
                    });
                  };
                }
                return h('a', { key: index, style: { marginLeft: 8 }, size: 'small', onClick: onClick },
                  h('span', { innerHTML: html || text }))
              })
            }
            return [...opList, ...otherList]
          },
        });
      }

      let childrenOpList:any[] = []
      if (Array.isArray(props.buttons)) {
        childrenOpList = props.buttons.map((item: { [key: string]: any }, idx:number) => {
          const { callback, text, html } = item;
          let onClick = () => {};
          if (callback && typeof callback === 'string' && typeof window[callback] === 'function') {
            onClick = () => {
              window[callback]({
                value: listData,
                onChange: changeList,
                schema,
              });
            };
          }
          return h(Button, { key: idx, style: { marginLeft: 8 }, size: 'small', onClick: onClick },
              () => h('span', { innerHTML: html || text }))
        })
      }

      return [
          h('div', { class: 'w-100 mb2 tr' }, [
            !props.hideAdd && h(Button, { type: 'primary', size: 'small', onClick: () => addItem && addItem() }, () => '新增'),
              ...childrenOpList
          ]),
          h(Table, {
            rowKey: 'index',
            scroll: { y: scrollY, x: 'max-content' },
            size: 'small',
            columns,
            dataSource,
            pagination: false,
            ...rest
          })
      ]
    }
  }
})
</script>