import { defaultGetValueFromEvent } from './utils';

export const transformProps = (props) => {
  const {
    onChange,
    value,
    defaultValue,
    schema: ownSchema,
    readOnly,
    ...rest
  } = props;
  const schema = { ...ownSchema };
  const { trigger, valuePropName } = schema || {};
  const controlProps: { [key: string]: any } = {};
  let _valuePropName = 'value';
  const _value = value === undefined ? defaultValue : value;
  if (valuePropName && typeof valuePropName === 'string') {
    _valuePropName = valuePropName;
    controlProps[valuePropName] = _value;
  } else {
    controlProps.value = _value;
  }
  const _onChange = (...args) => {
    const newValue = defaultGetValueFromEvent(_valuePropName, ...args);
    onChange(newValue);
  };
  if (trigger && typeof trigger === 'string') {
    controlProps.onChange = _onChange;
    controlProps[trigger] = _onChange;
  } else {
    controlProps.onChange = _onChange;
  }

  const usefulPropsFromSchema = {
    disabled: schema.disabled,
    readOnly: schema.readOnly || readOnly,
    hidden: schema.hidden,
  };

  const _props = {
    ...controlProps,
    schema,
    ...usefulPropsFromSchema,
    ...rest,
  };

  return _props;
};
