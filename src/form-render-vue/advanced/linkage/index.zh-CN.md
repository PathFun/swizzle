---
map:
  path: /form-render-vue/advanced/linkage
---

<div style="margin:24px 0" />

# 表单联动

表单组件间的联动是开发中普遍的问题，FormRender 希望能保持简洁易用的 api 的同时支持联动。为此我们提供了“函数表达式”。

### 函数表达式

函数表达式为字符串，并以双括号`{{ "\{\{...\}\}" }}`为语法特征。schema 里除了 default (默认值) / rules 字段(校验信息) 以外，所有字段都支持函数表达式，例如

```json
{
  "title": "{{formData.x.y === 'us' ? '美元':'人民币'}}",
  "type": "string"
}
```

注 1：rules 字段暂不支持表达式，而是用 `validator` 方法写复杂校验，详见 [async-validator 文档](https://github.com/yiminghe/async-validator#type)。  
注 2：default 字段对应的是 \<Input /\> 的 defaultValue，defaultValue 是不会根据值的后续变化而变化的，所以我们也不允许 default 字段使用函数表达式，遇到一个组件需要修改另一个组件的值的情况，请使用自定义组件内置的 `addons.onItemChange` 方法。

函数表达式可使用以下 2 关键字：

| 名称      |                                                       说明                                                        |
| --------- | :---------------------------------------------------------------------------------------------------------------: |
| formData  |                 整个 form 的值 （最常用，当两个关联组件距离较远时，可以从顶层的 formData 里获取）                 |
| rootValue | 父表单元素的值 （上一级的值，只在列表场景的使用，例如列表某个元素的父级就是整个 item，其他场景一律使用 formData） |

### 使用

<demo src="./components/Linkage.vue"
language="vue">
</demo>

1. 在以上场景，`rootValue.checkbox1`的父级就是 formData，所以`rootValue`字段与`formData`字段使用起来没有区别。
2. **写表达式的时候，需要注意的是首次渲染时，所有没有指明 default 值的元素，值都是 undefined**。所以例如 select1、input1 的初始值并不是空字符串 ""，而是 undefined。写类似于`{{ "\{\{formData.input1 === ''\}\}" }}`的表达式在首次渲染中是无效的

### 更多属性的 demo

<demo src="./components/LinkageMore.vue"
language="vue">
</demo>

### 最后

1. 如果涉及到值的联动，或者极其复杂的表单展示联动，可以使用 [watch](/form-render-vue/advanced/watch/)
2. 更复杂和定制化的表单需求建议使用 `dependencies` 字段明确注明关联关系字段，并使用自定义组件定制所需展示。FormRender 的设计理念非常推崇组件的即插即用，详见[自定义组件](/form-render-vue/advanced/widget/)章节。`dependencies`字段的使用细节见[schema 规范](/form-render-vue/agree/schema/#dependencies)

