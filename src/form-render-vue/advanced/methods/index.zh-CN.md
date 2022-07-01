---
map:
  path: /form-render-vue/advanced/methods
---

<div style="margin:24px 0" />

# 表单方法（form）

FormRender v1.x 使用了状态内置的模型，所以外部对表单的所有操作都依赖于 form 实例提供的方法。
本篇会 cover 以下这些常用 api：

```
form.submit
form.setValues
form.setValueByPath
form.setSchemaByPath
```

以及以下的生命周期

```
beforeFinish
onFinish
```

我们写一个最常用的场景：加载一个已经填写完成的表单，从服务端异步获取数据（这里使用 mock）；修改表单并提交新数据给服务端

### 例 1: 表单与服务端的基本交互

**异步加载表单 Schema, 服务端数据填充表单初始值, 提交校验通过后提交数据给服务端**

<demo src="./components/Load.vue"
language="vue"
title="异步加载表单 demo：">
</demo>

### 例 2：服务端校验

**服务端校验，通过 `beforeFinish` 从外部回填 error 信息到表单，注意 `beforeFinish` 需返回要回填的 error**

<demo src="./components/Load1.vue"
language="vue"
title="服务端校验 demo：">
</demo>

### 例 3：bind

**接口数据与展示经常会不符，例如 form 的交互是日期范围组件，服务端传的值是 startDate，endDate 两个字段。此时使用 bind 字段**

<demo src="./components/Bind.vue"
language="vue"
title="Bind demo：">
</demo>

### 例 4：服务端加载选择框的选项

**服务端获取数据后展示下拉选项的选项值，我们提供了 `form.setSchemaByPath` 方法**

<demo src="./components/SelectOption.vue"
language="vue"
title="SelectOption demo：">
</demo>
