---
map:
  path: /form-render-vue/agree/schema
---
<div style="margin:24px 0" />

## schema 规范

1. **`schema` 是 \<FormRenderVue/\> 的必填 props，用于描述表单的基本信息、结构和校验。他在结构上使用了 `JSON Schema` 国际规范(<a href="https://json-schema.org/understanding-json-schema/" target="_blank">Understanding JSON Schema</a>)，例如：**

   ```json
   // 对象结构如下:
   {
     "title": "对象",
     "type": "object",
     "properties": {
       "count": {
         "title": "数字",
         "type": "number"
       }
     }
   }
   // 对象列表结构如下：
   {
     "title": "对象数组",
     "type": "array",
     "items": {
       "type": "object",
       "properties": {
         "count": {
           "title": "数字",
           "type": "number"
         }
       }
     }
   }
   ```

2. **单个 schema 的书写分为`基础属性`, `rules` 和 `props`，`基础属性`为各个组件共通的描述，`rules` 描述校验补充信息，`props` 描述组件 props，例如：**

   ```json
   {
     "type": "object",
     "properties": {
       "count": {
         // 基础属性
         "title": "代号",
         "type": "string",
         "min": 6,
         // rules (补充校验信息)
         "rules": [
           {
             "pattern": "^[A-Za-z0-9]+$",
             "message": "只允许填写英文字母和数字"
           }
         ],
         // props (补充antd组件props)
         "props": {
           "allowClear": true
         }
       }
     }
   }
   ```

