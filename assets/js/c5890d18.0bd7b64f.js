"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?i.createElement(h,l(l({ref:t},m),{},{components:n})):i.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Themes"},s=void 0,p={unversionedId:"themes",id:"themes",title:"Themes",description:"oclif supports themes that users can either define for themselves or select from a variety of themes you ship with your CLI.",source:"@site/../docs/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/themes",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/themes.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1710771021,formattedLastUpdatedAt:"Mar 18, 2024",frontMatter:{title:"Themes"},sidebar:"docs",previous:{title:"ESM",permalink:"/docs/esm"},next:{title:"Examples",permalink:"/docs/examples"}},m={},u=[{value:"theme.json",id:"themejson",level:2},{value:"Supported Theme Properties",id:"supported-theme-properties",level:3},{value:"Disabling Themes",id:"disabling-themes",level:2},{value:"Extending Themes",id:"extending-themes",level:2}],d={toc:u},c="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"oclif supports themes that users can either define for themselves or select from a variety of themes you ship with your CLI."),(0,r.kt)("p",null,"By default, the theme only applies to help output but you can extend the theme for your own purposes if you want. See ",(0,r.kt)("a",{parentName:"p",href:"#extending-themes"},"Extending Themes")," section below."),(0,r.kt)("h2",{id:"themejson"},"theme.json"),(0,r.kt)("p",null,"By default oclif will read themes from ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/<CLI>/theme.json"),"."),(0,r.kt)("p",null,"This file takes the following shape:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bin": "white",\n  "command": "cyan",\n  "commandSummary": "white",\n  "dollarSign": "white",\n  "flag": "white",\n  "flagDefaultValue": "blue",\n  "flagOptions": "white",\n  "flagRequired": "red",\n  "flagSeparator": "white",\n  "sectionDescription": "white",\n  "sectionHeader": "underline",\n  "topic": "white",\n  "version": "white"\n}\n')),(0,r.kt)("h3",{id:"supported-theme-properties"},"Supported Theme Properties"),(0,r.kt)("p",null,"As mentioned, the theme only applies to help output by default. The following properties can be used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias"),": the aliases under the ",(0,r.kt)("inlineCode",{parentName:"li"},"ALIASES")," section"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin"),": the name of your CLI's executable (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"sf"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"heroku"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"command"),": the command's name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commandSummary"),": the command's summary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dollarSign"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"$")," printed before ",(0,r.kt)("inlineCode",{parentName:"li"},"examples")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flag"),": flag names and short characters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flagDefaultValue"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"[default: X]")," shown on flags with a default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flagOptions"),": the valid options for a flag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flagRequired"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"(required)")," that shows on required flags"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flagSeparator"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},",")," that separates the short char and long flag names (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"-f, --foo"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sectionDescription"),": the text inside of each section (e.g. everything under ",(0,r.kt)("inlineCode",{parentName:"li"},"DESCRIPTION"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sectionHeader"),": the section header (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"DESCRIPTION"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic"),": the topics under the ",(0,r.kt)("inlineCode",{parentName:"li"},"TOPICS")," section"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"VERSION")," section that shows under the root help (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"sf --help"),")")),(0,r.kt)("p",null,"The values for each of these must be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a hex code, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,r.kt)("li",{parentName:"ul"},"a rgb, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"rgb(255,255,255)")),(0,r.kt)("li",{parentName:"ul"},"a style supported by ",(0,r.kt)("inlineCode",{parentName:"li"},"chalk")," (see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chalk/chalk/#styles"},"https://github.com/chalk/chalk/#styles"),")")),(0,r.kt)("p",null,"Any invalid values will be ignored."),(0,r.kt)("h2",{id:"disabling-themes"},"Disabling Themes"),(0,r.kt)("p",null,"Themes can be disabled by using ",(0,r.kt)("inlineCode",{parentName:"p"},"<CLI>_DISABLE_THEME")," environment variable."),(0,r.kt)("h2",{id:"extending-themes"},"Extending Themes"),(0,r.kt)("p",null,"By default oclif only uses the theme for the help output but you can use the theme for other purposes if you desire. For instance maybe you'd like to log colorized ",(0,r.kt)("inlineCode",{parentName:"p"},"info:")," logs to the user during a command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, ux} from '@oclif/core'\n\nexport default class Hello extends Command {\n  public async run(): Promise<void> {\n    this.info('starting process!')\n    // do some stuff...\n    this.info('still making progress!')\n    // do some more stuff...\n    this.info('process complete!')\n  }\n\n  public info(msg: string): void {\n    this.log(ux.colorize(this.config.theme?.info, 'info:'), msg)\n  }\n}\n")))}h.isMDXComponent=!0}}]);