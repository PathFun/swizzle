<script lang="ts">
import { defineComponent, PropType, reactive, ref, h } from 'vue';
import Core from '../../Core.vue';
import { getDataPath, getKeyFromPath, getDisplayValue } from '../../../utils';
import { Button, Table, Drawer, Popconfirm } from 'ant-design-vue';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import ErrorMessage from '../../RenderField/ErrorMessage.vue';
import { Error, PropSchema } from '../../../Interface';

const FIELD_LENGTH = 170;
const fnDefine = {
  type: Function as PropType<(...args: any[]) => any>,
  default: () => () => {},
};
const fnDefault = (idx: number, extraProps?: { [key: string]: any }) => {
  const item: FieldsProps = {
    formItem: {},
    dataIndex: [],
    ...extraProps,
  };
  return item;
};

interface FieldsProps {
  formItem: { [key: string]: any };
  dataIndex: any[];
  [key: string]: any;
}

export default defineComponent({
  name: 'DrawerList',
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
    dataPath: {},
    errorFields: {
      type: Array as PropType<Error[]>,
      default: (): Error[] => [],
    },
    getFieldsProps: {
      type: Function as PropType<
        (idx: number, extraProps?: { [key: string]: any }) => FieldsProps
      >,
      required: true,
      default: () => fnDefault,
    },
  },
  setup(aProps) {
    const currentIndex = ref(-1);
    const state = reactive({
      showDrawer: false,
    });

    const openDrawer = (index: number) => {
      currentIndex.value = index;
      Object.assign(state, {
        showDrawer: true,
      });
    };

    const closeDrawer = () => {
      currentIndex.value = -1;
      Object.assign(state, {
        showDrawer: false,
      });
    };

    const handleAdd = () => {
      const newIndex = aProps.addItem();
      openDrawer(newIndex);
    };

    return () => {
      const {
        schema,
        displayList,
        listData,
        changeList,
        deleteItem,
        moveItemUp,
        moveItemDown,
        flatten,
        childData,
        dataPath,
        errorFields,
        getFieldsProps,
      } = aProps;
      const { props = {}, itemProps = {} } = schema;
      const { buttons, ...columnProps } = itemProps;
      const { pagination = {}, ...rest } = props;

      const paginationConfig = pagination && {
        size: 'small',
        hideOnSinglePage: true,
        ...pagination,
      };

      const { showDrawer } = state;

      const dataSource = displayList.map((item, index) => ({
        ...item,
        $idx: index,
      }));

      const columns = childData.map((child) => {
        const item = flatten[child];
        const schema = (item && item.schema) || {};
        const required = !!schema.required;
        const _dataIndex = getKeyFromPath(child);
        return {
          dataIndex: _dataIndex,
          $child: child,
          title: `${schema.title}${
            required ? '-is-required' : '-is-not-required'
          }`,
          isRequired: required,
          width: FIELD_LENGTH,
          ...columnProps,
        };
      });

      columns.push({
        title: '操作',
        key: '$action',
        fixed: 'right',
        width: 120,
      });

      const fieldsProps = getFieldsProps(currentIndex.value);

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
              { default: () => h('span', { innerHTML: html || text }) },
            );
          })
        : [];

      return [
        h('div', { class: 'w-100 mb2 tr' }, [
          !props.hideAdd &&
            h(
              Button,
              { type: 'primary', size: 'small', onClick: handleAdd },
              () => '新增',
            ),
          ...childrenBtn,
        ]),
        h(
          Drawer,
          {
            width: '600px',
            title: '编辑',
            placement: 'right',
            onClose: closeDrawer,
            visible: showDrawer,
            destroyOnClose: true,
          },
          h('div', { class: 'fr-container' }, h(Core, { ...fieldsProps })),
        ),
        h(
          Table,
          {
            size: 'small',
            scroll: { x: 'max-content' },
            columns,
            dataSource,
            rowClassName: (record: { $idx: number; [key: string]: any }) => {
              const index = record && record.$idx;
              const hasError = errorFields.find(
                (item) => item.name.indexOf(`${dataPath}[${index}]`) > -1,
              );
              return hasError ? 'fr-row-error' : '';
            },
            rowKey: '$idx',
            pagination: paginationConfig,
            ...rest,
          },
          {
            bodyCell: (cellData: {
              column: { $child: any; [key: string]: any };
              value: any;
              text: any;
              record: { $idx: number; [key: string]: any };
              index: number;
              renderIndex: number;
            }) => {
              const { record, text, column } = cellData;
              const idx = record.$idx;
              if (record.key === '$action') {
                return h('div', [
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

              const childPath = getDataPath(column.$child, [idx]);
              const errorObj: { [key: string]: any } =
                errorFields.find((item) => item.name == childPath) || {};

              return h('div', [
                h('div', {}, getDisplayValue(text, schema)),
                errorObj.error &&
                  h(ErrorMessage, { message: errorObj.error, schema }),
              ]);
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
