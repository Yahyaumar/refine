"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"useCan",title:"useCan",siderbar_label:"useCan"},s=void 0,p={unversionedId:"api-references/hooks/accessControl/useCan",id:"version-2.xx.xx/api-references/hooks/accessControl/useCan",isDocsHomePage:!1,title:"useCan",description:"Usage",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/accessControl/useCan.md",sourceDirName:"api-references/hooks/accessControl",slug:"/api-references/hooks/accessControl/useCan",permalink:"/docs/2.xx.xx/api-references/hooks/accessControl/useCan",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/accessControl/useCan.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654096549,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"useCan",title:"useCan",siderbar_label:"useCan"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"usePermissions",permalink:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},next:{title:"useSubscription",permalink:"/docs/2.xx.xx/api-references/hooks/live/useSubscription"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," as the query function for ",(0,o.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"queryOptions")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,o.kt)("strong",{parentName:"p"},"refine")," uses react-query it can be easily done configuring ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"required-block"},(0,o.kt)("div",null,"resource")," ",(0,o.kt)("div",{className:" required"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"action ",(0,o.kt)("div",{className:"required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Intenden action on resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"Parameters associated with the resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"{ data: CanReturnType; },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"TError>")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Desription"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#canreturntype"},"CanReturnType")),(0,o.kt)("td",{parentName:"tr",align:null},"Result data of the query ",(0,o.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,o.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: CanReturnType; }>")))))))}d.isMDXComponent=!0}}]);