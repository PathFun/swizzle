import type { RuleItem } from "async-validator";

interface SchemaBase {
  type: "string" | "number" | "boolean" | "array" | "object" | "range" | "html";
  title: string;
  description: string;
  descType: "text" | "icon";
  format:
    | "image"
    | "textarea"
    | "color"
    | "email"
    | "url"
    | "dateTime"
    | "date"
    | "time"
    | "upload"
    | "year"
    | "month"
    | "quarter"
    | "week";
  default: any;
  /** 是否必填，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  required: boolean | string;
  placeholder: string | string[];
  bind: false | string | string[];
  dependencies: string[];
  min: number;
  max: number;
  /** 是否禁用，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  disabled: boolean | string;
  /** 是否只读，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  readOnly: boolean | string;
  /** 是否隐藏，隐藏的字段不会在 formData 里透出，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  hidden: boolean | string;
  displayType: "row" | "column" | "inline";
  width: string;
  labelWidth: number | string;
  className: string;
  widget: string;
  readOnlyWidget: string;
  extra: string | Record<string, Schema>;
  properties: Record<string, Schema>;
  items: Schema;
  enum: Array<string | number>;
  enumNames: Array<string | number>;
  rules: RuleItem | RuleItem[];
  props: Record<string, any>;
}

export interface Error {
  /** 错误的数据路径 */
  name: string;
  /** 错误的内容 */
  error: string[];
}

export type Schema = Partial<SchemaBase>;

export interface PropSchema extends Schema {
  [key: string]: any;
}

export interface FormParams {
  formData?: any;
  removeHiddenData?: boolean;
  onChange?: (data: any) => void;
  onValidate?: (valid: any) => void;
  showValidate?: boolean;
  /** 数据分析接口，表单展示完成渲染时触发 */
  logOnMount?: (stats: any) => void;
  /** 数据分析接口，表单提交成功时触发，获得本次表单填写的总时长 */
  logOnSubmit?: (stats: any) => void;
};

export interface ResetParams {
  formData?: any;
  submitData?: any;
  errorFields?: Error[];
  touchedKeys?: any[];
  allTouched?: boolean;

  [k: string]: any;
}

export interface defaultSettings {
  id: string | number;
  locale: "en" | "cn";
  validateMessages: { [key: string]: any };
  outErrorFields: Error[];
  beforeFinish: (...arg: any) => void;
  onFinish: (...arg: any) => void;
  submitData: any;
  schema: Schema;
}

export type defaultPartialSettings = Partial<defaultSettings>;

export interface FormInstance {
  formData: any;
  flatten: { [key: string]: { [key: string]: any } };
  setDefault: (settings: defaultPartialSettings) => void;
  onMountLogger: (...arg: any) => void;
  touchedKeys: string[];
  touchKey: (key: string) => void;
  onItemChange: (path: string, value: any) => void;
  setValueByPath: (path: string, value: any) => void;
  getSchemaByPath: (path: string) => { [key: string]: any };
  setSchemaByPath: (path: string, value: any) => void;
  setSchema: (settings: any) => void;
  setValues: (formData: any) => void;
  getValues: () => any;
  resetFields: (options?: ResetParams) => void;
  submit: () => Promise<{ data: any; errors: Error[] }>;
  errorFields: Error[];
  isValidating: boolean;
  outsideValidating: boolean;
  allTouched: boolean;
  showValidate: boolean;
  isSubmitting: boolean;
  firstMount: boolean;
  setErrorFields: (error: Error[]) => void;
  removeErrorField: (path: string) => void;
  removeTouched: (path: string) => void;
  isEditing: boolean;
  setEditing: (status: boolean) => void;
  _setErrors: (args: any) => void;
  setFirstMount: (firstMount: boolean) => void;
};

export type WatchProperties = {
  [path: string]:
    | {
    handler: (value: any) => void;
    immediate?: boolean;
  }
    | ((value: any) => void);
};

export interface FRCoreProps {
  /** 表单的全局共享属性 */
  globalProps: any;
  /** 标签元素和输入元素的排列方式，column-分两行展示，row-同行展示，inline-自然顺排，默认`'column'` */
  displayType: "column" | "row" | "inline";
  theme: string | number;
  column: string | number | undefined;
  debounceInput: boolean;
  /** 显示当前表单内部状态 */
  debug: boolean;
  /** 标签宽度 */
  labelWidth: string | number;
  /** 覆盖默认的校验信息 */
  validateMessages: any;
  locale: "cn" | "en";
  /** 只读模式 */
  readOnly: boolean;
  /** 禁用模式 */
  disabled: boolean;
  /** 对象组件是否折叠（全局的控制） */
  allCollapsed: boolean;
  /** 自定义组件 */
  widgets: any;
  /** 组件和schema的映射规则 */
  mapping: any;
  watchMap: WatchProperties,
  /** 时时与外部更新同步的钩子 */
  onValuesChange?: (changedValues: any, formData: any) => void;
};