3. “我要一个多选组件，该怎么写它的 schema？” 很多同学阅读 schema 文档的目的只是如此，建议打开 [playground](https://xrender.fun/playground), 点击“基础控件”。这里有所有 FormRenderVue 支持的展示以及对于的 schema

## 基础属性

为了更好理解基础属性的作用，从 FormRenderVue 内部实现的角度：

1. `type`, `format`, `enum` 和 `widget` 字段决定了使用哪个组件来渲染。具体判断规则见[内置组件](/form-render-vue/schema/inner-widget/#内置组件)
2. `type`, `format`, `min`, `max`, `required` 和 `rules` 字段用于做校验判断
3. `props` 字段用于补充组件支持的更为细致的属性

一个简单的使用各种“基础属性”的样例如下：

```js
export const basic = {
  displayType: 'row',
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url输入框',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email输入框',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '正则校验字符串',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};
```

<demo src="./components/basic.vue"
language="vue">
</demo>

### title

- 类型：`string`
- 详细：表单的标题信息，作为 label 展示，注意 title 为""时占位，title 不写时不占位

如下例，通过选择性不使用 title，达到展示效果

<demo src="./components/Title.vue"
language="vue">
</demo>

### description

- 类型：`string`
- 详细：表单的描述信息，常将填写注意点放入此参数

### descType 

- 类型：'text' | 'icon'
- 详细：当 displayType = 'row' 时，无作用；但当 displayType = 'column' （默认值）时，描述信息（description）的一般展示为文案形式，如果设定 descType: 'icon', 则会使用 tooltip 形式

### type

- 类型：one of [`'string'`, `'number'`, `'boolean'`, `'array'`, `'object'`, `'range'`, `'html'`]
- 详细：type 描述里组件的值的数据类型。用于校验数据类型，也用于判断使用哪个组件来渲染，以及校验表单数据。

注 1：range 是 FormRenderVue 独有的，用于描述区间类组件，例如时间区间选择。

```json
{
  "title": "日期范围",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["开始", "结束"]
}
```

注 2：html 是 FormRenderVue 独有的，用于描述文本类组件

```json
"html": {
  "title": "纯字符串",
  "type": "html",
  "default": "hello world"
}
```

### format

- 类型：one of [`'image'`, `'textarea'`, `'color'`, `'email'`, `'url'`, `'dateTime'`, `'date'`, `'time'`, `'upload'`]
- 详细：用来描述输入框的格式，辅助 type 一同用于判断使用哪个组件来渲染，以及校验表单数据

  ```json
  // 默认 input
  "input": {
    "title": "简单输入框",
    "type": "string",
  }
  // textarea
  "textarea": {
    "title": "简单文本编辑框",
    "type": "string",
    "format": "textarea"
  }
  // 颜色组件
  "color": {
    "title": "颜色选择",
    "type": "string",
    "format": "color"
  }
  // 日期组件
  "date": {
    "title": "日期选择",
    "type": "string",
    "format": "date" // "dateTime"
  }
  // 时间组件
  "time": {
    "title": "时间选择",
    "type": "string",
    "format": "time"
  }
  // 图片链接组件
  "image": {
    "title": "图片展示",
    "type": "string",
    "format": "image"
  }
  ```

### default

- 类型：any
- 详细：组件的默认值，注意默认的对象组件使用 default 无效（其值会由子元素值决定），其他类型包括 array 都可以使用 default：

  ```json
  "list": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "x": {
          "type": "string",
        }
      }
    },
    "default": [{ "x": "a" }, { "x": "b" }]
  }
  ```

### required

- 类型：boolean
- 详细：用于判断是否必填

```json
"requiredInput": {
  "title": "输入框",
  "type": "string",
  "required": true
}
```

### placeholder

- 类型：string
- 详细：Input 等元素的 placeholder。这个属性太常用了，虽然不是每个组件都有，但 80%以上都有，所以决定放在“基础属性”。注意 placeholder 的值遵循底层对应组件所需要的值的书写规范：

```js
"dateRange": {
  "title": "日期范围",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["开始", "结束"]
}
```

### bind

- 类型：string | string[] | false
- 详细：

1. 当服务端接口获取的字段与你希望的表单展示结构不同时，可以通过 bind 字段绑定的方式指明表单的某个字段对应的是外部数据的另一个字段。详细例子见 [“表单与外界的交互”](/form-render-vue/advanced/methods/) 的例 3
2. 用户并不希望纯展示的字段也出现在表单中，此时，使用 bind: `false` 可避免字段在提交时出现
3. 注意：请不要 bind 一个数组结构下面的字段，目前没有对此进行处理，所以会无效（在未来这个限制会解除）

### dependencies

- 类型：string[]
- 支持：v1.6.2 以上版本
- 详细：

1. 一般来说用 `watch` api 和动态表达式，能够解决大部分联动问题，但当联动关系复杂时并不适合使用表达式，当关联性存在列表中时，使用 watch 也不能很好实现
2. 书写自定义组件时，大伙儿经常想在自定义组件中获取全局的某个值，并根据那个值的变动来决定自定义组件的渲染。但是 FR 1.0 性能优化上已经避免了不必要的重复渲染，如果没有显式的指明，自定义组件是不会因为其他表单项的变动而重新渲染的，导致自定义组件内拿到的 formData 并不是最新的

为了解决上述两个问题，我们自然地引入了 `dependencies` 字段。用于显式的指明一个表单项依赖于另一个（多个）表单项。`dependencies`为数组，数组的每一项为所依赖的表单项的数据路径：

```js
list1: {
  title: '对象数组',
  description: '对象数组嵌套功能',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      select1: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['早', '中', '晚'],
        widget: 'radio',
      },
      select2: {
        title: '单选2（自定义组件）',
        type: 'string',
        widget: 'select2', // select2 为自定义组件，具体实现与dependencies的讨论无关，不赘述
        dependencies: ['list1[].select1'],
      },
    },
  },
};
```

如上为一个列表 list1，其中每个 item 都包含两个表单项 select1 和 select2。通过`dependencies`字段，select2 显式的依赖于 select1，以确保 select1 的值变动的同时，对应的同一个 item 下的 select2 必然重新渲染并获取最新的数据

### min

- 类型：int
- 详细：最小值。type:string/array 时代表最小长度，type:number 时代表最小值

### max

- 类型：int
- 详细：最大值。type:string/array 时代表最大长度，type:number 时代表最大值

### disabled

- 类型：boolean
- 详细：组件是否禁用状态

### readOnly

- 类型：boolean
- 详细：组件是否只读状态

### hidden

- 类型：boolean
- 详细：组件是否隐藏状态

### displayType

- 类型：`'row'` | `'column'`
- 详细：Label 与 Field 的展示关系，row 表示并排展示，column 表示两排展示

### width

- 类型：string
- 详细：单个元素的展示宽度（带 label 一起），例如 '20%'

### labelWidth

- 类型：number | string
- 默认值：110
- 详细：label 的宽度，数字值单位为 px，也可使用'20%'/'2rem'等

### className

- 类型：string
- 详细：指明单个表单元素的 className，方便自定义样式

例如如下的 schema 会在生成元素的 `fr-field` 这层添加上用户定义的 `my-className`

```js
audio_on_mic_limit: {
  className: 'my-className',
  title: '同时支持连麦人数',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1人', '2人', '3人'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}
```

<img src='https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png' width='600px' />

### widget

- 类型：string
- 详细：指定使用哪个组件来渲染，是优先级最高的一个字段。用于明确指定使用某个“内置组件”或“自定义组件”。例如：

```json
{
  "title": "单选",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["杭州", "武汉", "贵阳"],
  "widget": "select" // 明确指明使用下拉选择组件
}
```

FR 默认支持的内置组件，以及详细匹配规则见[内置组件](/form-render-vue/schema/inner-widget/)。

`widget`也可以用于匹配“自定义”的组件，如何使用 `widget` 字段和 `widgets` props 来做定制化表单元素渲染，参见[自定义组件](/form-render-vue/advanced/widget/)

### readOnlyWidget

- 类型：string
- 详细：指定只读模式下用哪个自定义组件渲染

readOnly=true 的情况，FormRenderVue 默认使用 html 组件渲染。特殊情况 html 组件无法满足需求，此时通过指明 readOnlyWidget 的方式自定义渲染

```json
{
  "title": "单选",
  "type": "string",
  "widget": "myWidget", // 指明使用 myWidget 来渲染
  "readOnlyWidget": "myReadOnlyWidget" // 指明在只读模式使用 myReadOnlyWidget 来渲染
}
```

### extra

- 类型：string
- 详细：用于在元素下展示更多说明信息，extra 可以是 html string，也可以是纯文案，会展示在元素下面一行紧贴

```json
{
  "title": "单选",
  "type": "string",
  "extra": "<a href='xxx'>详细规范</a>"
}
```

### properties

只在对象组件（type: object）中使用，`properties` 用于包裹对象的子属性：

```json
{
  "title": "对象",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "门票数",
      "type": "number"
    }
  }
}
```

### items

只在列表类组件中使用，描述 Array 中每个 item 的结构。item 目前只支持是对象

```json
{
  "title": "对象数组",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "cardList",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "门票数",
        "type": "number"
      }
    }
  }
}
```

### enum & enumNames

只在选择类组件中使用，用于描述枚举值的值和文案

- 类型：string | number
- 详细：选项值 & 选项的文案

```json
// 单选
{
  "title": "单选",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["杭州", "武汉", "贵阳"],
  "default": "hz"
}
// 多选
{
  "title": "多选",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["杭州", "武汉", "贵阳"]
}
```

### rules

- 类型：数组
- 详细说明：所有除了必填以外的表单校验描述通过 `rules` 字段，详见 [rules 书写规范](/form-render-vue/schema/rules/)

### props (0.x 版本 `ui:options`)

- 类型：object
- 详细说明：当基础字段不够描述组件的展示时，使用 `props` 字段作为扩展。`props` 的具体属性可以查询 antd 的组件文档。所有 `props` 中的属性都会直接透传给组件，所以理论上 FormRenderVue 支持所有 antd 组件库支持的展示，例如

```js
url: {
  title: "网址",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}
```

详见 [props 书写规范](/form-render-vue/schema/props/)
