import{_ as n,o as s,c as a,L as p}from"./plugin-vue_export-helper.b8185ee2.js";const t={components:{}},y='{"title":"\u5185\u7F6E\u7EC4\u4EF6","description":"","frontmatter":{"map":{"path":"/form-render-vue/agree/inner-widget","realPath":"src/form-render-vue/agree/inner-widget/index.zh-CN.md"}},"relativePath":"form-render-vue/agree/inner-widget/index.md","lastUpdated":1679066674500}',e=p(`<div style="margin:24px 0;"></div><h1 id="\u5185\u7F6E\u7EC4\u4EF6"><a class="header-anchor" href="#\u5185\u7F6E\u7EC4\u4EF6" aria-hidden="true">#</a> \u5185\u7F6E\u7EC4\u4EF6</h1><p>\u6709\u65F6\uFF0C\u7528\u6237\u5E0C\u671B\u5F3A\u5236\u6307\u5B9A\u4E00\u4E2A\u8868\u5355\u539F\u4EF6\u7528\u67D0\u4E2A\u5185\u7F6E\u6216\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u6765\u5C55\u793A\uFF0C\u53EF\u4F7F\u7528 widget \u5B57\u6BB5\u6765\u8BF4\u660E\uFF0C\u8FD9\u4E2A\u6307\u5B9A\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u88AB\u6307\u5B9A\u7684\u8868\u5355\u9879\u4E00\u5B9A\u4F1A\u4F7F\u7528\u6B64 widget \u6765\u6E32\u67D3\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684 schema \u5982\u679C\u4E0D\u4EE5 widget \u6307\u660E\uFF0C\u4F1A\u9ED8\u8BA4\u7528 input \u8F93\u5165\u6846\u6765\u6E32\u67D3\uFF0C\u4F46\u73B0\u5728\u4F1A\u7528 select \u4E0B\u62C9\u5355\u9009\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u5373\u4F7F\u6CA1\u6709\u4E0B\u62C9\u9009\u9879\uFF1A</p><div class="language-js"><pre><code><span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0B\u62C9\u9009\u6846&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">widget</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u76EE\u524D FormRenderVue \u5DF2\u7ECF\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\u7684\u5C55\u793A\uFF0C\u89C1 <a href="https://xrender.fun/playground" target="_blank" rel="noopener noreferrer">playground</a> - \u57FA\u7840\u63A7\u4EF6</p><p>\u7EC4\u4EF6\u4E0E widget name \u7684\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-sh"><pre><code># \u8F93\u5165\u7C7B
\u8F93\u5165\u6846 input
\u591A\u884C\u8F93\u5165\u6846 textarea
\u6570\u5B57\u8F93\u5165\u6846 number
\u94FE\u63A5\u8F93\u5165\u6846 url
\u56FE\u7247\u8F93\u5165\u6846 imageInput

# \u65E5\u671F\u7C7B
\u65E5\u671F\u7EC4\u4EF6 date
\u65F6\u95F4\u7EC4\u4EF6 time
\u65E5\u671F\u8303\u56F4 dateRange
\u65F6\u95F4\u8303\u56F4 timeRange

# \u9009\u62E9\u7C7B
\u662F\u5426\u9009\u62E9 checkbox
\u4E0B\u62C9\u5355\u9009 select
\u70B9\u51FB\u5355\u9009 radio
\u4E0B\u62C9\u591A\u9009\u6846 multiSelect
\u70B9\u51FB\u591A\u9009\u6846 checkboxes
\u6811\u5F62\u9009\u62E9 treeSelect

# \u5176\u4ED6
\u989C\u8272\u9009\u62E9 color
\u4E0A\u4F20\u7EC4\u4EF6 upload
\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09html
\u6ED1\u52A8\u8F93\u5165\u6761 slider
\u4E94\u661F\u8BC4\u5206 rate

# \u7ED3\u6784\u7C7B
\u5BF9\u8C61 map
\u5217\u8868 cardList/simpleList/tableList/drawerList
</code></pre></div><p>\u6CE8\uFF1A\u5176\u4E2D\u5217\u8868\u7684 <code>widget</code> \u6709\u56DB\u4E2A\u53EF\u5339\u914D\u7EC4\u4EF6\uFF08cardList/simpleList/tableList/drawerList\uFF09</p><ol><li>\u9ED8\u8BA4\u4F7F\u7528 widget: <code>&#39;cardList&#39;</code>\uFF0C\u5361\u7247 list \u7684\u5C55\u793A\uFF0C\u9002\u5B9C\u6709\u590D\u6742\u7ED3\u6784\uFF0C\u4F46 item \u6570\u91CF\u4E0D\u5927\u7684\u573A\u666F</li><li>\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 1-2 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: <code>&#39;simpleList&#39;</code></li><li>\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 3-5 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: <code>&#39;tableList&#39;</code></li><li>\u5982\u679C\u6BCF\u4E2A\u5404 item \u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: <code>&#39;drawerList&#39;</code></li></ol><p>\u56DB\u79CD\u5C55\u793A\u89C1<a href="/form-render-vue/advanced/display/#\u5217\u8868\u7684\u5C55\u793A">\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5</a></p><p>\u5728 schema \u4E2D\u901A\u8FC7 widget \u5173\u952E\u5B57\u58F0\u660E\uFF0C\u53EF\u4EE5\u5F3A\u5236\u58F0\u660E\u4F7F\u7528\u67D0\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3</p><div class="language-js"><pre><code><span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0B\u62C9\u9009\u6846&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">widget</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5F88\u591A\uFF08\u4F46\u4E0D\u662F\u6240\u6709\u7684\uFF09\u5185\u7F6E\u7EC4\u4EF6\u4E0E schema \u6709\u9ED8\u8BA4\u5339\u914D\u89C4\u5219\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boolean</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">integer</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:upload&#39;</span><span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:url&#39;</span><span class="token operator">:</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:dateTime&#39;</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:date&#39;</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:time&#39;</span><span class="token operator">:</span> <span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:textarea&#39;</span><span class="token operator">:</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;string:image&#39;</span><span class="token operator">:</span> <span class="token string">&#39;imageInput&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;range:time&#39;</span><span class="token operator">:</span> <span class="token string">&#39;timeRange&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;range:date&#39;</span><span class="token operator">:</span> <span class="token string">&#39;dateRange&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;range:dateTime&#39;</span><span class="token operator">:</span> <span class="token string">&#39;dateRange&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*?enum&#39;</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*?enum_long&#39;</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;array?enum&#39;</span><span class="token operator">:</span> <span class="token string">&#39;checkboxes&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;array?enum_long&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multiSelect&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*?readOnly&#39;</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5176\u4E2D\u5DE6\u4FA7\u4E3A\u5339\u914D\u89C4\u5219\uFF08\u683C\u5F0F\u4E3A <code>type:format?enum/readOnly</code>\uFF09\uFF0C\u53F3\u4FA7\u4E3A\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u3002\u4F8B\u5982</p><div class="language-js"><pre><code><span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5355\u9009\u6846&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u9009\u98791&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9009\u98792&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),o=[e];function r(c,l,i,k,u,g){return s(),a("div",null,o)}var m=n(t,[["render",r]]);export{y as __pageData,m as default};
