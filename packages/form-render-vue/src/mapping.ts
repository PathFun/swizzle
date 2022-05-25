import { Schema } from '../Interface'

export const mapping = {
  default: 'input',
  string: 'input',
  array: 'list',
  boolean: 'checkbox',
  integer: 'number',
  number: 'number',
  object: 'map',
  html: 'html',
  'string:upload': 'upload',
  'string:url': 'url',
  'string:dateTime': 'date',
  'string:date': 'date',
  'string:year': 'date',
  'string:month': 'date',
  'string:week': 'date',
  'string:quarter': 'date',
  'string:time': 'time',
  'string:textarea': 'textarea',
  'string:color': 'color',
  'string:image': 'imageInput',
  'range:time': 'timeRange',
  'range:dateTime': 'dateRange',
  'range:date': 'dateRange',
  'range:year': 'dateRange',
  'range:month': 'dateRange',
  'range:week': 'dateRange',
  'range:quarter': 'dateRange',
  '*?enum': 'radio',
  '*?enum_long': 'select',
  'array?enum': 'checkboxes',
  'array?enum_long': 'multiSelect',
  '*?readOnly': 'html', // TODO: html widgets for list / object
};

export function getWidgetName(schema: Schema, _mapping = mapping) {
  const { type, format, enum: enums, readOnly, widget } = schema;

  const list = [];
  if (readOnly) {
    // @ts-ignore
    list.push(`${type}?readOnly`);
    // @ts-ignore
    list.push('*?readOnly');
  }
  if (enums) {
    // 根据enum长度来智能选择控件
    if (
      Array.isArray(enums) &&
      ((type === 'array' && enums.length > 6) ||
        (type !== 'array' && enums.length > 2))
    ) {
      // @ts-ignore
      list.push(`${type}?enum_long`);
      // @ts-ignore
      list.push('*?enum_long');
    } else {
      // @ts-ignore
      list.push(`${type}?enum`);
      // array 默认使用list，array?enum 默认使用checkboxes，*?enum 默认使用select
      // @ts-ignore
      list.push('*?enum');
    }
  }
  const _widget = widget || format;
  if (_widget) {
    // @ts-ignore
    list.push(`${type}:${_widget}`);
  }
  // @ts-ignore
  list.push(type); // 放在最后兜底，其他都不match时使用type默认的组件
  let found = '';
  list.some(item => {
    // @ts-ignore
    found = _mapping[item];
    return !!found;
  });
  return found;
}

export const extraSchemaList = {
  checkbox: {
    valuePropName: 'checked',
  },
  switch: {
    valuePropName: 'checked',
  },
};