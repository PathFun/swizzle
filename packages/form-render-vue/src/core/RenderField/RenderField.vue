<script lang="ts">
import { PropType, CSSProperties, defineComponent, h } from 'vue';
import { usePropsStore, useFormStore } from '../../hooks';
import { getValueByPath, isCheckBoxType, isObjType } from '../../utils';
import ErrorMessage from './ErrorMessage.vue';
import Extra from './Extra.vue';
import FieldTitle from './FieldTitle.vue';
import { validateField } from '../../validator';
import ExtendedWidget from './ExtendedWidget.vue';
import { Error, PropSchema } from '../../../Interface';
import { debounce } from 'lodash-es';

export default defineComponent({
  name: 'RenderField',
  inheritAttrs: false,
  props: {
    fieldId: {
      type: String,
      default: '#',
    },
    dataIndex: {
      type: Array as PropType<number[]>,
      default: (): number[] => [],
    },
    dataPath: {
      type: String,
      default: '',
    },
    coreValue: {},
    dependValues: {
      type: Array as PropType<any[]>,
      default: (): any[] => [],
    },
    errorFields: {
      type: Array as PropType<Error[]>,
      default: (): Error[] => [],
    },
    _schema: {
      type: Object as PropType<PropSchema>,
      default: (): PropSchema => ({}),
      required: true,
    },
    labelClass: { type: String, default: '' },
    labelStyle: {
      type: Object as PropType<CSSProperties>,
      default: (): CSSProperties => ({}),
    },
    contentClass: { type: String, default: '' },
    displayType: {
      type: String as PropType<'column' | 'row' | 'inline'>,
      default: 'column',
    },
    hideTitle: Boolean,
    hideValidation: Boolean,
  },
  components: {
    ErrorMessage,
    ExtendedWidget,
    Extra,
    FieldTitle,
  },
  setup(props, { slots }) {
    const form = useFormStore();
    const useProps = usePropsStore();

    const {
      debounceInput,
      readOnly,
      disabled,
      validateMessages,
      locale,
      onValuesChange,
    } = useProps;

    const {
      formData,
      flatten,
      showValidate,
      onItemChange,
      setEditing,
      touchKey,
      _setErrors,
    } = form;

    const removeDupErrors = (arr: Error[]) => {
      if (!Array.isArray(arr)) {
        console.log('in removeDumps: param is not an array');
        return;
      }
      let array: any[] = [];
      for (let i = 0; i < arr.length; i++) {
        const sameNameIndex = array.findIndex(
          (item) => item.name === arr[i].name,
        );
        if (sameNameIndex > -1) {
          const sameNameItem = array[sameNameIndex];
          const error1 = sameNameItem.error;
          const error2 = arr[i].error;
          array[sameNameIndex] = {
            name: sameNameItem.name,
            error: error1.length > 0 && error2.length > 0 ? error2 : [],
          };
        } else {
          array.push(arr[i]);
        }
      }
      return array.filter(
        (item) => Array.isArray(item.error) && item.error.length > 0,
      );
    };

    const debouncedSetEditing = debounce(setEditing, 350);

    // TODO: 优化一下，只有touch还是false的时候，setTouched
    const onChange = (value: any) => {
      const { dataPath } = props;
      // 动过的key，算被touch了, 这里之后要考虑动的来源
      touchKey(dataPath);
      // 开始编辑，节流
      if (debounceInput) {
        setEditing(true);
        debouncedSetEditing(false);
      }
      if (typeof dataPath === 'string') {
        onItemChange(dataPath, value);
      }
      // 先不暴露给外部，这个api
      if (typeof onValuesChange === 'function') {
        onValuesChange({ [dataPath]: value }, formData);
      }

      validateField({
        path: dataPath,
        formData: formData,
        flatten,
        options: {
          locale,
          validateMessages,
        },
      }).then((res) => {
        _setErrors &&
          _setErrors((errors: Error[]) => {
            return removeDupErrors([...errors, ...res]);
          });
      });
    };

    const _getValue = (path: any) => {
      return getValueByPath(formData, path);
    };

    const _readOnly =
      readOnly !== undefined ? readOnly : props._schema.readOnly;
    const _disabled =
      disabled !== undefined ? disabled : props._schema.disabled;

    return () => {
      const _children = slots.default ? slots.default() : false;
      const {
        fieldId,
        dataIndex,
        dataPath,
        coreValue,
        dependValues,
        _schema,
        labelClass,
        labelStyle,
        contentClass: _contentClass,
        errorFields = [],
        hideTitle,
        displayType,
      } = props;

      const errObj = errorFields.find((err: Error) => err.name === dataPath);
      const errorMessage = errObj && errObj.error; // 是一个list
      const hasError = Array.isArray(errorMessage) && errorMessage.length > 0;
      // 补上这个class，会自动让下面所有的展示ui变红！
      const contentClass =
        hasError && showValidate
          ? _contentClass + ' ant-form-item-has-error'
          : _contentClass;

      let contentStyle = {};

      const titleProps = {
        labelClass,
        labelStyle,
        schema: _schema,
        displayType,
      };

      const messageProps = {
        message: errorMessage,
        schema: _schema,
        displayType,
        softHidden: displayType === 'inline', // 这个是如果没有校验信息时，展示与否
        hardHidden: !showValidate || _readOnly === true, // 这个是强制的展示与否
      };

      const placeholderTitleProps = {
        className: labelClass,
        style: labelStyle,
      };
      //
      const _showTitle = !hideTitle && typeof _schema.title === 'string';
      // TODO: 这块最好能判断上一层是list1，
      if (hideTitle && _schema.title) {
        _schema.placeholder = _schema.placeholder || _schema.title;
      }

      const widgetProps = {
        fieldId,
        schema: _schema,
        readOnly: _readOnly,
        disabled: _disabled,
        onChange,
        getValue: _getValue,
        formData,
        value: coreValue,
        dependValues,
        onItemChange,
        dataIndex,
        dataPath,
      };

      // checkbox必须单独处理，布局太不同了
      if (isCheckBoxType(_schema, _readOnly)) {
        return [
          _showTitle ? h('div', { ...placeholderTitleProps }) : null,
          h('div', { class: contentClass, style: contentStyle }, [
            h(ExtendedWidget, { ...widgetProps }, { default: () => _children }),
            h(Extra, { ...widgetProps }),
            h(ErrorMessage, { ...messageProps }),
          ]),
        ];
      }
      let TitleElement = h(FieldTitle, { ...titleProps });

      if (isObjType(_schema)) {
        TitleElement = h('div', { style: { display: 'flex' } }, [
          TitleElement,
          h(ErrorMessage, { ...messageProps }),
        ]);
        return h('div', { style: contentStyle }, [
          h(
            ExtendedWidget,
            {
              ...widgetProps,
              message: errorMessage,
              title: _showTitle ? TitleElement : undefined,
            },
            { default: () => _children },
          ),
          h(Extra, { ...widgetProps }),
        ]);
      }

      return [
        _showTitle && TitleElement,
        h(
          'div',
          {
            class: `${contentClass} ${hideTitle ? 'fr-content-no-title' : ''}`,
            style: contentStyle,
          },
          [
            h(ExtendedWidget, { ...widgetProps }, { default: () => _children }),
            h(Extra, { ...widgetProps }),
            h(ErrorMessage, { ...messageProps }),
          ],
        ),
      ];
    };
  },
});
</script>
