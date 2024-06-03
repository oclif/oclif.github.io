"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1777],{1098:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=o(4848),s=o(8453);const r={title:"Introduction"},t=void 0,c={id:"introduction",title:"Introduction",description:"oclif is a framework for building command-line interfaces (CLIs) using Node.js. You can use it like a simple flag parser, but it's capable of much more. It's designed to be extensible so that you can easily add plugins, such as the update warning plugin, or build your own for users to install at runtime.",source:"@site/../docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1717441424e3,frontMatter:{title:"Introduction"},sidebar:"docs",next:{title:"Features",permalink:"/docs/features"}},d={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Create an oclif Project from Scratch",id:"create-an-oclif-project-from-scratch",level:2},{value:"Initialize oclif in an Existing Project",id:"initialize-oclif-in-an-existing-project",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Add Commands",id:"add-commands",level:3},{value:"Add Hooks",id:"add-hooks",level:3},{value:"Further customizations",id:"further-customizations",level:3},{value:"Other Tutorials",id:"other-tutorials",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["oclif is a framework for building command-line interfaces (CLIs) using ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en",children:"Node.js"}),". You can use it like a ",(0,i.jsx)(n.a,{href:"https://github.com/oclif/core#usage",children:"simple flag parser"}),", but it's capable of much more. It's designed to be extensible so that you can easily add plugins, such as the ",(0,i.jsx)(n.a,{href:"https://github.com/oclif/plugin-warn-if-update-available",children:"update warning plugin"}),", or build your own for users to install at runtime."]}),"\n",(0,i.jsx)(n.p,{children:"The oclif generator creates a CLI project in TypeScript to get you started quickly. The generated CLI requires very few runtime dependencies and has minimal overhead."}),"\n",(0,i.jsx)(n.p,{children:"Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["Only ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/about/previous-releases",children:"LTS Node versions"})," are supported. If you want to ensure that users are on a specifc Node.js version, you can add the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/node",children:"node"})," package to your CLI."]}),"\n",(0,i.jsx)(n.p,{children:"To install the oclif CLI itself, run this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ npm install --global oclif\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oclif-project-from-scratch",children:"Create an oclif Project from Scratch"}),"\n",(0,i.jsxs)(n.p,{children:["To create a new oclif project from scratch, run the ",(0,i.jsx)(n.code,{children:"oclif generate"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ oclif generate mynewcli\nGenerating mynewcli in /Users/me/oclif/mynewcli\n? Select a module type ESM\n? NPM package name mynewcli\n? Command bin name the CLI will export mynewcli\n<more prompts...>\n\n$ cd mynewcli\n$ ./bin/dev.js hello world\nhello world! (./src/commands/hello/world.ts)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The command creates a new project based on our ",(0,i.jsx)(n.a,{href:"/docs/templates",children:"templates"}),". To learn more about what's included in these templates, read the documentation ",(0,i.jsx)(n.a,{href:"/docs/templates",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.code,{children:"oclif generate"})," completes, run your CLI using the included ",(0,i.jsx)(n.a,{href:"/docs/templates#bin-scripts",children:"bin scripts"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"bin/dev.js"})," to run your CLI in development mode:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ./bin/dev.js hello world\nhello world! (./src/commands/hello/world.ts)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"bin/run.js"})," to run your CLI in production mode:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ./bin/run.js hello world\nhello world! (./src/commands/hello/world.ts)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-oclif-in-an-existing-project",children:"Initialize oclif in an Existing Project"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to start using oclif inside an existing project, then use the ",(0,i.jsx)(n.code,{children:"oclif init"})," command to add the necessary files, dependencies, and configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ oclif init\n? Command bin name the CLI will export (my-pkg): my-pkg\n? Select topic separator: spaces\n? Select a module type: CommonJS\n? Select a package manager: npm\n\nCreated CLI in my-pkg\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"oclif init"})," adds the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["bin scripts: ",(0,i.jsx)(n.code,{children:"bin/run.js"}),", ",(0,i.jsx)(n.code,{children:"bin/run.cmd"}),", ",(0,i.jsx)(n.code,{children:"bin/dev.js"}),", and ",(0,i.jsx)(n.code,{children:"bin/dev.cmd"}),". See ",(0,i.jsx)(n.a,{href:"/docs/templates#bin-scripts",children:"bin scripts"})," for more information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"oclif"})," section to ",(0,i.jsx)(n.code,{children:"package.json"})," with the ",(0,i.jsx)(n.code,{children:"bin"}),", ",(0,i.jsx)(n.code,{children:"dirname"}),", ",(0,i.jsx)(n.code,{children:"commands"}),", and ",(0,i.jsx)(n.code,{children:"topicSeparator"})," properties set. See ",(0,i.jsx)(n.a,{href:"/docs/configuring_your_cli",children:"Configuring Your CLI"})," for more information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@oclif/core"})," to the ",(0,i.jsx)(n.code,{children:"dependencies"})," property in your ",(0,i.jsx)(n.code,{children:"package.json"})," (if it's not already there)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ts-node"})," to the ",(0,i.jsx)(n.code,{children:"devDependencies"})," property in your ",(0,i.jsx)(n.code,{children:"package.json"})," (if it's not already there)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.h3,{id:"add-commands",children:"Add Commands"}),"\n",(0,i.jsxs)(n.p,{children:["After you've generated an oclif project or initialized it in your existing project, start adding new ",(0,i.jsx)(n.a,{href:"/docs/commands",children:"commands"}),". This example creates a new command with the TypeScript source file ",(0,i.jsx)(n.code,{children:"src/commands/foo/bar.ts"})," that you can customize to do whatever you want:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ oclif generate command foo:bar\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See the documentation for ",(0,i.jsx)(n.a,{href:"/docs/flags",children:"flags"})," and ",(0,i.jsx)(n.a,{href:"/docs/args",children:"args"})," which shows how to add flags and arguments to your command; the documentation for ",(0,i.jsx)(n.a,{href:"/docs/commands",children:"commands"})," shows the other options you can set on your command."]}),"\n",(0,i.jsx)(n.h3,{id:"add-hooks",children:"Add Hooks"}),"\n",(0,i.jsxs)(n.p,{children:["You can also add ",(0,i.jsx)(n.a,{href:"/docs/hooks",children:"hooks"})," to your CLI that allow you to further customize the behavior of your CLI:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ oclif generate hook my-hook --event init\n"})}),"\n",(0,i.jsx)(n.h3,{id:"further-customizations",children:"Further customizations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/configuring_your_cli",children:"Configure Your CLI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/help_classes",children:"Custom Help"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/base_class",children:"Use a Base Command Class"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/user_experience",children:"Enhance the User Experience"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"other-tutorials",children:"Other Tutorials"}),"\n",(0,i.jsxs)(n.p,{children:["Our friend, ",(0,i.jsx)(n.a,{href:"https://github.com/joshcanhelp",children:"@joshcanhelp"}),", wrote a fantastic ",(0,i.jsx)(n.a,{href:"https://www.joshcanhelp.com/oclif/",children:"tutorial on his blog"})," that we encourage you to read as well."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var i=o(6540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);