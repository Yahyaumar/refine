"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8685],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},84770:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],d={id:"useDataProvider",title:"useDataProvider"},l=void 0,p={unversionedId:"core/hooks/data/useDataProvider",id:"core/hooks/data/useDataProvider",isDocsHomePage:!1,title:"useDataProvider",description:"useDataProvider lets you access the dataProvider that was configured in `` component.",source:"@site/docs/core/hooks/data/useDataProvider.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useDataProvider",permalink:"/docs/core/hooks/data/useDataProvider",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useDataProvider.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654096549,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"useDataProvider",title:"useDataProvider"},sidebar:"someSidebar",previous:{title:"useCustom",permalink:"/docs/core/hooks/data/useCustom"},next:{title:"useDelete",permalink:"/docs/core/hooks/data/useDelete"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3}],level:2}],c={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useDataProvider")," lets you access the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," that was configured in ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.kt)("p",null,"This hook is useful when you need to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},"Data Provider")," from a child component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's say that we have a data provider named ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," and second data provider named ",(0,o.kt)("inlineCode",{parentName:"p"},"second"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n\nconst App: React.FC = () => {\n\n    return (\n        <Refine\n            dataProvider={{\n                // highlight-start\n                default:  dataProvider("API_URL"),\n                second: dataProvider("SECOND_API_URL"),\n                // highlight-end\n                ...\n            }}\n        />\n    );\n};\n\nexport default App;\n\n')),(0,o.kt)("p",null,"Now we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," data provider from a child component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    // highlight-next-line\n    useDataProvider\n} from "@pankod/refine-core";\n\n// highlight-start\nconst dataProvider = useDataProvider();\n\nconst defaultDataProvider= dataProvider(); // return default data provider\nconst secondDataProvider= dataProvider("second"); // return second data provider\n// highlight-end\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,o.kt)("inlineCode",{parentName:"td"},"data provider")," you want to access"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"default"))))),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Provider"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"Data Provider")))))))}s.isMDXComponent=!0}}]);