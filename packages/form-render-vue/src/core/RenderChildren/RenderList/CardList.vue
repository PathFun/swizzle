<script lang="ts">
import { PropType, defineComponent, h } from 'vue';
import { Button, Popconfirm } from 'ant-design-vue';
import {
  CloseOutlined,
  CopyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons-vue';
import { PropSchema } from "../../../../Interface";
const fnDefine = {
  type: Function as PropType<(...args: any[]) => any>,
  default: () => (() => {})
}
const fnDefault = (idx: number, extraProps?: object) => {
  return {
    formItem: {},
    dataIndex: [],
    ...extraProps,
  }
}
import Core from '../../Core.vue';
export default defineComponent({
  name: 'CardList',
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

    return () => {
      const {
        displayList = [],
        displayType,
        getFieldsProps,
        schema = {},
        moveItemUp,
        moveItemDown,
        copyItem,
        deleteItem,
        addItem,
        listData,
        changeList
      } = aProps
      const { props = {} } = schema;
      const childrenNodes = displayList.map((item, idx) => {
        return h('div', { key: idx, class: `fr-card-item ${displayType === 'row' ? 'fr-card-item-row' : ''}` },
            [
                h('div', { class: 'fr-card-index' }, idx + 1),
                h(Core, { ...getFieldsProps(idx), displayType }),
                h('div', { direction: 'horizontal', class: 'fr-card-toolbar' }, [
                  !props.hideMove && h(ArrowUpOutlined, { style: { fontSize: '16px', marginLeft: '4px' }, onClick: () => moveItemUp(idx) }),
                  !props.hideMove && h(ArrowDownOutlined, { style: { fontSize: '16px', marginLeft: '4px' }, onClick: () => moveItemDown(idx) }),
                  !props.hideAdd && !props.hideCopy && h(CopyOutlined, { style: { fontSize: '16px', marginLeft: '4px' }, onClick: () => copyItem(idx) }),
                  h(Popconfirm, { title: '确定删除?', okText: '确定', cancelText: '取消', onConfirm: () => deleteItem(idx) }, {
                    default: () => h(CloseOutlined, { style: { fontSize: '16px', marginLeft: '8px' } })
                  })
                ])
            ]
        )
      })

      let addBtnProps = {}

      if (props.addBtnProps && typeof props.addBtnProps === 'object') {
        addBtnProps = { ...props.addBtnProps };
      }

      const childrenBtn:any[] = Array.isArray(props.buttons)? props.buttons.map((item, idx) => {
        const { callback, text, html } = item;
        let onClick = () => {
          console.log({
            value: listData,
            onChange: changeList,
            schema,
          });
        };
        if (callback && typeof callback === 'string' && typeof window[callback] === 'function') {
          onClick = () => {
            window[callback]({
              value: listData,
              onChange: changeList,
              schema,
            });
          };
        }
        return h(Button, {
          key: idx.toString(),
          style: { marginLeft: '8px' },
          type: 'dashed',
          onClick: onClick
        }, { default: () => h('span', { innerHTML: html || text }) });
      }) : []

      return [
          h('div', { class: 'fr-card-list' }, [ ...childrenNodes ]),
          h('div', { style: { marginTop: displayList.length > 0 ? 0 : '8px' } },
              [
                  h(Button, { onClick: addItem, type: 'dashed', ...addBtnProps }, () => '新增一条'),
                  ...childrenBtn
              ]
          )
      ]
    }
  }
})
</script>