import{_ as n,o as s,c as a,ae as t}from"./plugin-vue_export-helper.f724a19a.js";const p={components:{}},g='{"title":"props","description":"","frontmatter":{"map":{"path":"/form-render-vue/agree/props","realPath":"src/form-render-vue/agree/props/index.zh-CN.md"}},"headers":[{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0"},{"level":2,"title":"\u5185\u7F6E\u7EC4\u4EF6 props","slug":"\u5185\u7F6E\u7EC4\u4EF6-props"},{"level":3,"title":"list \u5217\u8868","slug":"list-\u5217\u8868"},{"level":3,"title":"object \u5BF9\u8C61","slug":"object-\u5BF9\u8C61"},{"level":3,"title":"url \u7EC4\u4EF6","slug":"url-\u7EC4\u4EF6"},{"level":3,"title":"upload \u4E0A\u4F20","slug":"upload-\u4E0A\u4F20"},{"level":3,"title":"color \u989C\u8272\u9009\u62E9","slug":"color-\u989C\u8272\u9009\u62E9"},{"level":3,"title":"slider \u62D6\u52A8\u9009\u62E9\u6570\u5B57","slug":"slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6 props","slug":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6-props"}],"relativePath":"form-render-vue/agree/props/index.md","lastUpdated":1679067594393}',o=t(`__VP_STATIC_START__<div style="margin:24px 0;"></div><h1 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h1><h2 id="\u6982\u8FF0"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 props \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002props \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 props \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRenderVue \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982</p><div class="language-js"><pre><code>  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u7F51\u5740&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;https://&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">&#39;.com&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5185\u7F6E\u7EC4\u4EF6-props"><a class="header-anchor" href="#\u5185\u7F6E\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u5185\u7F6E\u7EC4\u4EF6 props</h2><p>\u4E00\u4E9B\u5185\u7F6E\u7684 widget \u7EC4\u4EF6\u662F\u7531\u591A\u4E2A\uFF08\u6216\u8005\u590D\u6742\u7ED3\u6784\u7684\uFF09\u81EA\u7136\u7EC4\u4EF6\u7EC4\u6210\u7684\uFF0C\u6B64\u65F6\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u81EA\u7136\u7EC4\u4EF6\u5F00\u4E86\u4E00\u4E2A props \u5165\u53E3\uFF0C\u4F8B\u5982 list \u7EC4\u4EF6\u6709 props \u548C itemProps \u4E24\u4E2A\u5C5E\u6027\uFF0C\u652F\u6301\u7528\u6237\u5BF9 list \u672C\u8EAB\u4EE5\u53CA\u6BCF\u4E2A item \u7684\u5B9A\u5236\u5316\u5C55\u793A &amp; \u529F\u80FD\u9700\u6C42\u3002\u6240\u6709\u5185\u7F6E\u7684 props \u89C1\u4E0B\u9762\u5217\u8868</p><h3 id="list-\u5217\u8868"><a class="header-anchor" href="#list-\u5217\u8868" aria-hidden="true">#</a> list \u5217\u8868</h3><p><strong>props</strong></p><table><thead><tr><th>props</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td>hideTitle</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u53EA\u652F\u6301\u201CsimpleList\u201D\uFF0C\u9690\u85CF title\uFF0C\u5C55\u793A\u66F4\u7D27\u51D1</td></tr><tr><td>hideDelete</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u9690\u85CF\u5220\u9664\u6309\u94AE</td></tr><tr><td>hideAdd</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u9690\u85CF\u65B0\u589E/\u590D\u5236\u6309\u94AE</td></tr><tr><td>hideCopy</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u9690\u85CF\u590D\u5236\u6309\u94AE</td></tr><tr><td>hideMove</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u9690\u85CF\u4E0A\u4E0B\u79FB\u52A8 item \u7684\u6309\u94AE</td></tr><tr><td>buttons</td><td style="text-align:center;">array</td><td style="text-align:center;">\u4E0B\u8BE6 \uFF08\u6CE8 1\uFF09</td></tr></tbody></table><p>\u6CE8\uFF1A\u5BF9\u4E8E\u5C55\u793A\u662F table \u7C7B\u578B\u7684 list\uFF08tableList\u3001drawerList\u3001virtualList\uFF09\uFF0C\u6240\u6709 antd table \u652F\u6301\u7684 props \u90FD\u53EF\u4EE5\u900F\u4F20\uFF0C\u4F8B\u5982</p><div class="language-json"><pre><code><span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;scrollX&quot;</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>itemProps</strong></p><table><thead><tr><th>props</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td>buttons</td><td style="text-align:center;">array</td><td style="text-align:center;">\u4E0B\u8BE6 \uFF08\u6CE8 2\uFF09</td></tr><tr><td>addBtnProps</td><td style="text-align:center;">array</td><td style="text-align:center;">\u201C\u65B0\u589E\u4E00\u6761\u201D\u6309\u94AE\u7684\u6837\u5F0F\u548C\u6587\u6848\u4FEE\u6539\uFF0C\u6240\u6709 antd \u7684 button \u7684 props \u90FD\u652F\u6301\u4F20\u5165\uFF0C\u4F8B\u5982 addBtnProps: {children: &#39;\u65B0\u589E\u4F01\u4E1A&#39;, type: &#39;primary&#39;}</td></tr></tbody></table><p>\u6CE8\uFF1A\u5BF9\u4E8E\u5C55\u793A\u662F table \u7C7B\u578B\u7684 list\uFF08tableList\u3001drawerList\u3001virtualList\uFF09\uFF0C\u6240\u6709 columns \u7684\u5355\u4E2A\u914D\u7F6E\u90FD\u53EF\u4EE5\u900F\u4F20\uFF0C\u4F1A\u4F5C\u7528\u5230 clumns \u7684\u6240\u6709 item\uFF0C\u4F8B\u5982</p><div class="language-json"><pre><code><span class="token property">&quot;itemProps&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5219 table \u7684\u6240\u6709\u5355\u5143\u683C\uFF08\u9664\u4E86\u201C\u64CD\u4F5C\u201D\u90A3\u4E00\u5217\uFF09\u90FD\u4F1A\u5BBD\u5EA6 200 px</p><p><strong>\u6CE8 1\uFF1A</strong></p><p>\u5217\u8868\u9ED8\u8BA4\u53EA\u5C55\u793A\u201C\u65B0\u589E\u4E00\u6761\u201D\u6309\u94AE\u3002<code>buttons</code> \u7528\u4E8E\u6DFB\u52A0\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u6309\u94AE</p><div class="language-json"><pre><code><span class="token property">&quot;arrDemo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Excel\u5BFC\u5165&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;someCallback&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>FormRenderVue \u4F1A\u5230 <code>window.someCallback</code> \u4E0A\u5BFB\u627E\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u56DE\u8C03\u51FD\u6570\u53EF\u63A5\u53D7\u53C2\u6570 <code>value</code>\u548C <code>schema</code>\u3002\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C</li><li>html \u5B57\u6BB5\u53EF\u4F7F\u7528\u6B63\u5E38\u7684 string \u503C\uFF0C\u6216\u8005\u4EFB\u4F55 html \u7247\u6BB5\uFF0C\u4F8B\u5982</li></ol><div class="language-json"><pre><code><span class="token property">&quot;arrDemo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;span style=&#39;color: red&#39;&gt;\u62C9\u53D6\u6570\u636E&lt;/span&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;someCallback&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// value: \u6574\u4E2A\u6570\u7EC4\u7684\u503C\uFF0ConChange: \u4F20\u5165\u6539\u53D8\u540E\u7684\u6570\u7EC4\u503C\uFF0C\u89E6\u53D1state\u66F4\u65B0</span>
<span class="token comment">// \u4F7F\u7528Object\u5165\u53C2\uFF0C\u4E3A\u4E86\u5C06\u6765\u597D\u6269\u5C55</span>
window<span class="token punctuation">.</span><span class="token function-variable function">someCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> schema <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5982\u4E0A\u7684 someCallback \u4F1A\u5728\u539F\u6709\u7684 list \u503C\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 item: <code>{ a: &#39;hello&#39; }</code></p><p><strong>\u6CE8 2\uFF1A</strong></p><p>itemProps.buttons \u7528\u4E8E\u6269\u5C55\u5217\u8868\u91CC\u6BCF\u4E2A item \u7684\u66F4\u591A\u64CD\u4F5C</p><p>\u6CE8\uFF1AitemProps.buttons \u76EE\u524D\u8FD8\u672A\u5728\u4EE3\u7801\u5C42\u9762\u5B9E\u73B0\u3002\u4E3B\u8981\u539F\u56E0\u5728\u4E8E itemProps.buttons \u5728\u4E0D\u540C\u5C55\u793A\u4E0B\u53EF\u80FD\u662F icon\uFF0C\u800C form-render \u5E76\u4E0D\u60F3\u5F15\u5165\u6574\u4E2A<code>@ant-design/icons</code>\uFF0C\u5927\u5BB6\u6709\u597D\u7684\u60F3\u6CD5\u6B22\u8FCE\u9489\u9489\u7FA4\u8BA8\u8BBA\uFF0C\u6216\u8005\u4F7F\u7528 issue/feature</p><div class="language-json"><pre><code><span class="token property">&quot;arrDemo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;itemProps&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u590D\u5236&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;copyMe&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7528\u6CD5\u76F8\u540C, FormRenderVue \u4F1A\u5C1D\u8BD5\u5728\u70B9\u51FB\u590D\u5236\u6309\u94AE\u65F6\u6267\u884C <code>window.copyMe</code>\u3002<code>window.copyMe</code>\u7684\u5165\u53C2\u4E3A value, index, schema \uFF0C\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C</p><div class="language-js"><pre><code><span class="token comment">// \u6CE8\u610F value \u662F\u6574\u4E2A\u5217\u8868\u7684 value</span>
window<span class="token punctuation">.</span><span class="token function-variable function">copyMe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> schema <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="object-\u5BF9\u8C61"><a class="header-anchor" href="#object-\u5BF9\u8C61" aria-hidden="true">#</a> object \u5BF9\u8C61</h3><p><strong>props</strong></p><p>\u76EE\u524D\u8FD8\u6CA1\u6709\uFF0C\u672A\u6765\u4F1A\u6269\u5C55</p><h3 id="url-\u7EC4\u4EF6"><a class="header-anchor" href="#url-\u7EC4\u4EF6" aria-hidden="true">#</a> url \u7EC4\u4EF6</h3><p><strong><code>addonText</code></strong> \u9ED8\u8BA4\u4E3A \u201C\u6D4B\u8BD5\u94FE\u63A5\u201D\uFF0C\u53EF\u901A\u8FC7\u6B64\u5B57\u6BB5\u81EA\u5B9A\u4E49</p><p><strong><code>prefix</code></strong> \u548C <strong><code>suffix</code></strong> \u4E3A antd \u539F\u751F\u652F\u6301\uFF0C\u5982\u679C\u4F7F\u7528\u5219\u6700\u7EC8\u7684 formData \u91CC\u5BF9\u5E94 key \u7684\u503C\u4F1A\u81EA\u52A8\u62FC\u63A5\u4E0A prefix \u548C suffix\u3002\u4F8B\u5982 prefix: &quot;https://&quot;, \u586B\u5199\u4E86&quot;<a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">www.taobao.com</a>&quot;\uFF0C\u5219\u6700\u7EC8\u63D0\u4EA4\u7684 formData \u503C\u4E3A&quot;<a href="https://www.taobao.com" target="_blank" rel="noopener noreferrer">https://www.taobao.com</a>&quot;</p><h3 id="upload-\u4E0A\u4F20"><a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a> upload \u4E0A\u4F20</h3><p><strong>uploadProps</strong></p><p>upload \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u53C2\u8003 <a href="https://ant.design/components/upload/" target="_blank" rel="noopener noreferrer">antd/upload \u6587\u6863</a></p><p><strong>buttonProps</strong></p><p>\u4E0A\u4F20\u6309\u94AE Button \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 antd/button</p><h3 id="color-\u989C\u8272\u9009\u62E9"><a class="header-anchor" href="#color-\u989C\u8272\u9009\u62E9" aria-hidden="true">#</a> color \u989C\u8272\u9009\u62E9</h3><p><strong>props</strong></p><p>colorPicker \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003<a href="https://www.npmjs.com/package/rc-color-picker" target="_blank" rel="noopener noreferrer">rc-color-picker \u6587\u6863</a></p><p><strong>inputProps</strong></p><p>\u8F93\u5165\u6846 input \u7684 props\uFF0C\u53C2\u8003 antd/input</p><h3 id="slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57"><a class="header-anchor" href="#slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57" aria-hidden="true">#</a> slider \u62D6\u52A8\u9009\u62E9\u6570\u5B57</h3><p><strong>props</strong></p><ol><li><p>slider \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u652F\u6301\u6240\u6709 slider \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 <a href="https://ant.design/components/slider/" target="_blank" rel="noopener noreferrer">antd/slider \u6587\u6863</a></p></li><li><p>\u8FD8\u652F\u6301<code>hideInput</code>, \u9ED8\u8BA4<code>false</code>\uFF0C\u7528\u4E8E\u63A7\u5236\u662F\u5426\u5C55\u793A Input</p></li></ol><p><strong>inputProps</strong></p><p>\u7528\u4E8E\u63A7\u5236 input \u5C55\u793A\u7684 props\uFF0C\u652F\u6301\u6240\u6709 input \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 <a href="https://ant.design/components/input/" target="_blank" rel="noopener noreferrer">antd/input \u6587\u6863</a></p><h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6-props"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7EC4\u4EF6 props</h2><p>\u5F53\u7528\u6237\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u662F\u590D\u5408\u7EC4\u4EF6\uFF08\u7531\u591A\u4E2A\u81EA\u7136\u7EC4\u4EF6\u7EC4\u5408\u800C\u6210\uFF09\u65F6\uFF0C\u63A8\u8350\u505A\u6CD5\u662F props \u4E2D\u653E\u7F6E\u4E00\u4E9B\u5168\u5C40\u9700\u8981\u4F7F\u7528\u7684 props\uFF0C\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u800C\u5176\u4E2D\u5355\u4E2A\u5143\u7D20\u7684\u5B9A\u5236 props \u4F7F\u7528 props1\uFF0Cprops2\uFF0C... \u8FD9\u6837\u7684\u547D\u540D\u3002\u51E1\u662F\u5305\u542B props\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u7684 schema \u7684 key \u503C\uFF0C\u90FD\u4F1A\u539F\u6837\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F8B\u5982</p><div class="language-js"><pre><code>  <span class="token literal-property property">percentInput</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u767E\u5206\u6BD4\u8F93\u5165&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">showInput</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inputProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">&#39;%&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">percentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 props \u4E3A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showInput</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">&#39;%&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">percentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,56),e=[o];function r(l,c,u,i,d,k){return s(),a("div",null,e)}var y=n(p,[["render",r]]);export{g as __pageData,y as default};