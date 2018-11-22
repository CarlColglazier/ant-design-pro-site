webpackJsonp([81],{1098:function(n,s){n.exports={content:["article",{},["h3","What is the difference between Ant Design React and Ant Design Pro?"],["p","It can be understood that Ant Design React is a set of React component libraries, and Pro is a complete front-end scaffolding using this set of component libraries."],["h3","How to use Ant Design Pro?"],["p","Please read the document ",["a",{title:null,href:"/docs/getting-started"},"Getting Started"],", and Ant Financial users please read ",["a",{title:null,href:"/docs/getting-start-inner"},"Getting Started (Ants Financial User)"],"."],["h3","Can I use Ant Design Pro in a production environment?"],["p","Of course you can! Ant Design Pro is based on the latest antd version. There are currently multiple middle and backend projects in use."],["h3","How to update Ant Design Pro?"],["ul",["li",["p","Upgrade the ",["code","antd"]," version separately for updating the base components."]],["li",["p","Compare the differences between different Ant Design Pro versions and manually modify the local configuration."]],["li",["p","You can also try merging remote branches: ",["code","git pull https://github.com/ant-design/ant-design-pro"]," (note that you need to resolve conflicts yourself)."]],["li",["p","Copy the latest typical template directly on GitHub."]]],["h3","How to request a menu from the server?"],["p","Just update ",["code","this.state.menuData"]," in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js"},"BasicLayout"],", which is a json array. Just the server returns a json of similar format."],["pre",{lang:"js",highlighted:' <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">,</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'analysis\'</span><span class="token punctuation">,</span>\n          exact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/monitor\'</span><span class="token punctuation">,</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'monitor\'</span><span class="token punctuation">,</span>\n          exact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/workplace\'</span><span class="token punctuation">,</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'workplace\'</span><span class="token punctuation">,</span>\n          exact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n    <span class="token operator">...</span><span class="token punctuation">.</span>\n  <span class="token punctuation">]</span>'},["code"," [\n    {\n      path: '/dashboard',\n      name: 'dashboard',\n      icon: 'dashboard',\n      children: [\n        {\n          path: '/dashboard/analysis',\n          name: 'analysis',\n          exact: true,\n        },\n        {\n          path: '/dashboard/monitor',\n          name: 'monitor',\n          exact: true,\n        },\n        {\n          path: '/dashboard/workplace',\n          name: 'workplace',\n          exact: true,\n        },\n      ],\n    }\n    ....\n  ]"]],["blockquote",["p","Note that path must be defined in routre.config.js."]],["h3","How to modify the default webpack configuration?"],["p","See ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#configuration"},"roadhog configuration"]," for details."],["h3","How to add babel plugins?"],["p","See details ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#extrababelplugins"},"roadhog extraBabelPlugins"],"."],["h3","How to use static resources such as pictures?"],["p","Absolute paths can be used directly (map support is required). If you want to use local files directly, you can import them as follows."],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../assets/picture.png\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<img src={require('../assets/picture.png')} />"]],["h3","How is my ",["code","#"]," number in my url? How to get rid of?"],["p","Please refer to the deploy document ",["a",{title:null,href:"/docs/deploy#Routing-and-server-integration"},"Routing and server integration"],"."],["h3","\u5982\u4f55\u4ee3\u7406\u5230\u540e\u7aef\u670d\u52a1\u5668\uff1f"],["p","Ant Design Pro has built-in umi, umi uses webpack ",["a",{title:null,href:"https://webpack.docschina.org/configuration/dev-server/"},"devServer"]," to support the proxy.\nYou only need to configure the proxy property in config.js.As long as the proxy and mock url are different, they can be used at the same time."],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  proxy<span class="token punctuation">:</span><span class="token punctuation">{</span>\n    <span class="token string">\'/server/api/\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      target<span class="token punctuation">:</span> <span class="token string">\'https://preview.pro.ant.design/\'</span><span class="token punctuation">,</span>\n      changeOrigin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pathRewrite<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'^/server\'</span><span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// /server/api/currentUser -> /api/currentUser</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code","{\n  ...\n  proxy:{\n    '/server/api/': {\n      target: 'https://preview.pro.ant.design/',\n      changeOrigin: true,\n      pathRewrite: { '^/server': '' }, // /server/api/currentUser -> /api/currentUser\n    },\n  },\n  ...\n}"]],["p","Enter ",["a",{title:null,href:"http://localhost:8000/server/api/currentUser"},"http://localhost:8000/server/api/currentUser"]," preview in your browser."],["h3","How to add scss support?"],["p","Open the ",["code","sass"]," configuration in ",["code",".webpackrc"],", see ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#sass"},"sass"],"."],["h3","Git commit error?"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png",width:"600"}]],["p","Scaffolding defaults to the ",["a",{title:null,href:"http://eslint.org/"},"eslint"]," code style check. Please follow the prompts and resubmit it, or you can manually check ",["code","npm run lint"],"."],["h3","Disable browser opening automatically on ",["code","npm start"]],["p","Modify ",["code","scripts.start"]," in ",["code","package.json"]," to:"],["pre",{lang:"js",highlighted:'<span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"cross-env BROWSER=none roadhog server"</span><span class="token punctuation">,</span>'},["code",'"start": "cross-env BROWSER=none roadhog server",']],["h3","Does Ant Design Pro support internationalization?"],["p","This is one of the features of Ant Design Pro. The first version is currently available in Chinese. Internationalization is in our 2.0 plan and will be released soon."],["h3","Npm installation of patcheteer failed"],["p","Try using cnpm or setting environment variables to see this ",["a",{title:null,href:"https://github.com/cnpm/cnpmjs.org/issues/1246"},"issue"],"\u3002"],["h3","English Documentation?"],["p","English Documentation will be translated in next couple of monthes, trace ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479"},"ant-design/ant-design-pro#54"]," and ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues/120"},"ant-design-pro/issues/120"]," for more detail."],["hr"],["p","More FAQs can be found in ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting"},"Trouble Shooting"]," and ",["a",{title:null,href:"Https://github.com/sorrycc/roadhog"},"roadhog"],". If this does not solve your problem, please ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues"},"Report to us"],"."]],meta:{order:22,title:"FAQ",type:"Other",filename:"docs/faq.en-US.md"},description:["section",["p","Before you ask a question, please check the following FAQ."]],toc:["ul"]}}});