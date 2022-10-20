"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a=n.p+"assets/images/export-mui-b7ee85fc91bee96bfa138890120913a2.png",i={id:"export-button",title:"Export"},l=void 0,p={unversionedId:"api-reference/mui/components/buttons/export-button",id:"api-reference/mui/components/buttons/export-button",title:"Export",description:'` is a Material UI ` with a default export icon and a default text with "Export". It only has presentational value.',source:"@site/docs/api-reference/mui/components/buttons/export.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/export-button",permalink:"/docs/api-reference/mui/components/buttons/export-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/export.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1666206085,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"export-button",title:"Export"},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/mui/components/buttons/edit-button"},next:{title:"Import",permalink:"/docs/api-reference/mui/components/buttons/import-button"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ExportButton>")," is a Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},(0,o.kt)("inlineCode",{parentName:"a"},"<LoadingButton>")),' with a default export icon and a default text with "Export". It only has presentational value.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},"Refer to the for more detailed information about ",(0,o.kt)("inlineCode",{parentName:"a"},"useExport"),". ","\u2192")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use it like any other Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>")),". You can use it with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},"useExport"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/list.tsx"',title:'"/src/pages/posts/list.tsx"'},'// highlight-next-line\nimport { useExport, useTable } from "@pankod/refine-core";\nimport {\n    ExportButton,\n    List,\n    Table,\n    TableBody,\n    TableCell,\n    TableHead,\n    TableRow,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { triggerExport, isLoading: exportLoading } = useExport<IPost>();\n\n    return (\n        <List\n            cardHeaderProps={{\n                action: (\n                    // highlight-start\n                    <ExportButton\n                        onClick={triggerExport}\n                        loading={exportLoading}\n                    />\n                    // highlight-end\n                ),\n            }}\n        >\n            <Table>\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {tableQueryResult.data?.data.map((row) => (\n                        <TableRow key={row.title}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("p",null,"It looks like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:a,alt:"Default export button"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ExportButton } from "@pankod/refine-mui";\n\nexport const MyRefreshComponent = () => {\n    return <ExportButton hideText />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(u,{module:"@pankod/refine-mui/ExportButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},"LoadingButton"),".")))}f.isMDXComponent=!0}}]);