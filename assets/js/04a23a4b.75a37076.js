"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a=n.p+"assets/images/edit-mui-999d669862495fec0126eaee4868bbac.png",i={id:"edit-button",title:"Edit"},l=void 0,s={unversionedId:"api-reference/mui/components/buttons/edit-button",id:"api-reference/mui/components/buttons/edit-button",title:"Edit",description:"` uses Material UI  component. It uses the edit method from useNavigation` under the hood. It can be useful to redirect the app to the edit page route of resource.",source:"@site/docs/api-reference/mui/components/buttons/edit.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/edit-button",permalink:"/docs/api-reference/mui/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1666206137,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"edit-button",title:"Edit"},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/api-reference/mui/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/api-reference/mui/components/buttons/export-button"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the edit page route of resource."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    EditButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                // highlight-next-line\n                                <EditButton recordItemId={row.id} />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("p",null,"Will look like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:a,alt:"Default edit button"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"It is used to redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," defined by the name property of resource object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyEditComponent = () => {\n    return <EditButton resourceNameOrRouteName="posts" recordItemId="2" />;\n};\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/edit/2"),"."),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyEditComponent = () => {\n    return <EditButton hideText />;\n};\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n    return <EditButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(d,{module:"@pankod/refine-mui/EditButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),".")))}f.isMDXComponent=!0}}]);