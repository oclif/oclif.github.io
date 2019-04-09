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
    "time": "9:00 am",
    "length": 60,
    "content": "Doors & coffee, breakfast (provided)"
  },
  {
    "time": "10:00 am",
    "length": 150,
    "content": "Presentations & breaks"
  },
  {
    "time": "12:30 pm",
    "length": 75,
    "content": "Lunch (provided)"
  },
  {
    "time": "1:45 pm",
    "length": 165,
    "content": "Presentations & breaks"
  },
  {
    "time": "4:30 pm",
    "length": 180,
    "content": "Happy hour!"
  }
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
              <h2 className="ttu tracked f4 white o-70 mt0 mb1">San Francisco</h2>
              <h2 className="ttu tracked f5 white o-70 mv0">Friday May 31st, 2019</h2>
            </div>
            </header>
          <div className='center tl mw7 mv5 ph4'>
            <p className='f4'><strong>oclifconf</strong> is the inaugural in-person event for the oclif community, organized by Heroku &amp; Salesforce Open Source. oclifconf is a one-day, single-track conference for developers &amp; product managers building CLI tools. This will be the first gathering of the oclif community and will feature speakers from a range of companies building&nbsp;on&nbsp;oclif.</p>
          </div>

          <div className='bg-near-white pt4 pb6 sf relative z-1'>
            <div className='center mw7 mv5 ph4'>
              <ul className='list pl0 f4 pb4'>
                <li className='dark-gray'>San Francisco (venue TBD)</li>
                <li className='gray'>Friday, May 31, 2019</li>
                <li className='gray'>9am - 4:30pm PDT followed by Happy&nbsp;Hour</li>
              </ul>
            </div>
          </div>

          <div className='center tl mw7 mv5'>
            <h2 className="f4 o-70 mt0 center">Schedule</h2>
            
            <div className="ph4">
              <div className="overflow-auto">
                <table className="w-100 mw6 center dt dt--fixed" cellspacing="0">
                  <tbody className="lh-copy">
                    {schedule && schedule.map((event) =>
                      <tr className='bg--none'>
                        <td className="pv2 gray bg-white tr bn bb b--black-20">{event.time}</td>
                        {/* <td className="pv2 gray bg-white tc bn bb b--black-20">{event.length && `${event.length} minutes`}</td> */}
                        <td className="pv2 bg-white tl bn bb b--black-20 w-60">{event.content}</td>
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

          <div className='center tl mw6 mv5 ph4'>
            <h2 className="f4 o-70 mt0 tc">CFP</h2>
            <p>We would love to hear from you! Consider presenting at oclifconf, by <a className="blue" href="https://docs.google.com/forms/d/e/1FAIpQLSeseVhOGzx49IpApX3aSNWNs9ITWSWVOk89Qek0DsQo_h4Aqg/viewform">submitting a talk to our CFP</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Conf;
