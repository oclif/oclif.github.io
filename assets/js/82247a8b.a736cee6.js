"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Configuration"},s=void 0,p={unversionedId:"config",id:"config",title:"Configuration",description:"Inside a command, this.config provides useful properties you can use in your command. Here are a list of its methods and properties:",source:"@site/../docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/config.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1710771021,formattedLastUpdatedAt:"Mar 18, 2024",frontMatter:{title:"Configuration"},sidebar:"docs",previous:{title:"Command Flags",permalink:"/docs/flags"},next:{title:"Topics",permalink:"/docs/topics"}},m={},c=[{value:"Custom User Configuration",id:"custom-user-configuration",level:2}],u={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Inside a command, ",(0,i.kt)("inlineCode",{parentName:"p"},"this.config")," provides useful properties you can use in your command. Here are a list of its methods and properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," - name of CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"version")," - Version of the CLI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pjson")," - Parsed and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/npm/normalize-package-data"},"normalized")," CLI ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bin")," - CLI bin name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"binAliases")," - An array of strings that will all execute the CLI's bin. This is useful for backwards compatibility and for CLIs built with installers or tarballs. For npm-installed CLIs, change the ",(0,i.kt)("inlineCode",{parentName:"li"},"bin")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," instead. See ",(0,i.kt)("a",{parentName:"li",href:"https://oclif.io/docs/aliases"},"Bin Aliases")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nsisCustomization")," - A path to a .nsis file that's used to customize the installer for Windows. See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/oclif/nsis-custom"},"nsis-custom")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cacheDir")," - CLI cache directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"macOS: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/mycli")),(0,i.kt)("li",{parentName:"ul"},"Unix: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/mycli")),(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\mycli")),(0,i.kt)("li",{parentName:"ul"},"Can be overridden with ",(0,i.kt)("inlineCode",{parentName:"li"},"XDG_CACHE_HOME")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"configDir")," - CLI config directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unix: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/mycli")),(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\mycli")),(0,i.kt)("li",{parentName:"ul"},"Can be overridden with ",(0,i.kt)("inlineCode",{parentName:"li"},"XDG_CONFIG_HOME")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dataDir")," - CLI data directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unix: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.data/mycli")),(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\mycli")),(0,i.kt)("li",{parentName:"ul"},"Can be overridden with ",(0,i.kt)("inlineCode",{parentName:"li"},"XDG_DATA_HOME")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dirname")," - dirname used with ",(0,i.kt)("inlineCode",{parentName:"li"},"cacheDir|configDir|dataDir"),". Can be overridden in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"errlog")," - path to error log inside of ",(0,i.kt)("inlineCode",{parentName:"li"},"cacheDir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"home")," - user home directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"platform")," - operating system ",(0,i.kt)("inlineCode",{parentName:"li"},"darwin|linux|win32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"arch")," - process architecture ",(0,i.kt)("inlineCode",{parentName:"li"},"x64|x86")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shell")," - current shell in use"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"userAgent")," - user-agent intended for http calls. example: ",(0,i.kt)("inlineCode",{parentName:"li"},"mycli/1.2.3 (darwin-x64) node-9.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"windows")," - boolean"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"topicSeparator")," - the separator to use between topics - only colons (",(0,i.kt)("inlineCode",{parentName:"li"},'":"'),") and spaces (",(0,i.kt)("inlineCode",{parentName:"li"},'" "'),") are supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"debug")," - set to 1 if debug is enabled (with ",(0,i.kt)("inlineCode",{parentName:"li"},"${BIN}_DEBUG=1")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG=$BIN"),"). In the future this may be used for multiple debug levels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"npmRegistry")," - current npm registry to use with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-plugins"},"plugins")," plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"plugins")," - loaded plugins"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"commands")," - all commands in CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default")," - default cli command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"topics")," - all topics in CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"commandIDs")," - string IDs of all commands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"async runHook(event, opts)")," - trigger a hook")),(0,i.kt)("h2",{id:"custom-user-configuration"},"Custom User Configuration"),(0,i.kt)("p",null,"Often it's useful to have a custom configuration for your users. One way to implement this is to read a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file from the CLI's config directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command} from '@oclif/core'\nimport * as fs from 'fs-extra'\nimport * as path from 'path'\n\nexport class extends Command {\n  async run() {\n    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'))\n\n    this.log('User config:')\n    console.dir(userConfig)\n  }\n}\n")),(0,i.kt)("p",null,"To share this logic between different commands, use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/base_class"},"base class"),"."))}f.isMDXComponent=!0}}]);