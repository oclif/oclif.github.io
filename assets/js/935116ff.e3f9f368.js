"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8212],{2628:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(4848),i=o(8453);const r={title:"FAQs"},s=void 0,a={id:"faqs",title:"FAQs",description:"Why Node?",source:"@site/../docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/faqs.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1718050346e3,frontMatter:{title:"FAQs"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Generator Commands",permalink:"/docs/generator_commands"}},l={},d=[{value:"Why Node?",id:"why-node",level:2},{value:"How can I create a single binary CLI, like with Go?",id:"how-can-i-create-a-single-binary-cli-like-with-go",level:2},{value:"Should I use TypeScript or JavaScript?",id:"should-i-use-typescript-or-javascript",level:2},{value:"What editor is best for oclif?",id:"what-editor-is-best-for-oclif",level:2},{value:"Should I use npm or yarn?",id:"should-i-use-npm-or-yarn",level:2},{value:"How can I make the oclif generator run faster?",id:"how-can-i-make-the-oclif-generator-run-faster",level:2},{value:"Why isn&#39;t Node X supported?",id:"why-isnt-node-x-supported",level:2},{value:"How do I pronounce &quot;oclif&quot;?",id:"how-do-i-pronounce-oclif",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"why-node",children:"Why Node?"}),"\n",(0,n.jsxs)(t.p,{children:["There are a number of reasons why Node is the best choice for writing CLI code. At Salesforce, we've released the Heroku CLI in Ruby, Go, as well as Node. ",(0,n.jsx)(t.a,{href:"https://blog.heroku.com/evolution-of-heroku-cli-2008-2017",children:"Read this article for details on that history"}),". But in the end, we found that Node offers the best of everything."]}),"\n",(0,n.jsx)(t.p,{children:"First, JavaScript is the biggest language in the world. More people write in JavaScript than in any other programming language, and it has the biggest open-source community, by far. Because everyone can write it, you can find many useful libraries to help build your CLI."}),"\n",(0,n.jsx)(t.p,{children:"We've also found that Node has the best cross-platform support of any language we've used. In general, if you write code on macOS, you rarely find issues making it also run on Windows."}),"\n",(0,n.jsxs)(t.p,{children:["Node has the best support for our ",(0,n.jsx)(t.a,{href:"/docs/plugins",children:"plugins"})," model. Plugins are a way to share code between CLIs, to modularize a CLI's codebase, and to allow users to add functionality to an existing CLI. With Node, we can have separate dependency versions sitting alongside one another. As a result, if you want to release an update to a dependency in one plugin, it doesn't affect how another plugin works. oclif takes this to an extreme so that even flag parsing is done at the individual plugin level. For example, if we ever want to make a breaking change to flag parsing (don't worry, we don't intend to!), you can update just one plugin and keep the old behavior in other plugins. This feature is very helpful for large CLI codebases where you want to migrate to new code slowly."]}),"\n",(0,n.jsx)(t.h2,{id:"how-can-i-create-a-single-binary-cli-like-with-go",children:"How can I create a single binary CLI, like with Go?"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"https://github.com/zeit/pkg",children:"pkg"}),". Make sure you add the commands and other source files by setting ",(0,n.jsx)(t.code,{children:'pkg.scripts: "./lib/**/*.js"'})," in ",(0,n.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In Salesforce CLI, however, we prefer to ship a tarball and various installers that have Node baked in. Use ",(0,n.jsx)(t.code,{children:"oclif pack"})," to create a set of tarballs for different platforms with Node built in. You probably must use ",(0,n.jsx)(t.a,{href:"https://github.com/oclif/plugin-update",children:"@oclif/plugin-update"})," in your CLI, otherwise the users won't have a way to update the CLI from the tarball without reinstalling it."]}),"\n",(0,n.jsx)(t.h2,{id:"should-i-use-typescript-or-javascript",children:"Should I use TypeScript or JavaScript?"}),"\n",(0,n.jsx)(t.p,{children:"We suggest you use TypeScript, because we find the typing helpful when refactoring code and updating dependencies. It's nicer to get compilation errors rather than finding errors in production."}),"\n",(0,n.jsxs)(t.p,{children:["We've put a lot of care into making it easy to create a TypeScript CLI, even if you've never written TypeScript before. We generate CLIs and plugins that use ",(0,n.jsx)(t.a,{href:"https://github.com/TypeStrong/ts-node",children:"ts-node"}),", which makes it fast to run the TypeScript code without a compilation step. And you don't have to mess around with build configuration using oclif."]}),"\n",(0,n.jsx)(t.p,{children:"Still, the two languages are very similar today. The code you write in JavaScript will be nearly identical to what you would have in TypeScript, but with no type definitions of course."}),"\n",(0,n.jsx)(t.h2,{id:"what-editor-is-best-for-oclif",children:"What editor is best for oclif?"}),"\n",(0,n.jsxs)(t.p,{children:["If you already have a favorite editor, go ahead and keep using it. However, we typically recommend ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code"}),", or VS Code for short."]}),"\n",(0,n.jsx)(t.p,{children:"Microsoft has done a great job with this editor and it works particularly well for TypeScript projects. You get nice type checking, linting, and autocomplete, right out of the box."}),"\n",(0,n.jsx)(t.h2,{id:"should-i-use-npm-or-yarn",children:"Should I use npm or yarn?"}),"\n",(0,n.jsx)(t.p,{children:"It doesn't make that much of a difference. If you're just getting started, keep it simple and use npm, which comes with Node. We like to use yarn internally, as it's a bit faster and we find the lockfiles friendlier."}),"\n",(0,n.jsx)(t.h2,{id:"how-can-i-make-the-oclif-generator-run-faster",children:"How can I make the oclif generator run faster?"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using npx, first install oclif by running ",(0,n.jsx)(t.code,{children:"npm install -g oclif"}),". But to stay current with the latest updates, you must manually run ",(0,n.jsx)(t.code,{children:"npm update -g oclif"})," to get new versions of the generator."]}),"\n",(0,n.jsx)(t.h2,{id:"why-isnt-node-x-supported",children:"Why isn't Node X supported?"}),"\n",(0,n.jsxs)(t.p,{children:["The oclif project follows and supports ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/about/releases/",children:"Node's LTS support schedule"}),", which allows oclif to stay current with Node's development."]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-pronounce-oclif",children:'How do I pronounce "oclif"?'}),"\n",(0,n.jsx)(t.p,{children:'We say "oh-cliff".'})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);