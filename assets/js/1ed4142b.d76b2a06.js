"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Just-in-Time Plugin Installation"},s=void 0,u={unversionedId:"jit_plugins",id:"jit_plugins",title:"Just-in-Time Plugin Installation",description:"Sometimes you might want to have a plugin that isn't bundled in your CLI but gets installed the first time it's executed by the user - we call this just-in-time plugin installation, or JIT for short. This can be useful if you need to reduce the package size of your CLI while still allowing users access to all the plugins.",source:"@site/../docs/jit_plugins.md",sourceDirName:".",slug:"/jit_plugins",permalink:"/docs/jit_plugins",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/jit_plugins.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1700511571,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{title:"Just-in-Time Plugin Installation"},sidebar:"docs",previous:{title:"Running Commands Programmatically",permalink:"/docs/running_programmatically"},next:{title:"Aliases",permalink:"/docs/aliases"}},p={},c=[],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes you might want to have a plugin that isn't bundled in your CLI but gets installed the first time it's executed by the user - we call this just-in-time plugin installation, or JIT for short. This can be useful if you need to reduce the package size of your CLI while still allowing users access to all the plugins."),(0,i.kt)("p",null,"To use this feature you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"jitPlugins")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"oclif")," section of your package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"oclif": {\n  "jitPlugins": {\n    "my-plugin": "^1.2.3",\n    "another-plugin": "^1.2.3",\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that your build process includes generating a manifest using ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif manifest"),". The manifest will include the information about all the commands owned by JIT plugins which allows users to run ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," on those commands without having them installed yet. ",(0,i.kt)("strong",{parentName:"p"},"If the generated manifest doesn't get packed with your CLI, then the feature will not work."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"jit_plugin_not_installed")," hook."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@oclif/core")," attempts to be UX-agnostic, meaning that we don't want to impose any particular user experience on you. Any time a user experience is required we utilize hooks so that you can design the exact user experience you want your users to have."),(0,i.kt)("p",null,"In the case of JIT plugin installation, there are many possible user experiences that you might want - maybe you want to prompt the user for confirmation first, or maybe you want to log a specific message, etc..."),(0,i.kt)("p",null,"Here's an example of how you might implement the hook,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Hook, CLIError, ux } from '@oclif/core';\n\nconst hook: Hook<'jit_plugin_not_installed'> = async function (opts) {\n  try {\n    const answer = await ux.confirm(`${opts.command.pluginName} not installed. Would you like to install?`)\n    if (answer === 'y') {\n      await opts.config.runCommand('plugins:install', [`${opts.command.pluginName}@${opts.pluginVersion}`]);\n    }\n  } catch (error) {\n    throw new CLIError(`Could not install ${opts.command.pluginName}`, 'JitPluginInstallError');\n  }\n};\n\nexport default hook;\n\n")))}f.isMDXComponent=!0}}]);