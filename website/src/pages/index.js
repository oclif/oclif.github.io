import Layout from "@theme/Layout";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from "react";

import {useColorMode} from '@docusaurus/theme-common';

const ImageSwitcher = ({lightImageSrc, darkImageSrc, width, className}) => {
  return (
    <img width={width ?? 512}
        className={className ?? "center"}
        src={useColorMode().colorMode === 'dark' ? darkImageSrc : lightImageSrc}
        alt="oclif"/>
  )
}

function docUrl(doc, language) {
  const {siteConfig} = useDocusaurusContext();
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

export default (props) => {
  return <Layout>
    <div>
      <main className="homepage page-content" aria-label="Content">
        <section className="hero">
          <div className="container">
            <ImageSwitcher lightImageSrc={"img/oclif.svg"} darkImageSrc={"img/oclif_rev.svg"}/>
            <h1 className='hero__title center code-font padding-vert--lg'>The Open CLI Framework</h1>
            <h2 className='hero__subtitle center'>Create command line tools your users love</h2>
            <div className="row">
              <div className="col col--6 col--offset-3">
                <p className='center'>oclif is an open source framework for building a command line interface (CLI) in Node.js and Typescript. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.</p>
              </div>
            </div>
            <div className="row">
              <div className="center">
                <pre className="get-started-example">
                  <code>
                    <span className="block"><span className="opacity--60">$</span> npx oclif generate mynewcli</span>
                    <span className="block padding-bottom--sm opacity--60">? npm package name (mynewcli): mynewcli</span>
                    <span className="block padding-bottom--sm"><span className="opacity--60">$</span> cd mynewcli</span>
                    <span className="block"><span className="opacity--60">$</span> ./bin/run</span>
                    <span className="block opacity--60">hello world! (./src/commands/hello/world.ts)</span>
                  </code>
                </pre>
                <a className="button button--info button--lg shadow--tl" href={docUrl('introduction.html', props.language)}>
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="hero padding--sm">
          <div className="container top-border">
            <div className="row">
              <div className="col col--3">
                <h2><span className="margin-right--xs">⚡</span>Ready to go</h2>
                <p>Scaffold a fully functional CLI to get started quickly. oclif packages our years of experience into out-of-the-box functionality for argument parsing, command testing, and auto-documentation of CLI&nbsp;features.</p>
              </div>
              <div className="col col--3">
                <h2><span className="margin-right--xs">👐</span>Open source</h2>
                <p>oclif is <a href='https://github.com/oclif/oclif/blob/main/LICENSE'>open source</a> and free to use or modify. We think you’ll love it too and you can also help make it&nbsp;better.</p>
              </div>
              <div className="col col--3">
                <h2><span className="margin-right--xs">✅</span>Extendable</h2>
                <p>You or your users can easily extend your CLI functionality to meet custom needs using plugins. Plugins are modular and shareable, encouraging&nbsp;reuse.</p>
              </div>
              <div className="col col--3">
                <h2><span className="margin-right--xs">🔒</span>Trusted</h2>
                <p>oclif is actively used to build the <a href='https://github.com/heroku/cli' className='dim mid-gray'>Heroku</a> and <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim mid-gray'>Salesforce CLIs</a>, powering millions of interactions for developers&nbsp;every&nbsp;day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero padding--sm">
          <div className="container top-border">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2 className='hero__subtitle center'>CLIs built using <ImageSwitcher lightImageSrc={"img/oclif.svg"} darkImageSrc={"img/oclif_rev.svg"} className="center margin-left--xs inline-block" width={128}/></h2>
                <p className='center'>With oclif you can build command line tools for your business, open source project, or your own development workflow. Check out what others have built.</p>
              </div>
            </div>
            <div className="row">
              <div className="center">
                <a className="margin--md padding--md button button--secondary button--lg" href="https://github.com/heroku/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                    <path d="M8.79497857,10.9931044 C8.41078241,11.8797381 7.52782617,12.5 6.5,12.5 C5.44000655,12.5 4.53409275,11.8403066 4.17042594,10.9090871 C3.95706772,10.968335 3.73223173,11 3.5,11 C2.11928813,11 1,9.88071187 1,8.5 C1,7.61137949 1.4636267,6.8310448 2.16218417,6.38769186 C2.05738058,6.11183491 2,5.81261843 2,5.5 C2,4.11928813 3.11928813,3 4.5,3 C5.43852258,3 6.25625588,3.51716036 6.68377135,4.28205251 C7.13946702,3.80045375 7.78464614,3.5 8.5,3.5 C9.5003117,3.5 10.3634059,4.08749811 10.7630588,4.93627064 C11.1917705,4.66018468 11.7021787,4.5 12.25,4.5 C13.7687831,4.5 15,5.73121694 15,7.25 C15,8.76878306 13.7687831,10 12.25,10 C11.9384222,10 11.638947,9.94818254 11.3597219,9.85269511 C10.8104528,10.5513111 9.95762487,11 9,11 C8.93109222,11 8.86272706,10.9976768 8.79497857,10.9931044 L8.79497857,10.9931044 Z"/>
                  </svg>
                  Salesforce CLI
                </a>
                <a className="margin--md padding--md button button--secondary button--lg" href="https://github.com/salesforcecli/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                    <path d="M1,2.28390792 C1,1.02254041 2.00684547,0 3.24157722,0 L12.7584228,0 C13.9964117,0 15,1.02521157 15,2.28390792 L15,13.7160921 C15,14.9774596 13.9931545,16 12.7584228,16 L3.24157722,16 C2.00358831,16 1,14.9747884 1,13.7160921 L1,2.28390792 Z M12,13.7142857 L12,8.81632653 C12,7.736 11.4214356,6.94243185 10.7622454,6.63945578 C9.96744598,6.27415126 8.46922978,5.82312925 5.84167985,6.91156463 L5.84167985,2.28571429 L4,2.28571429 L4,9.36054422 L5.16779997,8.81632653 C6.71943989,8.14285714 10.1297524,7.18367347 10.1297524,8.81632653 L10.1297524,13.7142857 L12,13.7142857 Z M10.2011719,5.15230655 C11.2435998,3.79176233 11.8549361,2.75029036 12,2.28571429 L10.2266667,2.28571429 C9.8113896,2.94939439 9.60752804,3.79176233 8.57567708,5.15230655 L10.2011719,5.15230655 Z M4,13.7142857 L6.09,11.7090641 L4,9.70384247 L4,13.7142857 Z"/>
                  </svg>
                  Heroku CLI
                </a>
                <a className="margin--md padding--md button button--secondary button--lg" href="https://twilio.com/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16" viewBox="0 0 30 30">
                    <path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11zm6.8-14.7c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm0 7.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm-7.4 0c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm0-7.4c0 1.7-1.4 3.1-3.1 3.1S8.2 13 8.2 11.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1z"/>
                  </svg>
                  Twilio CLI
                </a>
                <a className="margin--md padding--md button button--secondary button--lg" href="https://github.com/oclif/Kaomoji">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                  <path d="M1,4.0085302 C1,2.8992496 1.89706013,2 3.00585866,2 L12.9941413,2 C14.1019465,2 15,2.90195036 15,4.0085302 L15,11.9914698 C15,13.1007504 14.1029399,14 12.9941413,14 L3.00585866,14 C1.89805351,14 1,13.0980496 1,11.9914698 L1,4.0085302 Z M2,5.99703014 L2,12.0029699 C2,12.5469637 2.44882258,13 3.00247329,13 L12.9975267,13 C13.544239,13 14,12.5536144 14,12.0029699 L14,5.99703014 C14,5.45303631 13.5511774,5 12.9975267,5 L3.00247329,5 C2.45576096,5 2,5.4463856 2,5.99703014 Z M4,7.19999695 L6.5,9.5 L4,11.8000031 L3.19999695,11 L5,9.5 L3.19999695,8 L4,7.19999695 Z M7,11 L10,11 L10,12 L7,12 L7,11 Z"/>
                  </svg>
                  Kaomoji CLI
                </a>
                <a className="margin--md padding--md button button--secondary button--lg" href="https://shopify.dev/apps/tools/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16" viewBox="0 0 128 128">
                  <path d="M74.7,14.8c0,0-1.4,0.4-3.7,1.1c-0.4-1.3-1-2.8-1.8-4.4c-2.6-5-6.5-7.7-11.1-7.7c0,0,0,0,0,0c-0.3,0-0.6,0-1,0.1 c-0.1-0.2-0.3-0.3-0.4-0.5c-2-2.2-4.6-3.2-7.7-3.1c-6,0.2-12,4.5-16.8,12.2c-3.4,5.4-6,12.2-6.7,17.5c-6.9,2.1-11.7,3.6-11.8,3.7 c-3.5,1.1-3.6,1.2-4,4.5C9.1,40.7,0,111.2,0,111.2l75.6,13.1V14.6C75.2,14.7,74.9,14.7,74.7,14.8z M57.2,20.2 c-4,1.2-8.4,2.6-12.7,3.9c1.2-4.7,3.6-9.4,6.4-12.5c1.1-1.1,2.6-2.4,4.3-3.2C56.9,12,57.3,16.9,57.2,20.2z M49.1,4.3 c1.4,0,2.6,0.3,3.6,0.9c-1.6,0.8-3.2,2.1-4.7,3.6c-3.8,4.1-6.7,10.5-7.9,16.6c-3.6,1.1-7.2,2.2-10.5,3.2 C31.7,19.1,39.8,4.6,49.1,4.3z M37.4,59.3c0.4,6.4,17.3,7.8,18.3,22.9c0.7,11.9-6.3,20-16.4,20.6c-12.2,0.8-18.9-6.4-18.9-6.4 l2.6-11c0,0,6.7,5.1,12.1,4.7c3.5-0.2,4.8-3.1,4.7-5.1c-0.5-8.4-14.3-7.9-15.2-21.7C23.8,51.8,31.4,40.1,48.2,39 c6.5-0.4,9.8,1.2,9.8,1.2l-3.8,14.4c0,0-4.3-2-9.4-1.6C37.4,53.5,37.3,58.2,37.4,59.3z M61.2,19c0-3-0.4-7.3-1.8-10.9 c4.6,0.9,6.8,6,7.8,9.1C65.4,17.7,63.4,18.3,61.2,19z"/>
                    <path d="M78.1,123.9l31.4-7.8c0,0-13.5-91.3-13.6-91.9c-0.1-0.6-0.6-1-1.1-1c-0.5,0-9.3-0.2-9.3-0.2s-5.4-5.2-7.4-7.2V123.9z"/>
                  </svg>
                  Shopify CLI
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </Layout>;
};
