/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');

const schedule = [
  {
    "time": "9:00am",
    "content": "Doors & coffee, breakfast (provided)"
  },
  {
    "time": "10:00am",
    "content": "Welcome"
  },
  {
    "time": "10:10am",
    "content": "Opening keynote",
    "speaker": "Jeff Dickey",
    "avatar": "jeff-dickey.jpg",
    "title": "The future of oclif",
    "description": "A brief overview of the history of oclif and future product direction."
  },
  {
    "time": "10:40am",
    "content": "Session",
    "speaker": "Evans Hauser",
    // "avatar": "evans-hauser.jpg",
    "title": "Evolving tooling with oclif at Apollo"
  },
  {
    "time": "11:10am",
    "content": "Break"
  },
  {
    "time": "11:30am",
    "content": "Session",
    "speaker": "Thomas Dvornik",
    "avatar": "thomas-dvornik.jpg",
    "title": "Building an enterprise grade CLI",
    "description": "Salesforce has very high standards for trust and caters to a wide audience, not just developers. In this talk, we'll explore Salesforce's unique oclif implementation to enhance security, performance, releases, and standardizations."
  },
  {
    "time": "12:00pm",
    "content": "Lunch"
  },
  {
    "time": "1:15pm",
    "content": "Session",
    "speaker": "Jesse MacFadyen",
    "avatar": "jesse-macfadyen.jpg",
    "title": "How Adobe I/O built an extensible CLI with oclif",
  },
  {
    "time": "1:45pm",
    "content": "Session",
    "speaker": "Nahid Samsami",
    // "avatar": "nahid-samsami.svg",
    "title": "CLI Analytics",
  },
  {
    "time": "2:30pm",
    "content": "Session",
    "speaker": "Shawn Wang",
    "avatar": "shawn-wang.jpg",
    "title": "Adaptive Intent-based CLI State Machines",
    "description": "Oclif does a lot of nice things, like offering flag and argument parsing, help documentation, and pluggability. That's good for the CLI developer. But what about the CLI user? Instead of viewing our CLI's as simple harnesses for procedure calls, how can we add an intelligent layer to interpret to user intent and guide them down a pit of success? How can we make our CLI's improve using information gained over time?"
  },
  {
    "time": "3:00pm",
    "content": "Session",
    "speaker": "Chris Castle",
    // "avatar": "chris-castle.jpg",
    "title": "oclif core team Q & A"
  },
  {
    "time": "3:30pm",
    "content": "Closing"
  },
  {
    "time": "3:45pm",
    "content": "Happy hour"
  },
]

const speakers = [
  {
    "id": "shawn-wang",
    "avatar": "shawn-wang.jpg",
    "name": "Shawn Wang",
    "title": "DX Engineer, Netlify",
    "bio": "swyx is an Infinite Builder working on Developer Experience at Netlify. In his free time he helps people Learn in Public at Egghead.io and /r/reactjs."
  },
  {
    "id": "thomas-dvornik",
    "avatar": "thomas-dvornik.jpg",
    "name": "Thomas Dvornik",
    "title": "Lead, Salesforce CLI",
    "bio": "Thomas has been with Salesforce for 8 years building developer tools. Although historically a java developer, Thomas is a javascript, node and beer enthusiast. He currently lives in Denver with his wife and 6 month old daughter."
  },
  {
    "id": "jeff-dickey",
    "avatar": "jeff-dickey.jpg",
    "name": "Jeff Dickey",
    "title": "Software Engineer, oclif founding team",
    "bio": "Jeff led development for the Heroku CLI for over 5 years and was lead engineer for oclif from its inception. He is currently a back-end engineer at Dropbox."
  },
  {
    "id": "jesse-macfadyen",
    "avatar": "jesse-macfadyen.jpg",
    "name": "Jesse MacFadyen",
    "title": "Sr. Computer Scientist at Adobe & VP Apache Cordova",
    "bio": "A PhoneGap contributor since day 1 and a Cordova committer since day 0. Jesse is part of a team working on developer tooling to uniformly access multiple Adobe Experience Cloud APIs and services and extensibly enable the next generation of creative apps."
  },
  // {
  //   "id": "evans-hauser",
  //   "avatar": "evans-hauser.jpg",
  //   "name": "Evans Hauser",
  //   "title": "Open Source Engineer"
  // },
  // {
  //   "id": "nahid-samsami",
  //   "avatar": "nahid-samsami.jpg",
  //   "name": "Nahid Samsami",
  //   "title": "Director of Product @ Heroku, oclif core member"
  // },
  // {
  //   "id": "chris-castle",
  //   "avatar": "chris-castle.jpg",
  //   "name": "Chris Castle",
  //   "title": "oclif core team"
  // },
]

