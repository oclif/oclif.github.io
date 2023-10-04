"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7006],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||a;return n?t.createElement(m,i(i({ref:r},d),{},{components:n})):t.createElement(m,i({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9854:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Error Handling"},c=void 0,s={unversionedId:"error_handling",id:"error_handling",title:"Error Handling",description:"oclif handles intentionally - and unintentionally - thrown errors in two places. First in the Command.catch method and then, finally, in the bin/run catch handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.",source:"@site/../docs/error_handling.md",sourceDirName:".",slug:"/error_handling",permalink:"/docs/error_handling",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/error_handling.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1696451636,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{title:"Error Handling"},sidebar:"docs",previous:{title:"Help Classes",permalink:"/docs/help_classes"},next:{title:"JSON",permalink:"/docs/json"}},d={},h=[{value:"Error Handling in the <code>catch</code> method",id:"error-handling-in-the-catch-method",level:2},{value:"bin/run <code>catch</code> handler",id:"binrun-catch-handler",level:2}],p={toc:h},u="wrapper";function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"oclif handles intentionally - and unintentionally - thrown errors in two places. First in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Command.catch")," method and then, finally, in the bin/run ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit."),(0,a.kt)("h2",{id:"error-handling-in-the-catch-method"},"Error Handling in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"catch")," method"),(0,a.kt)("p",null,"Every ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")," instance has a ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," method that is called when an error occurs throughout the course of a command run. This method handles the edge case of users asking for help or version output, if applicable, otherwise, it re-throws the error. You can extend or overwrite the ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," method in your command class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Command, flags} from '@oclif/core'\n\nexport default class Hello extends Command {\n  async catch(error) {\n    // do something or\n    // re-throw to be handled globally\n    throw error;\n  }\n}\n")),(0,a.kt)("p",null,"If this type of error handling is being implemented across multiple commands consider using a Custom Base Class (",(0,a.kt)("a",{parentName:"p",href:"https://oclif.io/docs/base_class#docsNav"},"https://oclif.io/docs/base_class#docsNav"),") for your commands and overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," method."),(0,a.kt)("h2",{id:"binrun-catch-handler"},"bin/run ",(0,a.kt)("inlineCode",{parentName:"h2"},"catch")," handler"),(0,a.kt)("p",null,"Every oclif CLI has a ./bin/run file that is the entry point of command invocation. Errors that occur in the CLI, including re-thrown errors from a Command, are caught here in the bin/run ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".catch(require('@oclif/core/handle'))\n")),(0,a.kt)("p",null,"This catch handler uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/errors/handle")," function to display (and cleanup, if necessary) the error to the user. This handler can be swapped for any function that receives an error argument."),(0,a.kt)("p",null,"If you chose to implement your own handler here, we still recommend you delegate finally to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/core/handle")," function for clean-up and exiting logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".catch((error) => {\n  const oclifHandler = require('@oclif/core/handle');\n  // do any extra work with error\n  return oclifHandler(error);\n})\n")))}m.isMDXComponent=!0}}]);