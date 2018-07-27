webpackJsonp([41],{1525:function(t,e){t.exports={content:["section",["p","\u6743\u9650\u7ec4\u4ef6\uff0c\u901a\u8fc7\u6bd4\u5bf9\u73b0\u6709\u6743\u9650\u4e0e\u51c6\u5165\u6743\u9650\uff0c\u51b3\u5b9a\u76f8\u5173\u5143\u7d20\u7684\u5c55\u793a\u3002"]],meta:{title:{"en-US":"Authorized","zh-CN":"Authorized"},subtitle:"\u6743\u9650",cols:1,order:15,filename:"scaffold/src/components/Authorized/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","RenderAuthorized"],["p",["code","RenderAuthorized: (currentAuthority: string | () => string) => Authorized"]],["p","\u6743\u9650\u7ec4\u4ef6\u9ed8\u8ba4 export RenderAuthorized \u51fd\u6570\uff0c\u5b83\u63a5\u6536\u5f53\u524d\u6743\u9650\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u6743\u9650\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u63d0\u4f9b\u4ee5\u4e0b\u51e0\u79cd\u4f7f\u7528\u65b9\u5f0f\u3002"],["h3","Authorized"],["p","\u6700\u57fa\u7840\u7684\u6743\u9650\u63a7\u5236\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","children"],["td","\u6b63\u5e38\u6e32\u67d3\u7684\u5143\u7d20\uff0c\u6743\u9650\u5224\u65ad\u901a\u8fc7\u65f6\u5c55\u793a"],["td","ReactNode"],["td","-"]],["tr",["td","authority"],["td","\u51c6\u5165\u6743\u9650/\u6743\u9650\u5224\u65ad"],["td",["code","string | array | Promise | (currentAuthority) => boolean | Promise"]],["td","-"]],["tr",["td","noMatch"],["td","\u6743\u9650\u5f02\u5e38\u6e32\u67d3\u5143\u7d20\uff0c\u6743\u9650\u5224\u65ad\u4e0d\u901a\u8fc7\u65f6\u5c55\u793a"],["td","ReactNode"],["td","-"]]]],["h3","Authorized.AuthorizedRoute"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","authority"],["td","\u51c6\u5165\u6743\u9650/\u6743\u9650\u5224\u65ad"],["td",["code","string | array | Promise | (currentAuthority) => boolean | Promise"]],["td","-"]],["tr",["td","redirectPath"],["td","\u6743\u9650\u5f02\u5e38\u65f6\u91cd\u5b9a\u5411\u7684\u9875\u9762\u8def\u7531"],["td","string"],["td","-"]]]],["p","\u5176\u4f59\u53c2\u6570\u4e0e ",["code","Route"]," \u76f8\u540c\u3002"],["h3","Authorized.Secured"],["p","\u6ce8\u89e3\u65b9\u5f0f\uff0c",["code","@Authorized.Secured(authority, error)"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","authority"],["td","\u51c6\u5165\u6743\u9650/\u6743\u9650\u5224\u65ad"],["td",["code","string | Promise | (currentAuthority) => boolean | Promise"]],["td","-"]],["tr",["td","error"],["td","\u6743\u9650\u5f02\u5e38\u65f6\u6e32\u67d3\u5143\u7d20"],["td","ReactNode"],["td",["exception",{type:"403"}]]]]],["h3","Authorized.check"],["p","\u51fd\u6570\u5f62\u5f0f\u7684 Authorized\uff0c\u7528\u4e8e\u67d0\u4e9b\u4e0d\u80fd\u88ab HOC \u5305\u88f9\u7684\u7ec4\u4ef6\u3002 ",["code","Authorized.check(authority, target, Exception)"],"\n\u6ce8\u610f\uff1a\u4f20\u5165\u4e00\u4e2a Promise \u65f6\uff0c\u65e0\u8bba\u6b63\u786e\u8fd8\u662f\u9519\u8bef\u8fd4\u56de\u7684\u90fd\u662f\u4e00\u4e2a ReactClass\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","authority"],["td","\u51c6\u5165\u6743\u9650/\u6743\u9650\u5224\u65ad"],["td",["code","string | Promise | (currentAuthority) => boolean | Promise"]],["td","-"]],["tr",["td","target"],["td","\u6743\u9650\u5224\u65ad\u901a\u8fc7\u65f6\u6e32\u67d3\u7684\u5143\u7d20"],["td","ReactNode"],["td","-"]],["tr",["td","Exception"],["td","\u6743\u9650\u5f02\u5e38\u65f6\u6e32\u67d3\u5143\u7d20"],["td","ReactNode"],["td","-"]]]]]}}});