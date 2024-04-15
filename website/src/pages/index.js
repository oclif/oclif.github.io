import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import Translate from '@docusaurus/Translate'

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
              <h1 className="hero__title center code-font padding-vert--lg">
                <Translate 
                  id='hero.title'
                  description='The homepage hero title'>
                  The Open CLI Framework
                </Translate></h1>
              <h2 className="hero__subtitle center">
                <Translate
                  id='hero.subtitle'
                  description='The homepage hero subtitle'>
                  Create command line tools your users love
                </Translate></h2>
              <div className="row">
                <div className="col col--6 col--offset-3">
                  <p className="center">
                    <Translate
                      id='row.desc'
                      description='The homepage description'>
                      oclif is an open source framework for building a command line interface (CLI) in Node.js and
                    Typescript. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy
                    for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.
                    </Translate>
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
                    <Translate
                      id='row.button'
                      description='The homepage button'>
                      Get Started →
                    </Translate>
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
                    <span className="margin-right--xs">⚡</span>
                    <Translate
                      id='feature_1.title'
                      description='The title of the first feature'>
                      Ready to go
                    </Translate>
                  </h2>
                  <p>
                    <Translate
                      id='feature_1.desc'
                      description='The description of the first feature'>
                      Scaffold a fully functional CLI to get started quickly. oclif packages our years of experience into
                    out-of-the-box functionality for argument parsing, command testing, and auto-documentation of
                    CLI&nbsp;features.
                    </Translate>
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">👐</span>
                    <Translate
                      id='feature_2.title'
                      description='The title of the second feature'>
                      Open source
                    </Translate>
                  </h2>
                  <p>
                    <Translate
                      id='feature_2.desc'
                      values={{ 
                        linkString: (
                          <a href="https://github.com/oclif/oclif/blob/main/LICENSE">
                            <Translate
                              id='feature_2.desc.link'
                              description='open source'>
                              open source
                            </Translate>
                          </a>
                        ), 
                      }}
                      description='The description of the second feature'>
                      {'oclif is {linkString} and free to use or modify. We think you’ll love it too and you can also help make it&nbsp;better.'}
                    </Translate>
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">✅</span>
                    <Translate
                      id='feature_3.title'
                      description='The title of the Third feature'>
                      Extendable
                    </Translate>
                  </h2>
                  <p>
                    <Translate
                      id='feature_3.desc'
                      description='The description of the Third feature'>
                      You or your users can easily extend your CLI functionality to meet custom needs using plugins.
                    Plugins are modular and shareable, encouraging&nbsp;reuse.
                    </Translate>
                  </p>
                </div>
                <div className="col col--3">
                  <h2>
                    <span className="margin-right--xs">🔒</span>
                    <Translate
                      id='feature_4.title'
                      description='The title of the Fourth feature'>
                      Trusted
                    </Translate>
                  </h2>
                  <p>
                    <Translate
                      id='feature_4.desc'
                      description='The description of the Fourth feature'
                      values={{
                        Heroku: (
                          <a href="https://github.com/heroku/cli" className="dim mid-gray">
                            Heroku
                          </a>
                        ),
                        Salesforce: (
                          <a href="https://developer.salesforce.com/tools/sfdxcli" className="dim mid-gray">
                            Salesforce CLIs
                          </a>
                        )
                      }}>
                      {'oclif is actively used to build the {Heroku} and {Salesforce}, powering millions of interactions for developers&nbsp;every&nbsp;day.'}
                    </Translate>
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
                      <Translate
                        id='footer.title'
                        description='The title of the footer'
                        values={{
                            logoImg: (
                                <ImageSwitcher
                                  lightImageSrc={'img/oclif.svg'}
                                  darkImageSrc={'img/oclif_rev.svg'}
                                  className="margin-left--xs inline-block"
                                  width={128}
                                />
                            )
                        }}>
                        {'CLIs built using {logoImg}'}
                      </Translate>
                    </h2>
                    <p>
                      <Translate
                        id='footer.desc'
                        description='The description of the footer'>
                      With oclif you can build command line tools for your business, open source project, or your own
                      development workflow. Check out what others have built.
                      </Translate>
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
