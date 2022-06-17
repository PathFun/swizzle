import { provide, inject, reactive } from 'vue';
import { PROPS_PROVIDE_KEY, FORM_PROVIDE_KEY } from './symbols';
import { FormInstance, FRCoreProps } from './Interface';

export const PropsCtx = function (defaultValue: FRCoreProps) {
  provide(PROPS_PROVIDE_KEY, defaultValue);
};

export const FormCtx = function (defaultValue: FormInstance) {
  provide(FORM_PROVIDE_KEY, defaultValue);
};

export const usePropsStore = () =>
  inject(PROPS_PROVIDE_KEY, {
    globalProps: {},
    displayType: 'column',
    theme: '',
    column: 1,
    debounceInput: false,
    debug: false,
    labelWidth: '',
    validateMessages: undefined,
    locale: 'cn',
    readOnly: false,
    disabled: false,
    allCollapsed: false,
    widgets: {},
    mapping: {},
    watchMap: {},
  });

export const useFormStore = () =>
  inject(
    FORM_PROVIDE_KEY,
    reactive({
      formData: {},
      flatten: {},
      setDefault: () => {},
      onMountLogger: () => {},
      touchedKeys: [],
      touchKey: () => {},
      onItemChange: (path, value) => {},
      setValueByPath: (path, value) => {},
      getSchemaByPath: (path) => ({}),
      setSchemaByPath: (path, value) => {},
      setSchema: (settings) => {},
      setValues: (formData) => {},
      getValues: () => {},
      resetFields: (options) => {},
      submit: () => new Promise((resolve, reject) => {}),
      errorFields: [],
      isValidating: false,
      outsideValidating: false,
      allTouched: false,
      showValidate: false,
      isSubmitting: false,
      firstMount: false,
      setErrorFields: (error) => {},
      removeErrorField: (path) => {},
      removeTouched: (path) => {},
      isEditing: false,
      setEditing: (status) => {},
      _setErrors: (args) => {},
      setFirstMount: (firstMount) => {},
    }),
  );
