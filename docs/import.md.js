webpackJsonp([59],{1585:function(n,a){n.exports={content:["article",{},["h2","\u5f15\u5165\u4f9d\u8d56"],["p","\u5728\u7ec8\u7aef\u8f93\u5165\u4e0b\u9762\u7684\u547d\u4ee4\u5b8c\u6210\u5b89\u88c5\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> react-quill --save'},["code","$ npm install react-quill --save"]],["blockquote",["p","\u52a0\u4e0a ",["code","--save"]," \u53c2\u6570\u4f1a\u81ea\u52a8\u6dfb\u52a0\u4f9d\u8d56\u5230 package.json \u4e2d\u53bb\u3002"]],["h2","\u4f7f\u7528"],["p","\u76f4\u63a5\u8d34\u4ee3\u7801\u4e86\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification<span class="token punctuation">,</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactQuill <span class="token keyword">from</span> <span class="token string">\'react-quill\'</span><span class="token punctuation">;</span> \n<span class="token keyword">import</span> <span class="token string">\'react-quill/dist/quill.snow.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NewPage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'test\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  prompt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'We got value:\'</span><span class="token punctuation">,</span>\n      description<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5bcc\u6587\u672c\u7f16\u8f91\u5668<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactQuill</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>prompt<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Prompt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { Button, notification, Card } from 'antd';\nimport ReactQuill from 'react-quill'; \nimport 'react-quill/dist/quill.snow.css';\n\nexport default class NewPage extends React.Component {\n  state = {\n    value: 'test',\n  };\n\n  handleChange = (value) => {\n    this.setState({\n      value,\n    })\n  };\n\n  prompt = () => {\n    notification.open({\n      message: 'We got value:',\n      description: <span dangerouslySetInnerHTML={{ __html: this.state.value }}></span>,\n    });\n  };\n\n  render() {\n    return (\n      <Card title=\"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\">\n        <ReactQuill value={this.state.value} onChange={this.handleChange} />\n        <Button style={{ marginTop: 16 }} onClick={this.prompt}>Prompt</Button>\n      </Card>\n    );\n  }\n}"]],["p",["img",{alt:"\u5bcc\u6587\u672c",src:"https://gw.alipayobjects.com/zos/rmsportal/rHQRmMxAbSOCsEFungwd.png"}]],["p","\u8fd9\u6837\u5c31\u6210\u529f\u5f15\u5165\u4e86\u4e00\u4e2a\u5bcc\u6587\u672c\u7ec4\u4ef6\u3002\u6709\u51e0\u70b9\u503c\u5f97\u6ce8\u610f\uff1a"],["ul",["li",["p","import \u65f6\u9700\u8981\u6ce8\u610f\u7ec4\u4ef6\u66b4\u9732\u7684\u6570\u636e\u7ed3\u6784\uff1b"]],["li",["p","\u6709\u4e00\u4e9b\u7ec4\u4ef6\u9700\u8981\u989d\u5916\u5f15\u5165\u6837\u5f0f\uff0c\u6bd4\u5982\u672c\u4f8b\u3002"]]]],meta:{order:8,title:{"en-US":"Import Module","zh-CN":"\u5f15\u5165\u5916\u90e8\u6a21\u5757"},type:"\u5165\u95e8",filename:"docs/import.md"},description:["section",["p","\u9664\u4e86 antd \u7ec4\u4ef6\u4ee5\u53ca\u811a\u624b\u67b6\u5185\u7f6e\u7684\u4e1a\u52a1\u7ec4\u4ef6\uff0c\u6709\u65f6\u6211\u4eec\u8fd8\u9700\u8981\u5f15\u5165\u5176\u4ed6\u5916\u90e8\u6a21\u5757\uff0c\u8fd9\u91cc\u4ee5\u5f15\u5165\u5bcc\u6587\u672c\u7ec4\u4ef6 ",["a",{title:null,href:"https://www.npmjs.com/package/react-quill"},"react-quill"]," \u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5f15\u5165\u4f9d\u8d56",title:"\u5f15\u5165\u4f9d\u8d56"},"\u5f15\u5165\u4f9d\u8d56"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528",title:"\u4f7f\u7528"},"\u4f7f\u7528"]]]}}});