class Conf extends React.Component {
  render() {
    return (
      <div className='oclifconfWrapper'>
        <div className='page-content'>
          <header>
            <div className='center mw8 pv5'>
              <h1><img
                src={siteConfig.baseUrl + 'img/oclifconf-logo.svg'}
                alt="oclifconf"
                width="300"
              /></h1>
              <h2 className="f3 white o-70 mt0 mb1">San Francisco</h2>
              <h2 className="ttu tracked f5 white o-70 mv0">Friday May 31st, 2019</h2>
            </div>
            </header>
          <div className='center tl mw7 mv5 ph4'>
            <p className='f4'><strong>oclifconf</strong> is the inaugural in-person event for the oclif community, organized by Heroku &amp; Salesforce Open Source. oclifconf is a one-day, single-track conference for developers &amp; product managers building CLI tools. This will be the first gathering of the oclif community and will feature speakers from a range of companies building&nbsp;on&nbsp;oclif.</p>
          </div>

          <div className='center mw7 mv5 ph4'>
            <hr />
            <ul className='list pl0 f4 pv4'>
              <li className='dark-gray'>Terra Gallery & Events</li>
              <li className='gray'>511 Harrison St, San Francisco, CA 94105</li>
              <li className='gray'>Friday, May 31, 2019</li>
              <li className='gray'>9am - 3:45pm PDT followed by Happy&nbsp;Hour</li>
            </ul>
            <hr />
          </div>

          <div className='pt4 pb7 sf relative'>
            <h2 className="f4 o-70 mt0 tc">Speakers</h2>
            <div className='flex flex-wrap mw8 center justify-start ph4'>
              {speakers && speakers.map((speaker) =>
                <div className='pv4 w-100 w-50-l mw6 pa2 flex tl'>
                  <img
                    className='avatar bg-lighter-gray ba b--white bw1 br-100'
                    src={`${siteConfig.baseUrl}img/avatars/${speaker.avatar}`}
                    alt="Speaker photo placeholder"
                    width="96"
                    height="96"
                  />
                  <div className='pl3'>
                    <div className=''>
                      <h2 className='mt0 mb2 f4 pr2 dark-gray'>{speaker.name}</h2>
                      <h3 className='mv0 f5 mid-gray'>{speaker.title}</h3>
                    </div>
                    {speaker.bio && <p className='mid-gray mt2 mb0 f6 w-90'>{speaker.bio}</p>}
                  </div>
                </div>
              )}
            </div>
          
          </div>

          <div className='center tl mw7 mv5 schedule'>
            <h2 className="f4 o-70 mt0 center">Schedule</h2>
            
            <div className="ph4">
              <div className="overflow-auto">
                <table className="w-100 mw6 center dt dt--fixed" cellspacing="0">
                  <tbody className="lh-copy">
                    {schedule && schedule.map((event) =>
                      <tr className='bg--none'>
                        <td className="pv3 gray bg-white tr bn bb b--black-20">{event.time}</td>
                        <td className="pv3 bg-white tl bn bb b--black-20 w-70">
                          <div className="dark-gray">{event.content}</div>
                          {event.title && event.speaker &&
                            <div className="flex mt2">
                              {event.avatar && <img
                                className='avatar bg-lighter-gray ba b--white bw1 br-100'
                                src={`${siteConfig.baseUrl}img/avatars/${event.avatar}`}
                                alt="Speaker photo placeholder"
                                width="30"
                                height="30"
                              />}
                              <div>
                                <div>{event.title}</div>
                                <div className="f6">{event.speaker}</div>
                              </div>
                            </div>
                          }
                          {event.description && <div className="gray f6 mt2">{event.description}</div>}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          <div className='center tl mw6 mv5 ph4'>
            <h2 className="f4 o-70 mt0 tc">Q&amp;A</h2>
            <dl>
              <dt className="fw7">How do I attend oclifconf?</dt>
              <dd>If you haven't already received an invite, <a className="blue" href="https://docs.google.com/forms/d/e/1FAIpQLScbGeMH-Nk_U5md_IdYh1L2nobBYdfEczPa5kFh9fBVPY0qHg/viewform">request one here</a>! oclifconf is limited in size and invites are emailed on a rolling&nbsp;basis.</dd>
            </dl>
          </div>

          <div className='center tl mw6 mv5 ph4 tc'>
            <h2 className="f4 o-70 mt0">Links</h2>
            <a className="blue" href="https://success.salesforce.com/Ev_SiteCOC">Code of conduct</a>
          </div>

        </div>
      </div>
    )
  }
}

module.exports = Conf;
