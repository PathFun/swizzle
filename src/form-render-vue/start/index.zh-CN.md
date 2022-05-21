---
map:
  path: /form-render-vue/start
---

<div style="display:flex;align-items:center;margin:24px 0px">
  <span style="font-size:30px;font-weight:600;display:inline-block;margin-left:12px">FormRenderVue</span>
</div>
<p style="display:flex;justify-content:space-between;width:440px">
  <a href="https://www.npmjs.com/package/form-render-vue3?_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/form-render-vue3">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dm/form-render.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/form-render-vue3">
    <img alt="NPM all downloads" src="https://img.shields.io/npm/dt/form-render.svg?style=flat-square">
  </a>
  <a>
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
</p>

> 一站式中后台**表单解决方案**

FormRenderVue 是借鉴React版FormRender实现的Vue版表单解决方案。完成度高达95%，具体功能介绍可详见react版的[FormRender](https://x-render.gitee.io/form-render)

### 安装

FormRenderVue 依赖 ant design vue，单独使用不要忘记同时安装 `ant-design-vue`,同时引入ant-design-vue的样式
##### npm
```shell
npm i form-render-vue3 --save
```
##### yarn
```shell
yarn add form-render-vue3
```
##### main.ts
```shell
import 'form-render-vue3/dist/style.css';
```

### 使用
<demo src="./components/Simple.vue"
language="vue"
title="最简使用 demo：">
</demo>


**换一个更复杂一点的 schema，FR 支持数据绑定、antd 的 props 透传、表单联动等一系列功能：**

<demo src="./components/Complex.vue"
language="vue">
</demo>

**从 demo 中我们不难发现 FormRenderVue 的一些设计是遵循[FormRender](https://x-render.gitee.io/form-render) React的设计的：**
1. 以 schema 来描述表单展示，提交方式与 antd v4 的方式类似
2. schema 以国际标准的 JSON schema 为基础，同时能够方便使用任何 antd 的 props
3. 通过 bind 字段，我们允许数据的双向绑定，数据展示和真实提交的数据可以根据开发需求不同（例如从服务端接口拿到不规则数据时，也能直接使用）
4. 使用`{{ "\{\{...\}\}" }}`书写表达式来完成简单的联动，值得一提的是，这里表达式支持所有 js 语法。FR 还提供自定义组件、dependencies 声明、watch 等工具用于更加复杂的定制
5. 可以通过`displayType`,`labelWidth`等字段轻易修改展示


### 高级用法

- [如何写表单间的简单联动关系？](/form-render/advanced/function)
- [如何通过监听实现复杂联动？](/form-render/advanced/watch)
- [如何用自定义组件完成定制元素的展示？](/form-render/advanced/widget)
- [如何写一个完整的服务端数据表单加载和提交？](/form-render/advanced/form-methods)
- 想要一个多选组件，该怎么写它的 schema？

  很多同学阅读 schema 文档的目的只是如此，建议打开 [playground](/playground), 点击“基础控件”。这里有所有 FormRender 支持的展示以及对于的 schema

- [其他常见问题 FAQ](https://x-render.gitee.io/form-render/faq)

### 组件 Props

```js
import { FR } from 'form-render-vue';
```

#### \<FR \/> props
| 参数                | 描述                                                | 类型                                                                  | 是否必填  | 默认值    |
|-------------------|---------------------------------------------------|---------------------------------------------------------------------|-------|--------|
| id                | 表单的 id，一般用于标识一个表单的语义化名称                           | `string`/`number`                                                   | 否     |        |
| form              | 表单的form对象`如下`                                     | `object`                                                            | 是     |        |
| schema            | 描述表单的 schema，[详见](/form-render-vue/agree/schema/) | `object`                                                            | 是     |        |
| finish            | 提交后的回调，执行 submit() 后触发                            | `(data, errors: Error[]) => void`                                   | 否     | () => {} |
| beforeFinish      | 在 finish 前触发，一般用于外部校验逻辑的回填，入参是个对象，便于扩展            | `({ data, errors, schema, ...rest }) => Error[] 或 Promise<Error[]>` | 否     | () => {} |
| configProvider    | ant-design-vue 的 configProvider，配置透传              | `object`                                                            | 否     | {}     |
| widgets           | 自定义组件，当内置组件无法满足时使用                                | `object`                                                            | 否     | {}     |
| mapping           | schema 与组件的映射关系表，当内置的表不满足时使用                      | `object`                                                            | 否     | {}     |
| allCollapsed      | 对象组件是否默认折叠（全局）                                    | `boolean`                                                           | 否     | false  |
| validateMessages  | 修改默认的校验提示信息。详见下                                   | `object`                                                            | 否     | {}     |
| style             | 顶层 style                                          | `object`                                                            | 否     | {}     |
| className         | 顶层 className                                      | `string`                                                            | 否     | ''     |
| globalProps       | 全局配置                                              | `object`                                                            | 否     | {}     |
| labelWidth        | 一行展示多少列                                           | `string`/`number`                                                   | 否     | 110    |
| column            | 一行展示多少列                                           | `number`                                                            | 否     | 1      |
| debounceInput     | 是否开启输入时使用快照模式。仅建议在表单巨大且表达式非常多时开启                  | `boolean`                                                           | 否     | false  |
| debug             | 开启 debug 模式，时时显示表单内部状态，开发的时候强烈建议打开                | `boolean`                                                           | 否     | false  |
| size              | 表单大小                                              | `string('large' / 'small' / 'default')`                             | 否     | 'small' |
| displayType       | 表单元素与 label 同行 or 分两行展示, inline 则整个展示自然顺排         | `string('column' / 'row' / 'inline')`                               | 否     | 'column' |
| disabled          | 禁用模式，全部表单元素禁用                                     | `boolean`                                                           | 否     | false  |
| readOnly          | 只读模式，一般用于预览展示，全文 text 展示                          | `boolean`                                                           | 否     | false  |
| locale            | 展示语言，目前只支持中文、英文                                   | `string('cn'/'en')`                                                 | 否     | 'cn'    |
| theme             | 展示主题                                              | `string('1'/'2')`                                                   | 否     |      |

#### form 参数

| 参数             | 描述                              | 类型                                              | 是否必填    | 默认值        |
| ---------------- |---------------------------------|-------------------------------------------------|---------|------------|
| formData         | 表单的初始值                          | `object`                                        | 否       |            |
| onChange         | 表单发生改变时触发的方法                    | `(data: formData) => void`                      | 否       |            |
| onValidate       | 表单校验不成功后触发                      | `(errors: Error[]) => void`                     | 否       | () => {}   |
| showValidate     | 是否显示表单校验                        | `boolean`                                       | 否       | false      |
| logOnMount       | 数据分析接口，表单展示完成渲染时触发              | `logOnMount?: (stats: any) => void`             | 否       | () => {}   |
| logOnSubmit      | 数据分析接口，表单提交成功时触发，获得本次表单填写的总时长   | `logOnSubmit?: (stats: any) => void`            | 否       | () => {}   |
| removeHiddenData | 提交数据的时候是否去掉已经被隐藏的元素的数据，默认不隐藏    | `boolean`                                       | 否       | false      |