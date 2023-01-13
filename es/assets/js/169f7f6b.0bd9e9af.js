"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var n=a(7462),r=(a(7294),a(3905));const o=a.p+"assets/images/react_qa-cfd65cdd3036e7d29f8331eb90dd939a.png",i=a.p+"assets/images/react_performance-f12f465880e127377524ad31d67f80cf.png",s={sidebar_position:3},c="\ud83d\udfe1 LLMs that Reason and Act",l={unversionedId:"advanced_applications/react",id:"advanced_applications/react",title:"\ud83d\udfe1 LLMs that Reason and Act",description:"ReAct(@yao2022react)(reason, act) is a paradigm for enabling language models to solve complex",source:"@site/docs/advanced_applications/react.md",sourceDirName:"advanced_applications",slug:"/advanced_applications/react",permalink:"/es/docs/advanced_applications/react",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/advanced_applications/react.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 LLMs Using Tools",permalink:"/es/docs/advanced_applications/mrkl"},next:{title:"\ud83d\udfe1 Code as Reasoning",permalink:"/es/docs/advanced_applications/pal"}},p={},f=[{value:"Results",id:"results",level:2}],d={toc:f};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-llms-that-reason-and-act"},"\ud83d\udfe1 LLMs that Reason and Act"),(0,r.kt)("p",null,"ReAct",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"(reason, act) is a paradigm for enabling language models to solve complex\ntasks using natural language reasoning. ReAct is designed for tasks in which the LLM is\nallowed to perform certain actions. For example, as in a MRKL system, a LLM may be able\nto interact with external APIs to retrieve information. When asked a question, the LLM\ncould choose to perform an action to retrieve information, and then answer the question\nbased on the retrieved information."),(0,r.kt)("p",null,"ReAct Systems can be thought of as MRKL systems, with the added ability to ",(0,r.kt)("strong",{parentName:"p"},"reason\nabout")," the actions they can perform."),(0,r.kt)("p",null,"Examine the following image. The question in the top box is sourced from HotPotQA",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),",\na question answering dataset that requires complex reasoning. ReAct is able to answer the question by\nfirst reasoning about the question (Thought 1), and then performing an action (Act 1) to send a query\nto Google. It then receives an observation (Obs 1), and continues with this thought, action, observation\nloop until it reaches a conclusion (Act 3). "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:o,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"ReAct System (Yao et al.)"),(0,r.kt)("p",null,"Readers with knowledge of reinforcement learning may recognize this process as similar to the classic\nRL loop of state, action, reward, state,... ReAct provides some formalization for\nthis in their paper."),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("p",null,"Google used the PaLM",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," LLM in experiments with ReAct.\nComparisons to standard prompting (question only), CoT, and other configurations\nshow that ReAct's performance is promising for complex reasoning tasks. Google\nalso performs studies on the fever dataset",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),", which covers\nfact extraction and verification. "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"ReAct Results (Yao et al.)"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). ReAct: Synergizing Reasoning and Acting in Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Yang, Z., Qi, P., Zhang, S., Bengio, Y., Cohen, W. W., Salakhutdinov, R., & Manning, C. D. (2018). HotpotQA: A Dataset for Diverse, Explainable Multi-hop Question Answering.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Thorne, J., Vlachos, A., Christodoulopoulos, C., & Mittal, A. (2018). FEVER: a large-scale dataset for Fact Extraction and VERification.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);