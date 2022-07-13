import {
  FormParams,
  FormInstance,
  defaultSettings,
  Error,
  ResetParams,
} from './Interface';
import type { defaultPartialSettings } from './Interface';
import { reactive, ref, watch } from 'vue';
import {
  flattenSchema,
  generateDataSkeleton,
  clone,
  yymmdd,
  msToTime,
  schemaContainsExpression,
  parseAllExpression,
} from './utils';
import { processData, transformDataWithBind2 } from './processData';
import { validateAll } from './validator';
import { set, sortedUniqBy, isEmpty } from 'lodash-es';

let renderCount = 0;

const useForm = (props?: FormParams) => {
  const {
    removeHiddenData = false,
    onChange,
    onValidate,
    showValidate,
    logOnMount = window.FR_LOGGER && window.FR_LOGGER.logOnMount,
    logOnSubmit = window.FR_LOGGER && window.FR_LOGGER.logOnSubmit,
  } = props || {};

  const settings: defaultSettings = {
    validateMessages: {},
    beforeFinish: () => {
      console.log('beforeFinish');
    },
    onFinish: () => {
      console.log('onFinish');
    },
    locale: 'cn',
    outErrorFields: [],
    id: '',
    submitData: {},
    schema: {},
  };

  const onItemChange = (path: string, value: any) => {
    if (path === '#') {
      _setData({ ...value });
      return;
    }
    set(state.formData, path, value);
    expressionFun();
    _setData({ ...state.formData });
  };

  const _setData = (data: any) => {
    if (typeof onChange === 'function') {
      onChange(data);
    } else {
      state.formData = data;
    }
  };

  const setEditing = (isEditing: boolean) => {
    Object.assign(state, { isEditing });
  };

  const setSchema = (settings: any) => {
    const newFlatten = clone(flattenRef.value);
    try {
      Object.keys(settings).forEach((path) => {
        if (!Object.prototype.hasOwnProperty.call(flattenRef.value, path)) {
          console.error(`path：'${path}' 不存在(form.setSchemaByPath)`);
        } else {
          const newSchema = settings[path];
          const _newSchema =
            typeof newSchema === 'function'
              ? newSchema(newFlatten[path].schema)
              : newSchema;
          newFlatten[path].schema = {
            ...newFlatten[path].schema,
            ..._newSchema,
          };
        }
      });
      flattenRef.value = newFlatten;
      expressionFun();
    } catch (error) {
      console.error(error, 'setSchema');
    }
  };

  const setSchemaByPath = (path: string, newSchema: any) => {
    if (!Object.prototype.hasOwnProperty.call(flattenRef.value, path)) {
      console.error(`path：'${path}' 不存在(form.setSchemaByPath)`);
      return;
    }
    const newFlatten = clone(flattenRef.value);

    try {
      const _newSchema =
        typeof newSchema === 'function'
          ? newSchema(newFlatten[path].schema)
          : newSchema;
      newFlatten[path].schema = { ...newFlatten[path].schema, ..._newSchema };
      flattenRef.value = newFlatten;
      expressionFun();
    } catch (error) {
      console.error(error, 'setSchemaByPath');
    }
  };

  const getSchemaByPath = (path: string) => {
    try {
      return flattenRef.value[path].schema;
    } catch (error) {
      console.log(error, 'getSchemaByPath');
      return {};
    }
  };

  const getValues = () => {
    return processData(state.formData, flattenRef.value, removeHiddenData);
  };

  const setValues = (newFormData: any) => {
    const newData = transformDataWithBind2(newFormData, flattenRef.value);
    _setData(newData);
  };

  const setErrorFields = (error: Error[] | Error) => {
    let newErrorFields: any[] = [];
    if (Array.isArray(error)) {
      newErrorFields = [...error, ...settings.outErrorFields];
    } else if (error && error.name) {
      newErrorFields = [error, ...settings.outErrorFields];
    } else {
      console.error('error format is wrong');
    }
    newErrorFields = sortedUniqBy(newErrorFields, (item: Error) => item.name);
    Object.assign(settings, { outErrorFields: newErrorFields });
  };

  const removeErrorField = (path: string) => {
    const newError = state.errorFields.filter((item) => {
      return item.name.indexOf(path) === -1;
    });

    const newOutError = settings.outErrorFields.filter((item) => {
      return item.name.indexOf(path) === -1;
    });
    Object.assign(state, {
      errorFields: newError,
    });
    Object.assign(settings, {
      outErrorFields: newOutError,
    });
  };

  const _setErrors = (errors: any) => {
    if (typeof onValidate === 'function') {
      const oldFormatErrors = errors
        ? errors.map((item: { name: any }) => item.name)
        : [];
      onValidate(oldFormatErrors);
    }
    if (typeof errors === 'function') {
      Object.assign(state, { errorFields: errors(state.errorFields) });
    } else {
      Object.assign(state, { errorFields: errors });
    }
  };

  const touchKey = (key: string) => {
    if (state.touchedKeys.indexOf(key) > -1) {
      return;
    }
    const newKeyList = [...state.touchedKeys, key];
    Object.assign(state, { touchedKeys: newKeyList });
  };

  const removeTouched = (key: string) => {
    const newTouch = state.touchedKeys.filter((item) => {
      return item.indexOf(key) === -1;
    });
    Object.assign(state, { touchedKeys: newTouch });
  };

  const setDefault = (newSettings: defaultPartialSettings) => {
    Object.assign(settings, { ...newSettings });
    renderCount++;
    setFirstMount(true);
  };

  const submit = () => {
    const { formData } = state;
    const { locale, validateMessages, outErrorFields, beforeFinish } = settings;
    Object.assign(state, {
      isValidating: true,
      isSubmitting: false,
      allTouched: true,
    });
    //  https://formik.org/docs/guides/form-submission
    return validateAll({
      formData: formData,
      flatten: flattenRef.value,
      options: {
        locale,
        validateMessages: validateMessages,
      },
    })
      .then((errors) => {
        Object.assign(state, { errorFields: errors });
        const _errors = sortedUniqBy(
          [...(errors || []), ...outErrorFields],
          (item: Error) => item.name,
        );
        if (typeof beforeFinish === 'function') {
          return Promise.resolve(
            processData(state.formData, flattenRef.value, removeHiddenData),
          ).then((res) => {
            Object.assign(state, {
              isValidating: true,
              isSubmitting: false,
              outsideValidating: true,
            });
            Object.assign(settings, {
              submitData: res,
            });
            return { data: res, errors: _errors };
          });
        }
        return Promise.resolve(
          processData(state.formData, flattenRef.value, removeHiddenData),
        ).then((res) => {
          Object.assign(state, {
            isValidating: false,
            isSubmitting: true,
          });
          Object.assign(settings, {
            submitData: res,
          });
          return { data: res, errors: _errors };
        });
      })
      .catch((err: any) => {
        // 不应该走到这边的
        console.log('submit error:', err);
        return err;
      });
  };

  const resetFields = (options?: ResetParams): void => {
    Object.assign(state, {
      formData: options?.formData || {},
      errorFields: options?.errorFields || [],
      touchedKeys: options?.touchedKeys || [],
      allTouched: options?.allTouched || false,
    });
  };

  const onMountLogger = () => {
    const { id, schema } = settings;
    const start = new Date().getTime();
    if (typeof logOnMount === 'function' || typeof logOnSubmit === 'function') {
      sessionStorage.setItem('FORM_MOUNT_TIME', start.toString());
      sessionStorage.setItem('FORM_START', start.toString());
    }
    if (typeof logOnMount === 'function') {
      const logParams: { [propName: string]: any } = {
        schema,
        url: location.href,
        formData: JSON.stringify(getValues()),
        formMount: yymmdd(start),
      };
      if (id) {
        logParams.id = id;
      }
      logOnMount(logParams);
    }
    // 如果是要计算时间，在 onMount 时存一个时间戳
    if (typeof logOnSubmit === 'function') {
      sessionStorage.setItem('NUMBER_OF_SUBMITS', '0');
      sessionStorage.setItem('FAILED_ATTEMPTS', '0');
    }
  };

  const endValidating = () =>
    Object.assign(state, {
      isValidating: false,
      outsideValidating: false,
      isSubmitting: true,
    });

  const endSubmitting = () =>
    Object.assign(state, {
      isSubmitting: false,
      isValidating: false,
      outsideValidating: false,
    });

  const setFirstMount = (firstMount: boolean) => {
    Object.assign(state, { firstMount });
  };

  const stateObj: FormInstance = {
    firstMount: false,
    flatten: {},
    formData: {},
    isEditing: false,
    isSubmitting: false,
    outsideValidating: false,
    isValidating: false,
    allTouched: false,
    showValidate: showValidate || false,
    errorFields: [],
    touchedKeys: [],
    setErrorFields,
    resetFields,
    setDefault,
    submit,
    getValues,
    setEditing,
    onMountLogger,
    onItemChange,
    _setErrors,
    removeTouched,
    touchKey,
    getSchemaByPath,
    setSchemaByPath,
    setSchema,
    setValues,
    removeErrorField,
    setFirstMount,
    setValueByPath: onItemChange,
  };

  const flattenRef = ref<{ [key: string]: { [key: string]: any } }>({});

  const state = reactive(stateObj);

  watch(props?.formData, function (newValue) {
    const { schema } = settings;
    if (isEmpty(schema)) return;
    Object.assign(state, {
      formData: newValue ? generateDataSkeleton(schema, newValue) : {},
    });
  });

  watch(
    () => state.firstMount,
    function (firstMount) {
      const { schema } = settings;
      if (firstMount && !isEmpty(schema)) {
        flattenRef.value = flattenSchema(schema, '#', null, {});
        Object.assign(state, {
          formData: props?.formData
            ? generateDataSkeleton(schema, props.formData)
            : {},
        });
      }
      setTimeout(function () {
        setFirstMount(false);
        expressionFun();
      }, 0);
    },
  );

  watch(
    [
      () => state.isValidating,
      () => state.isSubmitting,
      () => state.outsideValidating,
    ],
    function ([newIsValidating, newIsSubmitting, newOutsideValidating]) {
      const { beforeFinish, onFinish, id, submitData, schema } = settings;
      const { errorFields } = state;
      // 需要外部校验的情况，此时 submitting 还是 false
      if (newOutsideValidating && typeof beforeFinish === 'function') {
        Promise.resolve(
          beforeFinish({ data: submitData, schema, errors: errorFields }),
        ).then((error: any) => {
          if (error) {
            setErrorFields(error);
          }
          endValidating();
        });
        return;
      }
      // 如果validation结束，submitting开始
      if (newIsValidating === false && newIsSubmitting === true) {
        endSubmitting();
        if (typeof onFinish === 'function') onFinish(submitData, errorFields);
        if (typeof logOnSubmit === 'function') {
          const start = Number(sessionStorage.getItem('FORM_START'));
          const mount = sessionStorage.getItem('FORM_MOUNT_TIME');
          const numberOfSubmits =
            Number(sessionStorage.getItem('NUMBER_OF_SUBMITS')) + 1;
          const end = new Date().getTime();
          let failedAttempts = Number(
            sessionStorage.getItem('FAILED_ATTEMPTS'),
          );
          if (errorFields.length > 0) {
            failedAttempts = failedAttempts + 1;
          }
          const logParams: {
            id?: string | number;
            [key: string]: any;
          } = {
            formMount: yymmdd(mount),
            ms: end - start,
            duration: msToTime(end - start),
            numberOfSubmits: numberOfSubmits,
            failedAttempts: failedAttempts,
            url: location.href,
            formData: JSON.stringify(submitData),
            errors: JSON.stringify(errorFields),
            schema: JSON.stringify(schema),
          };
          if (id) {
            logParams.id = id;
          }
          logOnSubmit(logParams);
          sessionStorage.setItem('FORM_START', end.toString());
          sessionStorage.setItem(
            'NUMBER_OF_SUBMITS',
            numberOfSubmits.toString(),
          );
          sessionStorage.setItem('FAILED_ATTEMPTS', failedAttempts.toString());
        }
      }
    },
  );

  // 统一的处理expression
  const expressionFun = () => {
    if (state.firstMount) {
      return;
    }
    const flatten = flattenRef.value;
    const newFlatten = clone(flatten);
    Object.entries(flatten).forEach(([path, info]) => {
      if (schemaContainsExpression(info.schema)) {
        const arrayLikeIndex = path.indexOf(']');
        const isArrayItem =
          arrayLikeIndex > -1 && arrayLikeIndex < path.length - 1;
        const hasRootValue =
          JSON.stringify(info.schema).indexOf('rootValue') > -1;
        if (!(isArrayItem && hasRootValue)) {
          newFlatten[path].schema = parseAllExpression(
            info.schema,
            { ...state.formData },
            path,
          );
        }
      }
    });
    Object.assign(state, {
      flatten: newFlatten,
    });
  };

  return state;
};
export default useForm;
