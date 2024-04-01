"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5069],{1588:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(4848),t=s(8453);const o={title:"Themes",description:"Make help output pretty"},h=void 0,r={id:"themes",title:"Themes",description:"Make help output pretty",source:"@site/../docs/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/themes",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/themes.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1712002994e3,frontMatter:{title:"Themes",description:"Make help output pretty"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"User Experience",permalink:"/docs/user_experience"}},l={},c=[{value:"theme.json",id:"themejson",level:2},{value:"Supported Theme Properties",id:"supported-theme-properties",level:3},{value:"Shipping a Theme",id:"shipping-a-theme",level:2},{value:"Overriding Themes",id:"overriding-themes",level:2},{value:"Disabling Themes",id:"disabling-themes",level:2},{value:"Extending Themes",id:"extending-themes",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"oclif supports themes that you can ship with your CLI, which users can then override if they choose."}),"\n",(0,i.jsxs)(n.p,{children:["By default, the theme only applies to help output but you can extend the theme for your own purposes if you want. See ",(0,i.jsx)(n.a,{href:"#extending-themes",children:"Extending Themes"})," section below."]}),"\n",(0,i.jsx)(n.h2,{id:"themejson",children:"theme.json"}),"\n",(0,i.jsx)(n.p,{children:"The theme file takes the following shape:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "bin": "white",\n  "command": "cyan",\n  "commandSummary": "white",\n  "dollarSign": "white",\n  "flag": "white",\n  "flagDefaultValue": "blue",\n  "flagOptions": "white",\n  "flagRequired": "red",\n  "flagSeparator": "white",\n  "sectionDescription": "white",\n  "sectionHeader": "underline",\n  "topic": "white",\n  "version": "white"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"supported-theme-properties",children:"Supported Theme Properties"}),"\n",(0,i.jsx)(n.p,{children:"As mentioned, the theme only applies to help output by default. The following properties can be used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alias"}),": the aliases under the ",(0,i.jsx)(n.code,{children:"ALIASES"})," section"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin"}),": the name of your CLI's executable (e.g. ",(0,i.jsx)(n.code,{children:"sf"}),", ",(0,i.jsx)(n.code,{children:"heroku"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"command"}),": the command's name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"commandSummary"}),": the command's summary"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dollarSign"}),": the ",(0,i.jsx)(n.code,{children:"$"})," printed before ",(0,i.jsx)(n.code,{children:"examples"})," and ",(0,i.jsx)(n.code,{children:"usage"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flag"}),": flag names and short characters"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flagDefaultValue"}),": the ",(0,i.jsx)(n.code,{children:"[default: X]"})," shown on flags with a default"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flagOptions"}),": the valid options for a flag"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flagRequired"}),": the ",(0,i.jsx)(n.code,{children:"(required)"})," that shows on required flags"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flagSeparator"}),": the ",(0,i.jsx)(n.code,{children:","})," that separates the short char and long flag names (e.g. ",(0,i.jsx)(n.code,{children:"-f, --foo"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sectionDescription"}),": the text inside of each section (e.g. everything under ",(0,i.jsx)(n.code,{children:"DESCRIPTION"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sectionHeader"}),": the section header (e.g. ",(0,i.jsx)(n.code,{children:"DESCRIPTION"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"topic"}),": the topics under the ",(0,i.jsx)(n.code,{children:"TOPICS"})," section"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"}),": the ",(0,i.jsx)(n.code,{children:"VERSION"})," section that shows under the root help (e.g. ",(0,i.jsx)(n.code,{children:"sf --help"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The values for each of these must be one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a hex code, e.g. ",(0,i.jsx)(n.code,{children:"#FF0000"})]}),"\n",(0,i.jsxs)(n.li,{children:["a rgb, e.g. ",(0,i.jsx)(n.code,{children:"rgb(255,255,255)"})]}),"\n",(0,i.jsxs)(n.li,{children:["a style supported by ",(0,i.jsx)(n.code,{children:"chalk"})," (see ",(0,i.jsx)(n.a,{href:"https://github.com/chalk/chalk/#styles",children:"https://github.com/chalk/chalk/#styles"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Any invalid values will be ignored."}),"\n",(0,i.jsx)(n.h2,{id:"shipping-a-theme",children:"Shipping a Theme"}),"\n",(0,i.jsx)(n.p,{children:"Shipping a theme with your CLI is very simple."}),"\n",(0,i.jsx)(n.p,{children:"First you need to create a new theme file (see above) in your CLI. Then, in your package.json, you just need to tell oclif where to find that file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "files": [\n    "/theme.json",\n    "/oclif.manifest.json",\n    "/dist",\n  ],\n  "oclif": {\n    "theme": "theme.json"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It's important that you also add the file to the list of ",(0,i.jsx)(n.code,{children:"files"})," so that it will be packed with your CLI whenever you publish to npm or when pack your CLI using ",(0,i.jsx)(n.code,{children:"oclif pack"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"overriding-themes",children:"Overriding Themes"}),"\n",(0,i.jsxs)(n.p,{children:["If you've shipped a theme with your CLI, users can then override the theme by creating their own ",(0,i.jsx)(n.code,{children:"theme.json"})," in the config directory of your CLI (",(0,i.jsx)(n.code,{children:"~/.config/<CLI>"})," on unix, ",(0,i.jsx)(n.code,{children:"%LOCALAPPDATA%\\<CLI>"})," on windows.)"]}),"\n",(0,i.jsxs)(n.p,{children:["Users can specify one or all of the theme properties in their own ",(0,i.jsx)(n.code,{children:"theme.json"}),", meaning that they can choose to only override a single property of the default theme."]}),"\n",(0,i.jsx)(n.h2,{id:"disabling-themes",children:"Disabling Themes"}),"\n",(0,i.jsxs)(n.p,{children:["Themes can be disabled by using ",(0,i.jsx)(n.code,{children:"<CLI>_DISABLE_THEME"})," environment variable."]}),"\n",(0,i.jsx)(n.h2,{id:"extending-themes",children:"Extending Themes"}),"\n",(0,i.jsxs)(n.p,{children:["By default oclif only uses the theme for the help output but you can use the theme for other purposes if you desire. For instance maybe you'd like to log colorized ",(0,i.jsx)(n.code,{children:"info:"})," logs to the user during a command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import {Command, ux} from '@oclif/core'\n\nexport default class Hello extends Command {\n  public async run(): Promise<void> {\n    this.info('starting process!')\n    // do some stuff...\n    this.info('still making progress!')\n    // do some more stuff...\n    this.info('process complete!')\n  }\n\n  public info(msg: string): void {\n    this.log(ux.colorize(this.config.theme?.info, 'info:'), msg)\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>h,x:()=>r});var i=s(6540);const t={},o=i.createContext(t);function h(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);