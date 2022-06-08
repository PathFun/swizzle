<script lang="ts">
import { defineComponent, PropType, h } from 'vue';
import Core from '../../Core.vue';
import { Button, Popconfirm } from 'ant-design-vue';
import {
  DeleteOutlined,
  CopyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons-vue';
import { PropSchema } from '../../../../Interface';
const fnDefine = {
  type: Function as PropType<(...args: any[]) => any>,
  default: () => () => {},
};
const fnDefault = (idx: number, extraProps?: { [key: string]: any }) => {
  return {
    formItem: {},
    dataIndex: [],
    ...extraProps,
  };
};

export default defineComponent({
  name: 'SimpleList',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object as PropType<PropSchema>,
      default: () => ({}),
    },
    displayList: {
      type: Array as PropType<any[]>,
      default: () => [],
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
      default: 'column',
    },
    getFieldsProps: {
      type: Function as PropType<
        (
          idx: number,
          extraProps?: { [key: string]: any },
        ) => {
          formItem: { [key: string]: any };
          dataIndex: any[];
          [key: string]: any;
        }
      >,
      required: true,
      default: () => fnDefault,
    },
  },
  setup(aProps) {
    return () => {
      const {
        displayList = [],
        listData,
        getFieldsProps,
        deleteItem,
        moveItemUp,
        moveItemDown,
        changeList,
        addItem,
        schema = {},
      } = aProps;
      const { props = {} } = schema;

      let addBtnProps = {};

      if (props.addBtnProps && typeof props.addBtnProps === 'object') {
        addBtnProps = { ...props.addBtnProps };
      }

      const displayListChildren: any[] = displayList.map((item, idx) => {
        const fieldsProps = getFieldsProps(idx);
        fieldsProps.displayType = 'inline';
        if (props.hideTitle) {
          fieldsProps.hideTitle = true;
        }
        return h('div', { key: idx, style: { display: 'flex' } }, [
          h(Core, { ...fieldsProps }),
          h('div', { style: { marginTop: '6px' } }, [
            !props.hideDelete &&
              h(
                Popconfirm,
                {
                  title: '确定删除?',
                  onConfirm: () => deleteItem(idx),
                  okText: '确定',
                  cancelText: '取消',
                },
                h(DeleteOutlined, {
                  style: { fontSize: '17px', marginLeft: '8px' },
                }),
              ),
            !props.hideAdd &&
              !props.hideCopy &&
              h(CopyOutlined, {
                style: { fontSize: '15px', marginLeft: '8px' },
              }),
            !props.hideMove && [
              h(ArrowUpOutlined, {
                style: { fontSize: '15px', marginLeft: '8px' },
                onClick: () => moveItemUp(idx),
              }),
            ],
            !props.hideMove && [
              h(ArrowDownOutlined, {
                style: { fontSize: '15px', marginLeft: '8px' },
                onClick: () => moveItemDown(idx),
              }),
            ],
          ]),
        ]);
      });

      const childrenBtn: any[] = Array.isArray(props.buttons)
        ? props.buttons.map((item, idx) => {
            const { callback, text, html } = item;
            let onClick = () => {
              console.log({
                value: listData,
                onChange: changeList,
                schema,
              });
            };
            if (
              callback &&
              typeof callback === 'string' &&
              typeof window[callback] === 'function'
            ) {
              onClick = () => {
                window[callback]({
                  value: listData,
                  onChange: changeList,
                  schema,
                });
              };
            }
            return h(
              Button,
              {
                key: idx.toString(),
                style: { marginLeft: '8px' },
                type: 'dashed',
                onClick: onClick,
              },
              h('span', { innerHTML: html || text }),
            );
          })
        : [];

      return h('div', { class: 'fr-list-1' }, [
        ...displayListChildren,
        h('div', { style: { marginTop: displayList.length > 0 ? 0 : '8px' } }, [
          !props.hideAdd &&
            h(
              Button,
              { ...addBtnProps, type: 'dashed', onClick: addItem },
              { default: () => '新增一条' },
            ),
          ...childrenBtn,
        ]),
      ]);
    };
  },
});
</script>
