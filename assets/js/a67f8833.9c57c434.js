"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30186],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(63556),o=["components"],d={id:"useSimpleList",title:"useSimpleList"},s=void 0,p={unversionedId:"ui-frameworks/antd/hooks/list/useSimpleList",id:"ui-frameworks/antd/hooks/list/useSimpleList",isDocsHomePage:!1,title:"useSimpleList",description:"By using useSimpleList you get props for your records from API in accordance with Ant Design `` component. All features such as pagination, sorting come out of the box.",source:"@site/docs/ui-frameworks/antd/hooks/list/useSimpleList.md",sourceDirName:"ui-frameworks/antd/hooks/list",slug:"/ui-frameworks/antd/hooks/list/useSimpleList",permalink:"/docs/ui-frameworks/antd/hooks/list/useSimpleList",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/hooks/list/useSimpleList.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1654096549,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"useSimpleList",title:"useSimpleList"},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/ui-frameworks/antd/hooks/import/useImport"},next:{title:"useMenu",permalink:"/docs/ui-frameworks/antd/hooks/resource/useMenu"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"useSimpleList")," you get props for your records from API in accordance with Ant Design ",(0,i.kt)("inlineCode",{parentName:"p"},"<List>")," component. All features such as pagination, sorting come out of the box."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/list/#header"},"Refer to Ant Design docs for ",(0,i.kt)("inlineCode",{parentName:"a"},"<List>")," component information ","\u2192")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's assume that the data we will show in the table comes from the endpoint as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 182,\n        "title": "A aspernatur rerum molestiae.",\n        "content": "Natus molestias incidunt voluptatibus. Libero delectus facilis...",\n        "hit": 992123,\n        "category": {\n            "id": 1,\n            "title": "Navigating"\n        }\n    },\n    {\n        "id": 989,\n        "title": "A molestiae vel voluptatem enim.",\n        "content": "Voluptas consequatur quia beatae. Ipsa est qui culpa deleniti...",\n        "hit": 29876,\n        "category": {\n            "id": 2,\n            "title": "Empowering"\n        }\n    }\n]\n')),(0,i.kt)("p",null,"If we want to make a listing page where we show the ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"category.title")," values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    PageHeader,\n    Typography,\n    useMany,\n    AntdList,\n    useSimpleList,\n    NumberField,\n    Space,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { Text } = Typography;\n\n// highlight-start\n    const { listProps } = useSimpleList<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n        pagination: {\n            pageSize: 6,\n        },\n    });\n// highlight-end\n\n    const categoryIds =\n        listProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n// highlight-start\n    const renderItem = (item: IPost) => {\n        const { title, hit, content } = item;\n\n        const categoryTitle = data?.data.find(\n            (category: ICategory) => category.id === item.category.id,\n        )?.title;\n\n        return (\n            <AntdList.Item\n                actions={[\n                    <Space key={item.id} direction="vertical" align="end">\n                        <NumberField\n                            value={hit}\n                            options={{\n                                // @ts-ignore\n                                notation: "compact",\n                            }}\n                        />\n                        <Text>{categoryTitle}</Text>\n                    </Space>,\n                ]}\n            >\n                <AntdList.Item.Meta title={title} description={content} />\n            </AntdList.Item>\n        );\n    };\n// highlight-end\n\n    return (\n        <PageHeader ghost={false} title="Posts">\n// highlight-next-line\n            <AntdList {...listProps} renderItem={renderItem} />\n        </PageHeader>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    hit: number;\n    category: ICategory;\n}\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"AntdList.Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AntdList.Item.Meta")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"<List>")," component from ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/list/#API"},"Ant Design")))),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"use simple list"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resource"),(0,i.kt)("td",{parentName:"tr",align:null},"The resource to list the data"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permanentFilter"),(0,i.kt)("td",{parentName:"tr",align:null},"Default and unchangeable filter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permanentSorter"),(0,i.kt)("td",{parentName:"tr",align:null},"Default and unchangeable sorter state"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialSorter"),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to sort records by speficified order and field"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialFilter"),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to filter records by speficified order and field"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"listProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,i.kt)("inlineCode",{parentName:"td"},"<List>")," props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/list/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"listProps"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"syncWithLocation"),(0,i.kt)("td",{parentName:"tr",align:null},"Sortings, filters, page index and records shown per page are tracked by browser history"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Value set in ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/components/refine-config#syncwithlocation"},"Refine"),". If a custom resource is given, it will be ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,i.kt)("td",{parentName:"tr",align:null},"When the search form is submitted, it creates the 'CrudFilters' object. See here to create a ",(0,i.kt)("a",{parentName:"td",href:"/docs/guides-and-concepts/search/list-search"},"search form")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<{ data: TData[] }, TError>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSearchVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Antd form values"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"searchFormProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant design Form props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"Form")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"listProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant design List props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/list/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"List")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filters"),(0,i.kt)("td",{parentName:"tr",align:null},"Current filters state"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters")))))))}c.isMDXComponent=!0},63556:function(e,t,n){t.Z=n.p+"assets/images/useSimpleList-de42a2336346aef2e2203189aa080298.png"}}]);