<script lang="ts">
import { defineComponent, PropType, h } from 'vue';
import Core from '../../Core.vue';
import { Button, Table, Popconfirm } from 'ant-design-vue';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import type { ColumnType } from 'ant-design-vue/es/vc-table/interface';

import { PropSchema } from '../../../../Interface';

const fnDefine = {
  type: Function as PropType<(...args: any[]) => any>,
  default: () => () => {},
};

const FIELD_LENGTH = 170;

export default defineComponent({
  name: 'TableList',
  inheritAttrs: false,
  props: {
    dataIndex: {
      type: Array as PropType<number[]>,
      default: (): number[] => [],
    },
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
    flatten: {
      type: Object as PropType<{ [p: string]: { [p: string]: any } }>,
      default: () => ({}),
    },
    childData: {
      type: Array as PropType<any[]>,
      default: (): any[] => [],
    },
  },
  setup(aProps) {
    return () => {
      const {
        schema = {},
        displayList,
        childData = [],
        flatten,
        addItem,
        listData,
        changeList,
        dataIndex,
        copyItem,
        deleteItem,
        moveItemUp,
        moveItemDown,
      } = aProps;
      const { props = {}, itemProps = {} } = schema;
      const { buttons, ...columnProps } = itemProps;
      const { pagination } = props;

      const paginationConfig = pagination &&
        typeof pagination === 'object' && {
          size: 'small',
          hideOnSinglePage: true,
          ...pagination,
        };

      const dataSource = displayList.map((item, idx) => {
        return { ...item, $idx: idx };
      });

      const columns = childData.map((child) => {
        const item = flatten[child];
        const schema = (item && item.schema) || {};
        const required = !!schema.required;
        return {
          dataIndex: child,
          title: schema.title,
          isRequired: required,
          width: FIELD_LENGTH,
          ...columnProps,
        };
      });

      if (
        !props.hideDelete ||
        !props.hideAdd ||
        !props.hideCopy ||
        !props.hideMove
      ) {
        columns.push({
          title: '操作',
          key: '$action',
          fixed: 'right',
          width: 120,
        });
      }
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
                size: 'small',
                onClick: onClick,
              },
              () => h('span', { innerHTML: html || text }),
            );
          })
        : [];

      return [
        h('div', { class: 'w-100 mb2 tr' }, [
          !props.hideAdd &&
            h(
              Button,
              { type: 'primary', size: 'small', onClick: addItem },
              { default: () => '新增' },
            ),
          ...childrenBtn,
        ]),
        h(
          Table,
          {
            scroll: { x: 'max-content' },
            columns,
            dataSource,
            rowKey: '$idx',
            size: 'small',
            pagination: paginationConfig,
          },
          {
            bodyCell: (cellData: {
              column: ColumnType<unknown>;
              value: any;
              text: any;
              record: { $idx: number; [key: string]: any };
              index: number;
              renderIndex: number;
            }) => {
              const { record, index, column } = cellData;
              const idx = record.$idx;
              const childIndex = [...dataIndex, idx];
              if (record.key === '$action') {
                return h('div', [
                  !props.hideAdd &&
                    !props.hideCopy &&
                    h('a', { onClick: () => copyItem(idx) }),
                  !props.hideDelete &&
                    h(
                      Popconfirm,
                      {
                        title: '确定删除?',
                        onConfirm: () => deleteItem(idx),
                        okText: '确定',
                        cancelText: '取消',
                      },
                      h('a', { style: { marginLeft: '8px' } }, '删除'),
                    ),
                  !props.hideMove &&
                    h(ArrowUpOutlined, {
                      style: {
                        color: '#1890ff',
                        fontSize: '16px',
                        marginLeft: '8px',
                      },
                      onClick: () => moveItemUp(idx),
                    }),
                  !props.hideMove &&
                    h(ArrowDownOutlined, {
                      style: {
                        color: '#1890ff',
                        fontSize: '16px',
                        marginLeft: '8px',
                      },
                      onClick: () => moveItemDown(idx),
                    }),
                ]);
              }
              return h(Core, {
                hideTitle: true,
                displayType: 'inline',
                key: index.toString(),
                id: column.key?.toString(),
                dataIndex: childIndex,
              });
            },
            headerCell: (cellData: {
              title: string;
              column: { isRequired: boolean; [key: string]: any };
            }) => {
              const { title, column } = cellData;
              return column.isRequired
                ? [
                    h('span', { class: 'fr-label-required' }, '*'),
                    h('span', title),
                  ]
                : title;
            },
          },
        ),
      ];
    };
  },
});
</script>

<style scoped></style>
