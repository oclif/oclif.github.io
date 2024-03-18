"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),c=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(m.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Flexible Taxonomy"},m=void 0,c={unversionedId:"flexible_taxonomy",id:"flexible_taxonomy",title:"Flexible Taxonomy",description:"If you'd like for your customers to execute commands without adhereing to the defined command taxonomy, you can enable flexibleTaxonomy and add a hook to the oclif section of your package.json:",source:"@site/../docs/flexible_taxonomy.md",sourceDirName:".",slug:"/flexible_taxonomy",permalink:"/docs/flexible_taxonomy",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/flexible_taxonomy.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1710771021,formattedLastUpdatedAt:"Mar 18, 2024",frontMatter:{title:"Flexible Taxonomy"},sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/debugging"},next:{title:"Global Flags",permalink:"/docs/global_flags"}},p={},s=[{value:"Hook Implementation",id:"hook-implementation",level:3}],d={toc:s},u="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you'd like for your customers to execute commands without adhereing to the defined command taxonomy, you can enable ",(0,a.kt)("inlineCode",{parentName:"p"},"flexibleTaxonomy")," and add a hook to the ",(0,a.kt)("inlineCode",{parentName:"p"},"oclif")," section of your package.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "oclif": {\n    "flexibleTaxonomy": true,\n    "hooks": {\n      "command_incomplete": "./dist/hooks/command_incomplete.js"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"There are two main benefits to enabling flexible taxonomy:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It makes your CLI more user-friendly. For example, you might have a command, ",(0,a.kt)("inlineCode",{parentName:"li"},"my-cli foobars:list"),". If a user mistakenly enters ",(0,a.kt)("inlineCode",{parentName:"li"},"my-cli list:foobars")," then oclif will automatically know that it should execute ",(0,a.kt)("inlineCode",{parentName:"li"},"foobars:list")," instead of throwing an error."),(0,a.kt)("li",{parentName:"ol"},"It gives you the opportunity to prompt a user for the right command if they only provide part of a command. This makes individual commands more discoverable, especially if you have a large number of commands. See ",(0,a.kt)("a",{parentName:"li",href:"#hook-implementation"},"Hook Implementation")," for more details.")),(0,a.kt)("h3",{id:"hook-implementation"},"Hook Implementation"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"flexibleTaxonomy")," is enabled, oclif will run the ",(0,a.kt)("inlineCode",{parentName:"p"},"command_incomplete")," hook anytime a user enters an incomplete command (e.g. the command is ",(0,a.kt)("inlineCode",{parentName:"p"},"one:two:three")," but they only entered ",(0,a.kt)("inlineCode",{parentName:"p"},"two"),"). This hook gives you the opportunity to create an interactive user experience."),(0,a.kt)("p",null,"This example shows how you can use the ",(0,a.kt)("a",{parentName:"p",href:"#https://www.npmjs.com/package/inquirer"},"inquirer")," package to prompt the user for which command they would like to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Hook, toConfiguredId, toStandardizedId } from "@oclif/core";\nimport { prompt } from "inquirer";\n\nconst hook: Hook.CommandIncomplete = async function ({\n  config,\n  matches,\n  argv,\n}) {\n  const { command } = await prompt<{ command: string }>([\n    {\n      name: "command",\n      type: "list",\n      message: "Which of these commands would you like to run?",\n      choices: matches.map((p) => toConfiguredId(p.id, config)),\n    },\n  ]);\n\n  if (argv.includes("--help") || argv.includes("-h")) {\n    return config.runCommand("help", [toStandardizedId(command, config)]);\n  }\n\n  return config.runCommand(toStandardizedId(command, config), argv);\n};\n\nexport default hook;\n')),(0,a.kt)("p",null,"This is the prompt that the user would see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ my-cli list\n? Which of these commands did you mean (Use arrow keys)\n\u276f foobars list\n  config list\n  env list\n")))}f.isMDXComponent=!0}}]);