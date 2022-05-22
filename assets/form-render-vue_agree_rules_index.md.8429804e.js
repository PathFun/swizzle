import{_ as n,c as s,o as a,L as t}from"./plugin-vue_export-helper.94e0bb6d.js";const p={components:{}},g='{"title":"rules(\u6821\u9A8C)","description":"","frontmatter":{"map":{"path":"/form-render-vue/agree/rules","realPath":"src/form-render-vue/agree/rules/index.zh-CN.md"}},"headers":[{"level":2,"title":"rules(\u6821\u9A8C)","slug":"rules-\u6821\u9A8C"}],"relativePath":"form-render-vue/agree/rules/index.md","lastUpdated":1653229434833}',o=t(`<div style="margin:24px 0;"></div><h2 id="rules-\u6821\u9A8C"><a class="header-anchor" href="#rules-\u6821\u9A8C" aria-hidden="true">#</a> rules(\u6821\u9A8C)</h2><ol><li><p>rules \u7528\u4E8E\u63CF\u8FF0\u7EC6\u81F4\u7684\u3001\u5B9A\u5236\u5316\u7684\u6821\u9A8C\uFF0C\u7528\u6CD5\u4E0E antd \u7C7B\u4F3C\uFF0C\u56E0\u4E3A FormRenderVue \u5728\u5E95\u5C42\u4F7F\u7528\u4E86\u4E0E antd \u76F8\u540C\u7684 <code>async-validator</code> \u4F9D\u8D56\u3002\u6240\u4EE5 <a href="https://github.com/yiminghe/async-validator#type" target="_blank" rel="noopener noreferrer"><code>async-validator</code> \u6587\u6863</a> \u7684\u6240\u6709 api \u5728 FormRenderVue \u4E2D\u90FD\u53EF\u652F\u6301\u3002</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u57FA\u7840\u5C5E\u6027</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EE3\u53F7&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token comment">// rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)</span>
      <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[A-Za-z0-9]+$&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-json"><pre><code><span class="token property">&quot;zip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zip code&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;len&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;invalid zip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5F53\u5E38\u89C4\u5B57\u6BB5\u4E0D\u80FD\u6EE1\u8DB3\u65F6\uFF0C\u53EF\u4F7F\u7528 <code>validator</code> \u52A8\u6001\u6821\u9A8C\u3002\u8BE6\u89C1 <a href="https://github.com/yiminghe/async-validator#validate" target="_blank" rel="noopener noreferrer"><code>async-validator</code> \u6587\u6863</a></p><div class="language-js"><pre><code>name<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
  required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value <span class="token operator">===</span> <span class="token string">&#39;muji&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>\u4F5C\u4E3A FormRenderVue \u4E66\u5199\u7684\u7279\u522B\u89C4\u5219\uFF0C\u7531\u4E8E\u4EE5\u4E0B\u4E2A\u5B57\u6BB5\u540C\u65F6\u6D89\u53CA\u5230\u4E86\u5C55\u793A\u548C\u6821\u9A8C\uFF0C\u6240\u4EE5\u5DF2\u7ECF\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u4E2D\uFF0C\u800C\u4E0D\u9700\u8981\u5728 rules \u4E2D\u7279\u522B\u6CE8\u660E</p><div class="language-text"><pre><code>type
format
min
max
required
</code></pre></div></li><li><p>\u5982\u679C\u60F3\u5B9A\u5236\u4E00\u7C7B\u6821\u9A8C\u7684\u6587\u6848\uFF0C\u5EFA\u8BAE\u4F7F\u7528 <code>validateMessages</code> props \u6765\u7EDF\u4E00\u8986\u76D6\u6821\u9A8C\u4FE1\u606F</p><p><code>FormRenderVue</code> \u4E3A\u6821\u9A8C\u63D0\u4F9B\u4E86<a href="https://github.com/PathFun/swizzle/blob/main/packages/form-render-vue/src/validateMessageCN.js" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</a>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>validateMessages</code> \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">{</span>
  required<span class="token operator">:</span> <span class="token string">&#39;\${title}\u662F\u5FC5\u9009\u5B57\u6BB5&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Form validateMessages<span class="token operator">=</span><span class="token punctuation">{</span>validateMessages<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A <code>\${title}</code>/<code>\${min}</code>/<code>\${max}</code>/<code>\${len}</code>/<code>\${pattern}</code>, \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 <a href="https://github.com/PathFun/swizzle/issues/new/choose" target="_blank" rel="noopener noreferrer">issue</a></p></li><li><p>\u5982\u679C\u60F3\u5B9A\u5236\u5355\u4E2A\u7EC4\u4EF6\u5FC5\u586B\u7684\u9519\u8BEF\u6587\u6848\uFF0C\u8BF7\u540C\u65F6\u4E66\u5199 required \u548C rules\uFF1A</p><div class="language-json"><pre><code><span class="token property">&quot;zip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zip code&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;len&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;invalid zip&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zip is required&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>`,3),e=[o];function r(c,u,l,i,k,d){return a(),s("div",null,e)}var m=n(p,[["render",r]]);export{g as __pageData,m as default};
