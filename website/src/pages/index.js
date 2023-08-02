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
  const {siteConfig} = useDocusaurusContext();
  return <Layout>
    <div>
      <main className="homepage page-content" aria-label="Content">
        <section className="hero">
          <div className="container">
            <ImageSwitcher lightImageSrc={"img/oclif.svg"} darkImageSrc={"img/oclif_rev.svg"}/>
            <h1 className='hero__title center code-font padding-vert--lg'>The Open CLI Framework</h1>
            <h2 className='hero__subtitle center'>Create command line tools your users love</h2>
            <div className="row">
              <div className="oclif-example-container center shadow--tl">
                <code className='center oclif-example'>
                  <span className='block'><span className='sixty-percent'>$</span> npx oclif generate mynewcli</span>
                  <span className='block padding-vert--xs'><span className='sixty-percent'>? npm package name (mynewcli):</span> mynewcli</span>
                  <span className='block padding-vert--xs'><span className='sixty-percent'>$</span> cd mynewcli</span>
                  <span className='block padding-vert--xs'><span className='sixty-percent'>$</span> ./bin/run</span>
                  <span className='block margin-top--xs background--green dark-gray padding--xs border-radius--25'>hello world from ./src/index.js!</span>
                </code>
              </div>

            </div>
          </div>
        </section>

        <section className="hero hero--dark">
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2 className='hero__subtitle center'>Build simple to advanced CLIs in minutes</h2>
                <p className='center'>oclif is an open source framework for building a command line interface (CLI) in Node.js and Typescript. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.</p>
                <div className='margin-top--lg center'>
                  <a className="margin--md padding--md button button--secondary button-outline button--lg" href={docUrl('introduction.html', props.language)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                      <path d="M31,11 C34.8663333,11 38,14.1340556 38,18 C38,21.8659444 34.8659444,25 31,25 C27.1344444,25 24,21.8659444 24,18 C24,14.1340556 27.1344444,11 31,11 Z M29.7,19.1100505 L28.5454295,17.95548 C28.269036,17.6790865 27.8252729,17.6747271 27.55,17.95 C27.276633,18.223367 27.2763233,18.6662728 27.55548,18.9454295 L29.1501549,20.5401044 C29.2974579,20.6874074 29.4922992,20.7574439 29.6838384,20.7490639 C29.8833986,20.7682041 30.0887891,20.7011604 30.2411984,20.5487511 L33.8531667,16.9367828 C34.1233202,16.6666293 34.123367,16.223367 33.85,15.95 C33.5747271,15.6747271 33.1348353,15.6752152 32.8632172,15.9468333 L29.7,19.1100505 Z" transform="translate(-24 -11)"/>
                    </svg>
                    Get Started
                  </a>
                  <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://github.com/oclif/oclif">
                    <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                      <path d="M0,7.94661352 C0,11.4569776 2.29202861,14.4356162 5.47100893,15.4863838 C5.87126677,15.5595571 6.0171276,15.3141828 6.0171276,15.1034439 C6.0171276,14.9146569 6.010252,14.4151277 6.00632309,13.7521781 C3.78108598,14.2321946 3.31158108,12.6867758 3.31158108,12.6867758 C2.94766567,11.7686956 2.42315602,11.524297 2.42315602,11.524297 C1.69679855,11.0311094 2.47816078,11.0413536 2.47816078,11.0413536 C3.28113202,11.0974531 3.70348998,11.860406 3.70348998,11.860406 C4.4175696,13.074594 5.57610731,12.7238502 6.03186101,12.5204286 C6.10454587,12.0067525 6.31130483,11.6569844 6.5396728,11.4579532 C4.76331379,11.2574586 2.8956076,10.5759718 2.8956076,7.53098953 C2.8956076,6.66315494 3.20746493,5.95386237 3.71920562,5.39823359 C3.6371896,5.1972511 3.36265693,4.38941857 3.79778385,3.29572259 C3.79778385,3.29572259 4.46962767,3.08156891 5.99748304,4.1098968 C6.63593112,3.93379321 7.32005279,3.84549751 8.00024556,3.84257058 C8.67994721,3.84549751 9.36406888,3.93379321 10.0034992,4.1098968 C11.5303723,3.08156891 12.2012339,3.29572259 12.2012339,3.29572259 C12.6373431,4.38941857 12.3628104,5.1972511 12.2807944,5.39823359 C12.7935173,5.95386237 13.1029191,6.66315494 13.1029191,7.53098953 C13.1029191,10.5832892 11.2327573,11.2550195 9.45050493,11.4520994 C9.73780656,11.6974736 9.99318579,12.1823683 9.99318579,12.9233693 C9.99318579,13.9858447 9.98385463,14.8429472 9.98385463,15.1034439 C9.98385463,15.3161341 10.127751,15.5629718 10.5339022,15.4854082 C13.7099358,14.4326892 16,11.4564898 16,7.94661352 C16,3.60365593 12.4924674,0.0746232151 8.13783517,0.00116792798 C8.09173843,0.000390353833 8.04554676,0 7.99926333,0 C3.58218484,0 0,3.55768277 0,7.94661352 Z"></path>
                    </svg>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="container">
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
                <h2><span className="margin-right--xs">✅</span>Easy to extend</h2>
                <p>You or your users can easily extend your CLI functionality to meet custom needs using plugins. Plugins are modular and shareable, encouraging&nbsp;reuse.</p>
              </div>
              <div className="col col--3">
                <h2><span className="margin-right--xs">🔒</span>Trusted</h2>
                <p>oclif is actively used to build the <a href='https://github.com/heroku/cli' className='dim mid-gray'>Heroku</a> and <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim mid-gray'>Salesforce CLIs</a>, powering millions of interactions for developers&nbsp;every&nbsp;day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2 className='hero__subtitle center'>CLIs built using <ImageSwitcher lightImageSrc={"img/oclif.svg"} darkImageSrc={"img/oclif_rev.svg"} className="center margin-left--xs inline-block" width={128}/></h2>
                <p className='center'>With oclif you can build command line tools for your business, open source project, or your own development workflow. Check out what others have built.</p>
              </div>
            </div>
            <div className="row">
              <div className="col col--11 col--offset-1">
                <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://github.com/heroku/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                    <path d="M8.79497857,10.9931044 C8.41078241,11.8797381 7.52782617,12.5 6.5,12.5 C5.44000655,12.5 4.53409275,11.8403066 4.17042594,10.9090871 C3.95706772,10.968335 3.73223173,11 3.5,11 C2.11928813,11 1,9.88071187 1,8.5 C1,7.61137949 1.4636267,6.8310448 2.16218417,6.38769186 C2.05738058,6.11183491 2,5.81261843 2,5.5 C2,4.11928813 3.11928813,3 4.5,3 C5.43852258,3 6.25625588,3.51716036 6.68377135,4.28205251 C7.13946702,3.80045375 7.78464614,3.5 8.5,3.5 C9.5003117,3.5 10.3634059,4.08749811 10.7630588,4.93627064 C11.1917705,4.66018468 11.7021787,4.5 12.25,4.5 C13.7687831,4.5 15,5.73121694 15,7.25 C15,8.76878306 13.7687831,10 12.25,10 C11.9384222,10 11.638947,9.94818254 11.3597219,9.85269511 C10.8104528,10.5513111 9.95762487,11 9,11 C8.93109222,11 8.86272706,10.9976768 8.79497857,10.9931044 L8.79497857,10.9931044 Z"/>
                  </svg>
                  Salesforce CLI
                </a>
                <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://github.com/salesforcecli/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                    <path d="M1,2.28390792 C1,1.02254041 2.00684547,0 3.24157722,0 L12.7584228,0 C13.9964117,0 15,1.02521157 15,2.28390792 L15,13.7160921 C15,14.9774596 13.9931545,16 12.7584228,16 L3.24157722,16 C2.00358831,16 1,14.9747884 1,13.7160921 L1,2.28390792 Z M12,13.7142857 L12,8.81632653 C12,7.736 11.4214356,6.94243185 10.7622454,6.63945578 C9.96744598,6.27415126 8.46922978,5.82312925 5.84167985,6.91156463 L5.84167985,2.28571429 L4,2.28571429 L4,9.36054422 L5.16779997,8.81632653 C6.71943989,8.14285714 10.1297524,7.18367347 10.1297524,8.81632653 L10.1297524,13.7142857 L12,13.7142857 Z M10.2011719,5.15230655 C11.2435998,3.79176233 11.8549361,2.75029036 12,2.28571429 L10.2266667,2.28571429 C9.8113896,2.94939439 9.60752804,3.79176233 8.57567708,5.15230655 L10.2011719,5.15230655 Z M4,13.7142857 L6.09,11.7090641 L4,9.70384247 L4,13.7142857 Z"/>
                  </svg>
                  Heroku CLI
                </a>
                <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://twilio.com/cli">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16" viewBox="0 0 30 30">
                    <path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11zm6.8-14.7c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm0 7.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm-7.4 0c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm0-7.4c0 1.7-1.4 3.1-3.1 3.1S8.2 13 8.2 11.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1z"/>
                  </svg>
                  Twilio CLI
                </a>
                <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://github.com/oclif/Kaomoji">
                  <svg xmlns="http://www.w3.org/2000/svg" className="margin-right--xs" width="16" height="16">
                  <path d="M1,4.0085302 C1,2.8992496 1.89706013,2 3.00585866,2 L12.9941413,2 C14.1019465,2 15,2.90195036 15,4.0085302 L15,11.9914698 C15,13.1007504 14.1029399,14 12.9941413,14 L3.00585866,14 C1.89805351,14 1,13.0980496 1,11.9914698 L1,4.0085302 Z M2,5.99703014 L2,12.0029699 C2,12.5469637 2.44882258,13 3.00247329,13 L12.9975267,13 C13.544239,13 14,12.5536144 14,12.0029699 L14,5.99703014 C14,5.45303631 13.5511774,5 12.9975267,5 L3.00247329,5 C2.45576096,5 2,5.4463856 2,5.99703014 Z M4,7.19999695 L6.5,9.5 L4,11.8000031 L3.19999695,11 L5,9.5 L3.19999695,8 L4,7.19999695 Z M7,11 L10,11 L10,12 L7,12 L7,11 Z"/>
                  </svg>
                  Kaomoji CLI
                </a>
                <a className="margin--md padding--md button button--secondary button-outline button--lg" href="https://shopify.dev/apps/tools/cli">
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
