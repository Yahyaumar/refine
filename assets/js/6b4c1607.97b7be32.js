"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/cardHeaderProps-22f99e0655ae10ff9ca38251cf36536f.png",i=n.p+"assets/images/actionButtonsUsageMui-03917176c17ce5dee5bf73b1a1951591.png",p={id:"show",title:"Show"},s=void 0,d={unversionedId:"api-reference/mui/components/basic-views/show",id:"api-reference/mui/components/basic-views/show",title:"Show",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page.",source:"@site/docs/api-reference/mui/components/basic-views/show.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/show",permalink:"/docs/api-reference/mui/components/basic-views/show",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/show.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1666206085,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"show",title:"Show"},sidebar:"someSidebar",previous:{title:"List",permalink:"/docs/api-reference/mui/components/basic-views/list"},next:{title:"Breadcrumb",permalink:"/docs/api-reference/mui/components/mui-breadcrumb"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canDelete</code> and <code>canEdit</code>",id:"candelete-and-canedit",level:3},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"<del><code>actionButtons</code></del>",id:"actionbuttons",level:3},{value:"<del><code>cardProps</code></del>",id:"cardprops",level:3},{value:"<del><code>cardHeaderProps</code></del>",id:"cardheaderprops",level:3},{value:"<del><code>cardContentProps</code></del>",id:"cardcontentprops",level:3},{value:"<del><code>cardActionsProps</code></del>",id:"cardactionsprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page."),(0,a.kt)("p",null,"We will show what ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," does using properties with examples."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"It allows adding title inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>"),' component. if you don\'t pass title props it uses the "Show" prefix and the singular resource name by default. For example, for the "posts" resource, it will be "Show post".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return <Show title="Custom Title">...</Show>;\n};\n')),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component in a custom page, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/app.tsx"',title:'"src/app.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { Show } from "@pankod/refine-mui";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// highlight-start\nconst CustomPage = () => {\n    return (\n        <Show resource="posts" recordItemId="postId">\n            ...\n        </Show>\n    );\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"candelete-and-canedit"},(0,a.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"canEdit")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," allows us to add the delete and edit buttons inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," property refine adds the buttons by default."),(0,a.kt)("p",null,"When clicked on, delete button executes the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete"},(0,a.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," and the edit button redirects the user to the record edit page."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton>"))," and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/edit-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<EditButton>"))," documentation for detailed usage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'import { usePermissions } from "@pankod/refine-core";\n// highlight-next-line\nimport { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Show\n            // highlight-next-line\n            canDelete={data === "admin"}\n            // highlight-next-line\n            canEdit={data === "editor" || data === "admin"}\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,a.kt)("h3",{id:"recorditemid"},(0,a.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL (when used on a custom page, modal or drawer)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'import { useState } from "react";\nimport { useShow } from "@pankod/refine-core";\n// highlight-next-line\nimport { Show, Dialog, ShowButton } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    const [visibleShowDialog, setVisibleShowDialog] = useState<boolean>(false);\n\n    const { queryResult, showId, setShowId } = useShow();\n    const { data, isLoading } = queryResult;\n\n    return (\n        <>\n            <ShowButton\n                size="small"\n                onClick={() => {\n                    setShowId(data?.data.id);\n                    setVisibleShowDialog(true);\n                }}\n            />\n            <Dialog\n                open={visibleShowDialog}\n                onClose={() => setVisibleShowDialog(false)}\n            >\n                // highlight-next-line\n                <Show recordItemId={showId} isLoading={isLoading}></Show>\n            </Dialog>\n        </>\n    );\n};\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information for ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/refresh-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<RefreshButton>"))," to work properly.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information for work properly, so if you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component in custom pages, you should pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," property.")),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If not specified, Refine will use the default data provider. If you have multiple data providers and want to use a different one, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { Show } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst PostShow = () => {\n    return <Show dataProviderName="other">...</Show>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            // highlight-start\n            dataProvider={{\n                default: dataProvider("https://api.fake-rest.refine.dev/"),\n                other: dataProvider("https://other-api.fake-rest.refine.dev/"),\n            }}\n            // highlight-end\n            resources={[{ name: "posts", show: PostShow }]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"goback"},(0,a.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,a.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"goBack")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\nimport { useNavigation } from "@pankod/refine-core";\nimport { MyBackButton } from "@components";\n\nexport const ShowPage: React.FC = () => {\n    const { goBack } = useNavigation();\n\n    return (\n        <Show\n            /* ... */\n            goBack={<MyBackButton onClick={() => goBack()} />}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"isloading"},(0,a.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,a.kt)("p",null,"To toggle the loading state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Show\n            /* ... */\n            isLoading={loading}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"breadcrumb"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,a.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            breadcrumb={null}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"wrapperprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,a.kt)("p",null,"If you want to customize the wrapper of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,a.kt)("p",null,"If you want to customize the header of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            headerProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"contentprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,a.kt)("p",null,"If you want to customize the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            contentProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Button } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"footerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Button } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"footerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardActions")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            /* ... */\n            footerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"actionbuttons"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"actionButtons"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtons")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," component. By default,The children of the ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," component shows nothing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'// highlight-next-line\nimport { Show, Button } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            actionButtons={\n                <>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button type="default">Custom Button 2</Button>\n                </>\n            }\n            // highlight-end\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i,alt:"actionButton Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,a.kt)("h3",{id:"cardheaderprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardHeaderProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'import { useShow } from "@pankod/refine-core";\n// highlight-next-line\nimport { Show, Typography, Stack } from "@pankod/refine-mui";\n\nexport const ShowPage: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n            // highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            // highlight-end\n        >\n            <Stack gap="10px">\n                <Typography fontWeight="bold">Id</Typography>\n                <Typography>{record?.id}</Typography>\n                <Typography fontWeight="bold">Title</Typography>\n                <Typography>{record?.title}</Typography>\n            </Stack>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:r,alt:"cardHeaderProps Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardcontentprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardContentProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,a.kt)("h3",{id:"cardactionsprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardActionsProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardActionsProps"),"."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(u,{module:"@pankod/refine-mui/Show","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","headerButtonProps-type":"[`BoxProps`](https://mui.com/material-ui/api/box/#props)","headerButtons-default":"[`ListButton`](https://refine.dev/docs/api-reference/mui/components/buttons/list-button/), [`EditButton`](https://refine.dev/docs/api-reference/mui/components/buttons/edit-button/), [`DeleteButton`](https://refine.dev/docs/api-reference/mui/components/buttons/delete-button/), [`RefreshButton`](https://refine.dev/docs/api-reference/mui/components/buttons/refresh-button/)","footerButtonProps-type":"[`CardActionsProps`](https://mui.com/material-ui/api/card-actions/#props)","breadcrumb-default":"[`<Breadcrumb/>`](/docs/api-reference/mui/components/mui-breadcrumb/)","goBack-default":"`<ArrowLeft />`","goBack-type":"`ReactNode`",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);