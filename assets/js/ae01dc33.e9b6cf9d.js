"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28064],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71738:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"useCustom",title:"useCustom",siderbar_label:"useCustom"},s=void 0,d={unversionedId:"core/hooks/data/useCustom",id:"core/hooks/data/useCustom",isDocsHomePage:!1,title:"useCustom",description:"useCustom is a modified version of react-query's useQuery used for custom requests.",source:"@site/docs/core/hooks/data/useCustom.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useCustom",permalink:"/docs/core/hooks/data/useCustom",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useCustom.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654096549,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"useCustom",title:"useCustom",siderbar_label:"useCustom"},sidebar:"someSidebar",previous:{title:"useCreateMany",permalink:"/docs/core/hooks/data/useCreateMany"},next:{title:"useDataProvider",permalink:"/docs/core/hooks/data/useDataProvider"}},u=[{value:"Features",id:"features",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCustom")," is a modified version of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for custom requests."),(0,o.kt)("p",null,"It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,o.kt)("strong",{parentName:"p"},"not")," be used when creating, updating or deleting a resource. To do these; ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useCreate"},"useCreate"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useUpdate"},"useUpdate")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},"useDelete")," hooks should be used instead.",(0,o.kt)("br",{parentName:"p"}),"\n","This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either.",(0,o.kt)("br",{parentName:"p"}),"\n","If you have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useCustom")," for mutation operations, you can manually manage the application state with the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryResult"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"refetch")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," methods returned from the hooks that you use."))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can send a request to any link, using any of the methods (",(0,o.kt)("inlineCode",{parentName:"li"},"get, delete, head, options, post, put, patch"),")."),(0,o.kt)("li",{parentName:"ul"},"You can send comprehensive requests to resources with ",(0,o.kt)("inlineCode",{parentName:"li"},"Sort")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Filter")," parameters.")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's make a use case. Lets say that we need to verify that the header in the post resource is unique. For this, we have an end-point similar to the one below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts/unique-check?title=Foo bar"',title:'"https://api.fake-rest.refine.dev/posts/unique-check?title','bar"':!0},'{\n    "isAvailable": true\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\n// highlight-start\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n// highlight-end\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"url ",(0,o.kt)("div",{className:"required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"method ",(0,o.kt)("div",{className:"required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Method"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"delete"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"head"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"options"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"put"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"patch"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"Query Params"),(0,o.kt)("td",{parentName:"tr",align:null},"{ sort?: ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},"CrudSorting"),"; filters?: ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,o.kt)("inlineCode",{parentName:"a"},"CrudFilters")),"; payload?: {}; query?: {} }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery Options")),(0,o.kt)("td",{parentName:"tr",align:null},"object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,o.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Desription"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TData"),(0,o.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TError"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,o.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,o.kt)("td",{parentName:"tr",align:null},"unknown")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,o.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,o.kt)("td",{parentName:"tr",align:null},"unknown")))),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,o.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useQuery"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>")))))))}m.isMDXComponent=!0}}]);