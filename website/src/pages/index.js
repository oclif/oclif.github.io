import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'

import {useColorMode} from '@docusaurus/theme-common'

function docUrl(doc, language) {
  const {siteConfig} = useDocusaurusContext()
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
}

function toTitleCase(str) {
  return str
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}

const ImageSwitcher = ({lightImageSrc, darkImageSrc, width, className}) => {
  return (
    <img
      width={width ?? 512}
      className={className ?? 'center'}
      src={useColorMode().colorMode === 'dark' ? darkImageSrc : lightImageSrc}
      alt="oclif"
    />
  )
}

const Example = () => {
  return (
    <pre className={useColorMode().colorMode === 'dark' ? 'get-started-example-dark' : 'get-started-example'}>
      <code>
        <span className="block">
          <span className="opacity--60">$</span> npx oclif generate mynewcli
        </span>
        <span className="block padding-bottom--sm opacity--60">? npm package name (mynewcli): mynewcli</span>
        <span className="block padding-bottom--sm">
          <span className="opacity--60">$</span> cd mynewcli
        </span>
        <span className="block">
          <span className="opacity--60">$</span> ./bin/run.js hello world
        </span>
        <span className="block opacity--60">hello world! (./src/commands/hello/world.ts)</span>
      </code>
    </pre>
  )
}

const CompanyLogo = ({width, viewBox, href, company}) => {
  const alt = `${toTitleCase(company)} CLI`
  const src = `img/${company}-logo.svg`
  return (
    <a href={href} className="company-logo" target="_blank">
      <img alt={alt} src={src} width={width} viewBox={viewBox} />
    </a>
  )
}

export default (props) => {
  return (
    <Layout>
      <div>
        <main className="homepage page-content" aria-label="Content">
          <section className="hero">
            <div className="container">
              <ImageSwitcher lightImageSrc={'img/oclif.svg'} darkImageSrc={'img/oclif_rev.svg'} />
              <h1 className="hero__title center code-font padding-vert--lg">The Open CLI Framework</h1>
              <h2 className="hero__subtitle center">Create command line tools your users love</h2>
              <div className="row">
                <div className="col col--6 col--offset-3">
                  <p className="center">
                    oclif is an open source framework for building a command line interface (CLI) in Node.js and
                    Typescript. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy
                    for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="center">
                  <Example />
                  <a
                    className="button button--info button--lg shadow--tl"
                    href={docUrl('introduction.html', props.language)}
                  >
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
                  <h2>
                    <span className="margin-right--xs">⚡</span>Ready to go
                  </h2>
                  <p>
                    Scaffold a fully functional CLI to get started quickly. oclif packages our years of experience into
                    out-of-the-box functionality for argument parsing, command testing, and auto-documentation of
                    CLI&nbsp;features.
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">👐</span>Open source
                  </h2>
                  <p>
                    oclif is <a href="https://github.com/oclif/oclif/blob/main/LICENSE">open source</a> and free to use
                    or modify. We think you’ll love it too and you can also help make it&nbsp;better.
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">✅</span>Extendable
                  </h2>
                  <p>
                    You or your users can easily extend your CLI functionality to meet custom needs using plugins.
                    Plugins are modular and shareable, encouraging&nbsp;reuse.
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">🔒</span>Trusted
                  </h2>
                  <p>
                    oclif is actively used to build the{' '}
                    <a href="https://github.com/heroku/cli" className="dim mid-gray">
                      Heroku
                    </a>{' '}
                    and{' '}
                    <a href="https://developer.salesforce.com/tools/sfdxcli" className="dim mid-gray">
                      Salesforce CLIs
                    </a>
                    , powering millions of interactions for developers&nbsp;every&nbsp;day.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="hero padding--sm">
            <div className="container top-border">
              <div className="row">
                <div className="col col--6 col--offset-3">
                  <span className="center">
                    <h2 className="hero__subtitle">
                      CLIs built using{' '}
                      <ImageSwitcher
                        lightImageSrc={'img/oclif.svg'}
                        darkImageSrc={'img/oclif_rev.svg'}
                        className="margin-left--xs inline-block"
                        width={128}
                      />
                    </h2>
                    <p>
                      With oclif you can build command line tools for your business, open source project, or your own
                      development workflow. Check out what others have built.
                    </p>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="company-container center">
                  <CompanyLogo
                    company="salesforce"
                    href="https://github.com/salesforcecli/cli"
                    width="96"
                    viewBox="16 16 0 0"
                  />
                  <CompanyLogo company="heroku" href="https://github.com/heroku/cli" width="96" viewBox="16 16 0 0" />
                  <CompanyLogo company="twilio" href="https://twilio.com/cli" />
                  <CompanyLogo company="shopify" href="https://shopify.dev/apps/tools/cli" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
