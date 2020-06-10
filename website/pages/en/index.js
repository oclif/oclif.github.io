/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <main className="homepage page-content" aria-label="Content">
          <section className='banner bg-dark-gray-gradient'>
            <div className='pt6 mw8 center ph4 tc'>
              <svg className='w4 fill-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 16">
                <path d="M35.3562857,0.408911325 C35.0941318,0.145351205 34.737862,-0.00189210772 34.3669286,1.83616382e-05 L1.38835714,1.83616382e-05 C0.621588666,1.83616382e-05 9.39020561e-17,0.624278929 0,1.39434337 L0,14.605675 C9.39020561e-17,15.3757394 0.621588666,16 1.38835714,16 L34.3669286,16 C34.737862,16.0019105 35.0941318,15.8546672 35.3562857,15.591107 L41.608963,9.00306702 C42.1397237,8.46059446 42.1397237,7.55581393 41.608963,7.01334137 L35.3562857,0.408911325 Z M24.9537857,4.4078845 C25.1185337,4.25237815 25.338587,4.1698718 25.5645,4.17890444 C25.7072641,4.18098639 25.8472361,4.21894127 25.9716429,4.28930554 C26.1010296,4.36009357 26.2103244,4.46282197 26.2892143,4.58779741 C26.3678208,4.70943738 26.4088967,4.85168734 26.4072857,4.99669037 C26.4096384,5.14179402 26.368501,5.28425687 26.2892143,5.40558333 C26.2096564,5.52894582 26.1004394,5.6301949 25.9716429,5.69998626 C25.7085465,5.84781812 25.387882,5.84781812 25.1247857,5.69998626 C24.9974445,5.63118465 24.8906426,5.52956895 24.8153571,5.40558333 C24.73884,5.28320045 24.6992456,5.14118393 24.7013571,4.99669037 C24.696653,4.77297538 24.788732,4.55819514 24.9537857,4.4078845 Z M8.79428571,11.2036855 C8.57193825,11.6401326 8.2355751,12.0076235 7.82121429,12.2668072 C6.98024764,12.7832877 5.9221095,12.7832877 5.08114286,12.2668072 C4.66828102,12.0070514 4.33337269,11.6396124 4.11214286,11.2036855 C3.86946793,10.7167389 3.74792697,10.1779763 3.75792857,9.63353657 C3.75197057,9.10816898 3.87651096,8.58959657 4.12028571,8.12472153 C4.34704894,7.68551952 4.68560033,7.31447491 5.1015,7.04933304 C5.9288204,6.52613461 6.9816796,6.52613461 7.809,7.04933304 C8.22489967,7.31447491 8.56345106,7.68551952 8.79021429,8.12472153 C9.03398904,8.58959657 9.15852943,9.10816898 9.15257143,9.63353657 C9.16114911,10.1782976 9.03821581,10.7170397 8.79428571,11.2036855 Z M14.6492462,8.62997437 C14.3110714,8.12881046 13.7438411,7.78071032 13.1181429,7.82214074 C12.8472245,7.81967153 12.5823607,7.9026185 12.3608571,8.05929866 C12.1232184,8.22058439 11.9322066,8.44203846 11.8071429,8.70126061 C11.668965,9.01666856 11.6008856,9.35852881 11.6076429,9.70304837 C11.6071,10.0232317 11.6751388,10.3397865 11.8071429,10.6312354 C11.9186557,10.8861635 12.1010153,11.1033801 12.3323571,11.2568416 C12.5616165,11.4049246 12.8293053,11.4817359 13.1018571,11.4776438 C13.3108813,11.4670291 13.4618807,11.4506774 13.5548553,11.4285889 C13.6301664,11.4106968 13.7315956,11.3670775 13.8591429,11.2977309 C14.1297651,11.1597692 14.3662482,10.9627843 14.5512857,10.7211918 L15.3411429,11.6371121 C15.058758,11.9658363 14.7068348,12.2270716 14.3110714,12.4017419 C13.9252832,12.5677304 13.5093236,12.6512799 13.0896429,12.6470777 C12.5758713,12.6553362 12.0694332,12.523944 11.6239286,12.2668072 C11.1925137,12.0129412 10.8400518,11.6433892 10.6060714,11.1995966 C10.3580581,10.7273404 10.2320644,10.2001099 10.2396429,9.666248 C10.2331078,9.13119908 10.3590212,8.60289986 10.6060714,8.12881046 C10.8396224,7.67937637 11.1917477,7.30310459 11.6239286,7.04115518 C12.0730103,6.76809198 12.589126,6.62647059 13.1140714,6.63226222 C13.5667534,6.62929377 14.0144724,6.72704237 14.4250714,6.91848729 C14.8149899,7.09581657 15.1477954,7.37906744 15.3859286,7.73627322 L14.6492462,8.62997437 Z M21.4360714,12.4712537 L16.9575,12.4712537 L16.9575,11.412221 L18.5127857,11.412221 L18.5127857,5.31562688 L17.043,5.31562688 L17.043,4.24023839 L19.893,4.24023839 L19.893,11.412221 L21.4360714,11.412221 L21.4360714,12.4712537 Z M27.5676429,12.4712537 L23.6142857,12.4712537 L23.6142857,11.3754206 L24.9782143,11.3754206 L24.9782143,7.87529683 L23.6712857,7.87529683 L23.6712857,6.77946369 L26.3258571,6.77946369 L26.3258571,11.3754206 L27.5472857,11.3754206 L27.5676429,12.4712537 Z M34.2447857,5.82265415 C34.0577892,5.64058907 33.8468257,5.48512573 33.6177857,5.36060511 C33.4353667,5.27627177 33.236358,5.23434224 33.0355714,5.23793722 C32.7185167,5.21534339 32.4084247,5.33870978 32.1927857,5.57322945 C31.9832136,5.85832602 31.8821216,6.20931781 31.9077857,6.56275042 L31.9077857,6.79581941 L33.6462857,6.79581941 L33.6462857,7.87938576 L31.9159286,7.87938576 L31.9159286,12.4712537 L30.5927143,12.4712537 L30.5927143,7.86303004 L29.3712857,7.86303004 L29.3712857,6.77946369 L30.5927143,6.77946369 L30.5927143,6.54230577 C30.5793303,6.08589805 30.6875593,5.63418163 30.9062143,5.23384829 C31.1051382,4.88577728 31.3989587,4.60204316 31.7530714,4.41606236 C32.1174132,4.22555974 32.5230567,4.12862969 32.9337857,4.13392622 C33.6430246,4.12578136 34.3239617,4.41294506 34.8147857,4.92717856 L34.2447857,5.82265415 Z M7.61357143,8.62357095 C7.72664166,8.94645848 7.78044151,9.28727011 7.77235714,9.62944764 C7.77770764,9.97010022 7.7239772,10.3090885 7.61357143,10.6312354 C7.5254504,10.8957573 7.36622868,11.1306637 7.1535,11.3099977 C6.9541177,11.4708228 6.7048236,11.5562076 6.44914286,11.5512446 C6.19775617,11.5569237 5.95250884,11.4728914 5.757,11.3140866 C5.54506136,11.1398974 5.38456343,10.910841 5.29285714,10.65168 C5.18156795,10.3226963 5.12784568,9.9768425 5.13407143,9.62944764 C5.12687646,9.28832447 5.18207643,8.94877133 5.29692857,8.62765988 C5.38589675,8.37264097 5.54378936,8.14752634 5.75292857,7.97752007 C5.95526964,7.82866485 6.20278373,7.75495857 6.45321429,7.76898466 C6.70639775,7.76299719 6.95431252,7.84215282 7.15757143,7.99387579 C7.3650652,8.15696282 7.52301295,8.37507451 7.61357143,8.62357095 Z M57,15.3335045 C57,15.7015998 56.702877,16 56.3363571,16 L45.2457857,16 C44.8792659,16 44.5821429,15.7015998 44.5821429,15.3335045 L44.5821429,14.6833412 C44.5821429,14.3152459 44.8792659,14.0168457 45.2457857,14.0168457 L56.3404286,14.0168457 C56.7053574,14.0190942 57.0000069,14.3168368 57,14.6833412 L57,15.3335045 Z"/>
              </svg>
              <h1 className='code green fw5 mb3'>The Open CLI Framework</h1>
              <h2 className='white 0-70 normal mt0'>Create command line tools your users love</h2>

              <div className='relative mt4 tl mw6 bt bl br b--white-30 center br2 br--top code-example'>
                <svg className='flex pa2 o-50' fill='none' stroke='#fff' viewBox='0 0 40 10' width='40' height='10'>
                  <circle cx="5" cy="5" r="5"></circle>
                  <circle cx="20" cy="5" r="5"></circle>
                  <circle cx="35" cy="5" r="5"></circle>
                </svg>
                <div className='white pa4 pb5 pt3 tc'>
                  <code className='lh-copy f6 dib tl'>
                    <span className='db'><span className='white-60'>$</span> npx oclif single mynewcli</span>
                    <span className='db pt1'><span className='white-60'>? npm package name (mynewcli):</span> mynewcli</span>
                    <span className='db pt1'><span className='white-60'>$</span> cd mynewcli</span>
                    <span className='db pt1'><span className='white-60'>$</span> ./bin/run</span>
                    <span className='db mt1 bg-green dark-gray pa2 lh-solid br2'>hello world from ./src/index.js!</span>
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-light-gray-gradient pv6'>
            <div className='center mw6 ph4 tc'>
              <h2 className='mt0 fw4 mid-gray'>Build simple to advanced CLIs in minutes</h2>
              <p className='dark-gray f6 lh-large'>oclif is an open source framework for building a command line interface (CLI) in Node.js. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.</p>
              <div className='mt3'>
                <a href={docUrl('introduction.html', language)} className='lh-solid dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray'>
                  <svg className='v-btm pr1 fill-mid-gray' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M31,11 C34.8663333,11 38,14.1340556 38,18 C38,21.8659444 34.8659444,25 31,25 C27.1344444,25 24,21.8659444 24,18 C24,14.1340556 27.1344444,11 31,11 Z M29.7,19.1100505 L28.5454295,17.95548 C28.269036,17.6790865 27.8252729,17.6747271 27.55,17.95 C27.276633,18.223367 27.2763233,18.6662728 27.55548,18.9454295 L29.1501549,20.5401044 C29.2974579,20.6874074 29.4922992,20.7574439 29.6838384,20.7490639 C29.8833986,20.7682041 30.0887891,20.7011604 30.2411984,20.5487511 L33.8531667,16.9367828 C34.1233202,16.6666293 34.123367,16.223367 33.85,15.95 C33.5747271,15.6747271 33.1348353,15.6752152 32.8632172,15.9468333 L29.7,19.1100505 Z" transform="translate(-24 -11)"/>
                  </svg>
                  Getting Started
                </a>
                <a href='https://github.com/oclif/oclif' className='lh-solid dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray'>
                  <svg className="v-btm pr1 fill-mid-gray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M0,7.94661352 C0,11.4569776 2.29202861,14.4356162 5.47100893,15.4863838 C5.87126677,15.5595571 6.0171276,15.3141828 6.0171276,15.1034439 C6.0171276,14.9146569 6.010252,14.4151277 6.00632309,13.7521781 C3.78108598,14.2321946 3.31158108,12.6867758 3.31158108,12.6867758 C2.94766567,11.7686956 2.42315602,11.524297 2.42315602,11.524297 C1.69679855,11.0311094 2.47816078,11.0413536 2.47816078,11.0413536 C3.28113202,11.0974531 3.70348998,11.860406 3.70348998,11.860406 C4.4175696,13.074594 5.57610731,12.7238502 6.03186101,12.5204286 C6.10454587,12.0067525 6.31130483,11.6569844 6.5396728,11.4579532 C4.76331379,11.2574586 2.8956076,10.5759718 2.8956076,7.53098953 C2.8956076,6.66315494 3.20746493,5.95386237 3.71920562,5.39823359 C3.6371896,5.1972511 3.36265693,4.38941857 3.79778385,3.29572259 C3.79778385,3.29572259 4.46962767,3.08156891 5.99748304,4.1098968 C6.63593112,3.93379321 7.32005279,3.84549751 8.00024556,3.84257058 C8.67994721,3.84549751 9.36406888,3.93379321 10.0034992,4.1098968 C11.5303723,3.08156891 12.2012339,3.29572259 12.2012339,3.29572259 C12.6373431,4.38941857 12.3628104,5.1972511 12.2807944,5.39823359 C12.7935173,5.95386237 13.1029191,6.66315494 13.1029191,7.53098953 C13.1029191,10.5832892 11.2327573,11.2550195 9.45050493,11.4520994 C9.73780656,11.6974736 9.99318579,12.1823683 9.99318579,12.9233693 C9.99318579,13.9858447 9.98385463,14.8429472 9.98385463,15.1034439 C9.98385463,15.3161341 10.127751,15.5629718 10.5339022,15.4854082 C13.7099358,14.4326892 16,11.4564898 16,7.94661352 C16,3.60365593 12.4924674,0.0746232151 8.13783517,0.00116792798 C8.09173843,0.000390353833 8.04554676,0 7.99926333,0 C3.58218484,0 0,3.55768277 0,7.94661352 Z"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className='center ph4 tc mw7 pb6'>
              <h2 className='mt0 fw4 mid-gray'>See it in action</h2>
              <p className='mb0 dark-gray f6 lh-large mw6 center'>Experience going from zero to CLI with oclif.</p>
              <div className='aspect-ratio mt4 z-0' style={{paddingBottom: '60.85%'}}>
                <iframe className='aspect-ratio--object shadow-5 video-player' src="https://player.vimeo.com/video/260856112?dnt=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>
          </section>

          <section className='bg-light-gray-gradient-reversed pb6'>
            <div className="mw8 center ph4 f6">
              <div className="cf">
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">⚡</span>Ready to go</h2>
                    <p className="lh-large dark-gray mb0">Scaffold a fully functional CLI to get started quickly. oclif packages our years of experience into out-of-the-box functionality for argument parsing, command testing, and auto-documentation of CLI&nbsp;features.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">👐</span>Open source</h2>
                    <p className="lh-large dark-gray mb0">oclif is <a href='https://github.com/oclif/oclif/blob/master/LICENSE'>open source</a> and free to use or modify. We think you’ll love it too and you can also help make it&nbsp;better.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">✅</span>Easy to extend</h2>
                    <p className="lh-large dark-gray mb0">You or your users can easily extend your CLI functionality to meet custom needs using plugins. Plugins are modular and shareable, encouraging&nbsp;reuse.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb0-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">🔒</span>Trusted</h2>
                    <p className="lh-large dark-gray mb0">oclif is actively used to build the <a href='https://github.com/heroku/cli' className='dim mid-gray'>Heroku</a> and <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim mid-gray'>Salesforce CLIs</a>, powering millions of interactions for developers&nbsp;every&nbsp;day.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='pv6'>
            <div className='center ph4 tc mw7'>
              <h2 className='mt0 fw4 mid-gray'>CLIs built using <svg className='dib w3 ml1 fill-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 16">
                <path d="M35.3562857,0.408911325 C35.0941318,0.145351205 34.737862,-0.00189210772 34.3669286,1.83616382e-05 L1.38835714,1.83616382e-05 C0.621588666,1.83616382e-05 9.39020561e-17,0.624278929 0,1.39434337 L0,14.605675 C9.39020561e-17,15.3757394 0.621588666,16 1.38835714,16 L34.3669286,16 C34.737862,16.0019105 35.0941318,15.8546672 35.3562857,15.591107 L41.608963,9.00306702 C42.1397237,8.46059446 42.1397237,7.55581393 41.608963,7.01334137 L35.3562857,0.408911325 Z M24.9537857,4.4078845 C25.1185337,4.25237815 25.338587,4.1698718 25.5645,4.17890444 C25.7072641,4.18098639 25.8472361,4.21894127 25.9716429,4.28930554 C26.1010296,4.36009357 26.2103244,4.46282197 26.2892143,4.58779741 C26.3678208,4.70943738 26.4088967,4.85168734 26.4072857,4.99669037 C26.4096384,5.14179402 26.368501,5.28425687 26.2892143,5.40558333 C26.2096564,5.52894582 26.1004394,5.6301949 25.9716429,5.69998626 C25.7085465,5.84781812 25.387882,5.84781812 25.1247857,5.69998626 C24.9974445,5.63118465 24.8906426,5.52956895 24.8153571,5.40558333 C24.73884,5.28320045 24.6992456,5.14118393 24.7013571,4.99669037 C24.696653,4.77297538 24.788732,4.55819514 24.9537857,4.4078845 Z M8.79428571,11.2036855 C8.57193825,11.6401326 8.2355751,12.0076235 7.82121429,12.2668072 C6.98024764,12.7832877 5.9221095,12.7832877 5.08114286,12.2668072 C4.66828102,12.0070514 4.33337269,11.6396124 4.11214286,11.2036855 C3.86946793,10.7167389 3.74792697,10.1779763 3.75792857,9.63353657 C3.75197057,9.10816898 3.87651096,8.58959657 4.12028571,8.12472153 C4.34704894,7.68551952 4.68560033,7.31447491 5.1015,7.04933304 C5.9288204,6.52613461 6.9816796,6.52613461 7.809,7.04933304 C8.22489967,7.31447491 8.56345106,7.68551952 8.79021429,8.12472153 C9.03398904,8.58959657 9.15852943,9.10816898 9.15257143,9.63353657 C9.16114911,10.1782976 9.03821581,10.7170397 8.79428571,11.2036855 Z M14.6492462,8.62997437 C14.3110714,8.12881046 13.7438411,7.78071032 13.1181429,7.82214074 C12.8472245,7.81967153 12.5823607,7.9026185 12.3608571,8.05929866 C12.1232184,8.22058439 11.9322066,8.44203846 11.8071429,8.70126061 C11.668965,9.01666856 11.6008856,9.35852881 11.6076429,9.70304837 C11.6071,10.0232317 11.6751388,10.3397865 11.8071429,10.6312354 C11.9186557,10.8861635 12.1010153,11.1033801 12.3323571,11.2568416 C12.5616165,11.4049246 12.8293053,11.4817359 13.1018571,11.4776438 C13.3108813,11.4670291 13.4618807,11.4506774 13.5548553,11.4285889 C13.6301664,11.4106968 13.7315956,11.3670775 13.8591429,11.2977309 C14.1297651,11.1597692 14.3662482,10.9627843 14.5512857,10.7211918 L15.3411429,11.6371121 C15.058758,11.9658363 14.7068348,12.2270716 14.3110714,12.4017419 C13.9252832,12.5677304 13.5093236,12.6512799 13.0896429,12.6470777 C12.5758713,12.6553362 12.0694332,12.523944 11.6239286,12.2668072 C11.1925137,12.0129412 10.8400518,11.6433892 10.6060714,11.1995966 C10.3580581,10.7273404 10.2320644,10.2001099 10.2396429,9.666248 C10.2331078,9.13119908 10.3590212,8.60289986 10.6060714,8.12881046 C10.8396224,7.67937637 11.1917477,7.30310459 11.6239286,7.04115518 C12.0730103,6.76809198 12.589126,6.62647059 13.1140714,6.63226222 C13.5667534,6.62929377 14.0144724,6.72704237 14.4250714,6.91848729 C14.8149899,7.09581657 15.1477954,7.37906744 15.3859286,7.73627322 L14.6492462,8.62997437 Z M21.4360714,12.4712537 L16.9575,12.4712537 L16.9575,11.412221 L18.5127857,11.412221 L18.5127857,5.31562688 L17.043,5.31562688 L17.043,4.24023839 L19.893,4.24023839 L19.893,11.412221 L21.4360714,11.412221 L21.4360714,12.4712537 Z M27.5676429,12.4712537 L23.6142857,12.4712537 L23.6142857,11.3754206 L24.9782143,11.3754206 L24.9782143,7.87529683 L23.6712857,7.87529683 L23.6712857,6.77946369 L26.3258571,6.77946369 L26.3258571,11.3754206 L27.5472857,11.3754206 L27.5676429,12.4712537 Z M34.2447857,5.82265415 C34.0577892,5.64058907 33.8468257,5.48512573 33.6177857,5.36060511 C33.4353667,5.27627177 33.236358,5.23434224 33.0355714,5.23793722 C32.7185167,5.21534339 32.4084247,5.33870978 32.1927857,5.57322945 C31.9832136,5.85832602 31.8821216,6.20931781 31.9077857,6.56275042 L31.9077857,6.79581941 L33.6462857,6.79581941 L33.6462857,7.87938576 L31.9159286,7.87938576 L31.9159286,12.4712537 L30.5927143,12.4712537 L30.5927143,7.86303004 L29.3712857,7.86303004 L29.3712857,6.77946369 L30.5927143,6.77946369 L30.5927143,6.54230577 C30.5793303,6.08589805 30.6875593,5.63418163 30.9062143,5.23384829 C31.1051382,4.88577728 31.3989587,4.60204316 31.7530714,4.41606236 C32.1174132,4.22555974 32.5230567,4.12862969 32.9337857,4.13392622 C33.6430246,4.12578136 34.3239617,4.41294506 34.8147857,4.92717856 L34.2447857,5.82265415 Z M7.61357143,8.62357095 C7.72664166,8.94645848 7.78044151,9.28727011 7.77235714,9.62944764 C7.77770764,9.97010022 7.7239772,10.3090885 7.61357143,10.6312354 C7.5254504,10.8957573 7.36622868,11.1306637 7.1535,11.3099977 C6.9541177,11.4708228 6.7048236,11.5562076 6.44914286,11.5512446 C6.19775617,11.5569237 5.95250884,11.4728914 5.757,11.3140866 C5.54506136,11.1398974 5.38456343,10.910841 5.29285714,10.65168 C5.18156795,10.3226963 5.12784568,9.9768425 5.13407143,9.62944764 C5.12687646,9.28832447 5.18207643,8.94877133 5.29692857,8.62765988 C5.38589675,8.37264097 5.54378936,8.14752634 5.75292857,7.97752007 C5.95526964,7.82866485 6.20278373,7.75495857 6.45321429,7.76898466 C6.70639775,7.76299719 6.95431252,7.84215282 7.15757143,7.99387579 C7.3650652,8.15696282 7.52301295,8.37507451 7.61357143,8.62357095 Z M57,15.3335045 C57,15.7015998 56.702877,16 56.3363571,16 L45.2457857,16 C44.8792659,16 44.5821429,15.7015998 44.5821429,15.3335045 L44.5821429,14.6833412 C44.5821429,14.3152459 44.8792659,14.0168457 45.2457857,14.0168457 L56.3404286,14.0168457 C56.7053574,14.0190942 57.0000069,14.3168368 57,14.6833412 L57,15.3335045 Z"/>
              </svg></h2>
              <p className='mb0 dark-gray f6 lh-large mw6 center'>With oclif you can build command line tools for your business, open source project, or your own development workflow. Check out what others have built.</p>
              <div className='mt3'>
                <a href='https://github.com/heroku/cli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className='fill-mid-gray v-btm pr1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1,2.28390792 C1,1.02254041 2.00684547,0 3.24157722,0 L12.7584228,0 C13.9964117,0 15,1.02521157 15,2.28390792 L15,13.7160921 C15,14.9774596 13.9931545,16 12.7584228,16 L3.24157722,16 C2.00358831,16 1,14.9747884 1,13.7160921 L1,2.28390792 Z M12,13.7142857 L12,8.81632653 C12,7.736 11.4214356,6.94243185 10.7622454,6.63945578 C9.96744598,6.27415126 8.46922978,5.82312925 5.84167985,6.91156463 L5.84167985,2.28571429 L4,2.28571429 L4,9.36054422 L5.16779997,8.81632653 C6.71943989,8.14285714 10.1297524,7.18367347 10.1297524,8.81632653 L10.1297524,13.7142857 L12,13.7142857 Z M10.2011719,5.15230655 C11.2435998,3.79176233 11.8549361,2.75029036 12,2.28571429 L10.2266667,2.28571429 C9.8113896,2.94939439 9.60752804,3.79176233 8.57567708,5.15230655 L10.2011719,5.15230655 Z M4,13.7142857 L6.09,11.7090641 L4,9.70384247 L4,13.7142857 Z"/>
                  </svg>
                  Heroku CLI
                </a>
                <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.79497857,10.9931044 C8.41078241,11.8797381 7.52782617,12.5 6.5,12.5 C5.44000655,12.5 4.53409275,11.8403066 4.17042594,10.9090871 C3.95706772,10.968335 3.73223173,11 3.5,11 C2.11928813,11 1,9.88071187 1,8.5 C1,7.61137949 1.4636267,6.8310448 2.16218417,6.38769186 C2.05738058,6.11183491 2,5.81261843 2,5.5 C2,4.11928813 3.11928813,3 4.5,3 C5.43852258,3 6.25625588,3.51716036 6.68377135,4.28205251 C7.13946702,3.80045375 7.78464614,3.5 8.5,3.5 C9.5003117,3.5 10.3634059,4.08749811 10.7630588,4.93627064 C11.1917705,4.66018468 11.7021787,4.5 12.25,4.5 C13.7687831,4.5 15,5.73121694 15,7.25 C15,8.76878306 13.7687831,10 12.25,10 C11.9384222,10 11.638947,9.94818254 11.3597219,9.85269511 C10.8104528,10.5513111 9.95762487,11 9,11 C8.93109222,11 8.86272706,10.9976768 8.79497857,10.9931044 L8.79497857,10.9931044 Z"/>
                  </svg>
                  Salesforce CLI
                </a>
                <a href='https://twilio.com/cli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30">
                  <path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11zm6.8-14.7c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm0 7.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm-7.4 0c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm0-7.4c0 1.7-1.4 3.1-3.1 3.1S8.2 13 8.2 11.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1z"/>
                  </svg>
                  Twilio CLI
                </a>
                <a href='https://github.com/oclif/kaomoji' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1,4.0085302 C1,2.8992496 1.89706013,2 3.00585866,2 L12.9941413,2 C14.1019465,2 15,2.90195036 15,4.0085302 L15,11.9914698 C15,13.1007504 14.1029399,14 12.9941413,14 L3.00585866,14 C1.89805351,14 1,13.0980496 1,11.9914698 L1,4.0085302 Z M2,5.99703014 L2,12.0029699 C2,12.5469637 2.44882258,13 3.00247329,13 L12.9975267,13 C13.544239,13 14,12.5536144 14,12.0029699 L14,5.99703014 C14,5.45303631 13.5511774,5 12.9975267,5 L3.00247329,5 C2.45576096,5 2,5.4463856 2,5.99703014 Z M4,7.19999695 L6.5,9.5 L4,11.8000031 L3.19999695,11 L5,9.5 L3.19999695,8 L4,7.19999695 Z M7,11 L10,11 L10,12 L7,12 L7,11 Z"/>
                  </svg>
                  Kaomoji CLI
                </a>
                <a href='https://github.com/netlify/cli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M11.7246 6.38135L11.7188 6.37885C11.7154 6.3776 11.7121 6.37634 11.7092 6.37342C11.7044 6.36828 11.7008 6.36211 11.6988 6.35538C11.6968 6.34865 11.6963 6.34155 11.6975 6.33462L12.0204 4.36253L13.5347 5.8756L11.9598 6.54493C11.9554 6.54669 11.9508 6.54754 11.946 6.54743H11.9398C11.9377 6.54618 11.9356 6.54451 11.9314 6.54034C11.8728 6.47515 11.8027 6.42126 11.7246 6.38135V6.38135ZM13.9211 6.26117L15.5403 7.87857C15.8766 8.2149 16.0449 8.38265 16.1063 8.5771C16.1155 8.6059 16.1231 8.63469 16.1289 8.66432L12.2593 7.02731C12.2573 7.02645 12.2552 7.02562 12.2531 7.0248C12.2376 7.01854 12.2197 7.01145 12.2197 6.99559C12.2197 6.97974 12.238 6.97223 12.2535 6.96597L12.2585 6.96388L13.9211 6.26117V6.26117ZM16.0629 9.18342C15.9794 9.34032 15.8164 9.50306 15.5407 9.77888L13.7152 11.602L11.3541 11.1109L11.3416 11.1084C11.3207 11.105 11.2985 11.1013 11.2985 11.0825C11.2896 10.9852 11.2606 10.8908 11.2136 10.8051C11.1665 10.7195 11.1023 10.6444 11.0249 10.5847C11.0153 10.5751 11.0178 10.56 11.0207 10.5463C11.0207 10.5442 11.0207 10.5421 11.0216 10.5404L11.4656 7.81723L11.4673 7.80805C11.4698 7.78718 11.4736 7.76298 11.4924 7.76298C11.5875 7.75116 11.6794 7.72053 11.7626 7.67289C11.8458 7.62525 11.9187 7.56154 11.977 7.48549C11.9807 7.48131 11.9832 7.47672 11.9882 7.47422C12.0016 7.46796 12.0175 7.47422 12.0313 7.48006L16.0625 9.18342H16.0629ZM13.2954 12.0214L10.2934 15.02L10.8073 11.8653L10.8081 11.8611C10.8085 11.857 10.8094 11.8528 10.8106 11.849C10.8148 11.839 10.8257 11.8348 10.8361 11.8307L10.8411 11.8286C10.9536 11.7806 11.0531 11.7067 11.1314 11.6128C11.1415 11.6012 11.1536 11.5899 11.169 11.5878C11.173 11.5872 11.1771 11.5872 11.1812 11.5878L13.2949 12.0218L13.2954 12.0214ZM9.65806 15.6547L9.31968 15.9927L5.57879 10.5922C5.57744 10.5902 5.57604 10.5882 5.57461 10.5863C5.56876 10.5784 5.5625 10.5705 5.56375 10.5613C5.56375 10.5546 5.56835 10.5488 5.57294 10.5438L5.57712 10.5383C5.5884 10.5216 5.59801 10.505 5.60845 10.487L5.61681 10.4724L5.61806 10.4712C5.62391 10.4611 5.62934 10.4515 5.63936 10.4461C5.64814 10.4419 5.66025 10.4436 5.66986 10.4457L9.81429 11.2995C9.82588 11.3013 9.83681 11.306 9.84604 11.3132C9.85147 11.3187 9.85273 11.3245 9.85398 11.3312C9.88289 11.4404 9.93669 11.5415 10.0112 11.6266C10.0857 11.7117 10.1789 11.7784 10.2834 11.8215C10.2951 11.8273 10.2901 11.8403 10.2847 11.854C10.282 11.8601 10.2799 11.8664 10.2784 11.8728C10.2262 12.19 9.77837 14.9182 9.65806 15.6547ZM8.95123 16.3603C8.70184 16.6069 8.5548 16.7375 8.38853 16.7901C8.2246 16.8419 8.04867 16.8419 7.88474 16.7901C7.69007 16.7283 7.52172 16.5606 7.18543 16.2243L3.42866 12.4716L4.40994 10.9515C4.41454 10.9439 4.41913 10.9373 4.42665 10.9318C4.4371 10.9243 4.45214 10.9277 4.46467 10.9318C4.6899 10.9997 4.93172 10.9875 5.14893 10.8972C5.16021 10.893 5.17149 10.8901 5.18026 10.898C5.18465 10.902 5.18857 10.9065 5.19196 10.9114L8.95123 16.3603V16.3603ZM3.06606 12.1098L2.20467 11.249L3.90656 10.5237C3.91091 10.5218 3.9156 10.5208 3.92035 10.5208C3.93455 10.5208 3.94291 10.535 3.95043 10.5479C3.96753 10.5742 3.98564 10.5998 4.00473 10.6247L4.01016 10.6314C4.01518 10.6385 4.01183 10.6456 4.00682 10.6523L3.0669 12.1098H3.06606ZM1.82286 10.868L0.732546 9.77888C0.547068 9.59361 0.412554 9.45924 0.31898 9.34365L3.63419 10.0305C3.63836 10.0313 3.64254 10.032 3.64673 10.0326C3.6672 10.0359 3.68975 10.0397 3.68975 10.0589C3.68975 10.0797 3.66511 10.0893 3.64422 10.0973L3.63461 10.1014L1.82286 10.868V10.868ZM0.129324 8.78366C0.133102 8.7135 0.145734 8.6441 0.166921 8.5771C0.228747 8.38265 0.39668 8.2149 0.733381 7.87857L2.12865 6.48484C2.77107 7.41617 3.41523 8.3463 4.06113 9.27522C4.07241 9.29024 4.08494 9.30693 4.07199 9.31945C4.011 9.38664 3.95001 9.46008 3.90698 9.53978C3.90231 9.55002 3.89513 9.55892 3.88609 9.56565C3.88066 9.56899 3.87481 9.56774 3.86855 9.56649H3.86771L0.128906 8.78324L0.129324 8.78366ZM2.50211 6.11179L4.37778 4.23776C4.55448 4.31496 5.19656 4.58578 5.77012 4.8278C6.20457 5.01141 6.60059 5.17832 6.72508 5.23257C6.73761 5.23757 6.74889 5.24258 6.75432 5.2551C6.75766 5.26261 6.75599 5.27221 6.75432 5.28014C6.72462 5.41541 6.72904 5.55593 6.76718 5.68908C6.80531 5.82223 6.87597 5.94382 6.9728 6.04293C6.98533 6.05545 6.9728 6.0734 6.96194 6.08883L6.95609 6.0976L5.05118 9.04488C5.04617 9.05322 5.04157 9.06032 5.03322 9.06574C5.02319 9.072 5.00899 9.06908 4.99729 9.06616C4.9232 9.04677 4.84704 9.0364 4.77046 9.03528C4.70195 9.03528 4.62759 9.0478 4.55239 9.06157H4.55198C4.54362 9.06282 4.5361 9.06449 4.52942 9.05948C4.52204 9.05346 4.51569 9.04627 4.51062 9.0382L2.50211 6.11179V6.11179ZM4.75709 3.85928L7.18585 1.43319C7.52213 1.09728 7.69048 0.92911 7.88515 0.867769C8.04909 0.815988 8.22502 0.815988 8.38895 0.867769C8.58362 0.92911 8.75197 1.09728 9.08826 1.43319L9.61461 1.95897L7.88682 4.63084C7.88255 4.63862 7.87672 4.64544 7.8697 4.65087C7.85925 4.65797 7.84463 4.65504 7.8321 4.65087C7.69591 4.60959 7.5517 4.60207 7.41195 4.62897C7.2722 4.65587 7.14111 4.71638 7.03003 4.80527C7.01875 4.81695 7.00204 4.81027 6.98784 4.80402C6.76226 4.70595 5.00773 3.96527 4.75667 3.85887L4.75709 3.85928ZM9.98139 2.32534L11.5763 3.91854L11.192 6.29622V6.30248C11.1917 6.3079 11.1905 6.31324 11.1887 6.31834C11.1845 6.32669 11.1761 6.32836 11.1678 6.33086C11.0856 6.35572 11.0082 6.39423 10.9389 6.44478C10.9359 6.4469 10.9331 6.44927 10.9305 6.45187C10.9259 6.45688 10.9213 6.46147 10.9138 6.4623C10.9077 6.46249 10.9016 6.4615 10.8958 6.45938L8.4654 5.42786L8.4608 5.42577C8.44535 5.41951 8.42697 5.412 8.42697 5.39614C8.41268 5.26085 8.36845 5.13043 8.29747 5.01433C8.28577 4.99513 8.27282 4.9751 8.28285 4.95549L9.98139 2.32534V2.32534ZM8.33799 5.91608L10.6164 6.88001C10.6289 6.88585 10.6427 6.89127 10.6481 6.90421C10.6503 6.91199 10.6503 6.92021 10.6481 6.92799C10.6414 6.96138 10.6356 6.99935 10.6356 7.03774V7.10158C10.6356 7.11744 10.6193 7.12412 10.6042 7.13038L10.5997 7.13205C10.2387 7.28602 5.53242 9.29066 5.52532 9.29066C5.51822 9.29066 5.5107 9.29066 5.5036 9.28357C5.49106 9.27105 5.5036 9.25352 5.51488 9.23766C5.51687 9.23491 5.51882 9.23213 5.52072 9.22932L7.39305 6.33336L7.39639 6.32836C7.40725 6.31083 7.41979 6.29122 7.43984 6.29122L7.45864 6.29414C7.50125 6.29998 7.53884 6.30541 7.57686 6.30541C7.86092 6.30541 8.1241 6.16728 8.28285 5.9311C8.28663 5.92479 8.29143 5.91915 8.29705 5.91441C8.30833 5.90606 8.32504 5.91024 8.33799 5.91608V5.91608ZM5.72876 9.74884L10.8587 7.56352C10.8587 7.56352 10.8662 7.56352 10.8733 7.57061C10.9013 7.59857 10.9251 7.61735 10.948 7.63487L10.9593 7.64197C10.9698 7.64781 10.9802 7.65449 10.9811 7.66534C10.9811 7.66951 10.9811 7.67201 10.9802 7.67577L10.5412 10.3727L10.5395 10.3835C10.5366 10.4044 10.5336 10.4282 10.514 10.4282C10.3968 10.4361 10.2834 10.4724 10.1834 10.534C10.0835 10.5956 10.0001 10.6806 9.94045 10.7816L9.93836 10.785C9.93252 10.7946 9.92708 10.8037 9.91748 10.8087C9.9087 10.8129 9.89742 10.8112 9.88823 10.8092L5.79727 9.96624C5.79309 9.96541 5.73377 9.74967 5.72918 9.74926L5.72876 9.74884Z" fill="#0E1E25"/>
                  </svg>
                  Netlify CLI
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

module.exports = Index;
