import React from 'react'
import Link from 'gatsby-link'
import styles from './landing.module.css'
import Illustration1 from '../assets/images/illustration-1.svg'
import Illustration2 from '../assets/images/illustration-2.svg'
import team from '../assets/images/team.svg'
import support from '../assets/images/support.svg'
import tools from '../assets/images/tools.svg'
import mackbook from '../assets/images/macbook.svg';
import illustration3  from '../assets/images/illustration-3.svg';
import browser  from '../assets/images/browser.svg';

export default () => (
  <React.Fragment>
    <section className={`${styles.section1} flex px4 pt4 blueGray`}>
      <div className="col-6 pt5">
        <h1>A whole new way to invest in real estate.</h1>
        <h2>
          Introducing the first private market real estate investing platform
        </h2>
        <Link
          className="blue rounded text-white blue-shadow my3 px2 py1 inline-block"
          to=""
        >
          Join now
        </Link>
      </div>
      <div className="col-6 flex justify-end">
        <img src={Illustration1} alt="" />
      </div>
    </section>
    <div className="py4 max-width-3 mx-auto">
      <h1 className="center">
        Your way to turn a bad situation into a memorable customer experience
      </h1>
    </div>
    <div className={styles.section2}>
      <section className="px4 py4 flex">
        <div className="col-6 pr2">
          <h2 className="text-green">SUPPORT &amp; DEV TEAMS</h2>
          <h1 className="pb2">Cut support costs</h1>
          <p>
            Whether it's a server issue, bug in production, or DDoS attack, the
            simple truth is that downtime happens. Launch your status page to
            ditch the flood of support emails and let your team focus on fixing
            the problem at hand.
          </p>
        </div>
        <div className="col-6 flex justify-end relative">
          <img src={mackbook} alt="" className="absolute"/>
        </div>
      </section>
      <section className="px4 py5 flex">
        <div className="col-6 relative">
          <img src={illustration3} alt="" className="absolute"/>
        </div>
        <div className="col-6">
          <h2 className="text-green">END USERS</h2>
          <h1 className="pb2">Build customer trust</h1>
          <p>
            Customers value transparency. Allow them to opt into real-time
            incident and scheduled maintenance notifications via Email, SMS, or
            Webhook. Trust us, they’ll thank you.
          </p>
        </div>
      </section>
      <section className="px4 py5 flex">
        <div className="col-6 pr2">
          <h2 className="text-green">SALES &amp; MARKETING TEAMS</h2>
          <h1 className="pb2">Showcase reliability</h1>
          <p>
            Downtime communication is only part of the story when it comes to
            status pages. Tell the other 99.95% of your story with Uptime Showcase
            by surfacing your availability and reliability to prospective
            customers.
          </p>
        </div>
        <div className="col-6 flex justify-end relative z1">
          <img src={browser} alt="" className="absolute"/>
        </div>
      </section>
    </div>
    <section className={`${styles.section3} px4 py4 blueGray relative z2`}>
      <div className="max-width-3 mx-auto pb4">
        <h1 className="center text-white">How it works?</h1>
      </div>
      <div className="flex">
        <div className="col-6 flex px3  justify-center items-center">
          <img src={Illustration2} alt="" />
        </div>
        <div className="col-6">
          <div className="flex py2">
            <div className="col-2 ">
              <img src={team} alt="team" />
            </div>
            <div className="pl2">
              <h2 className="text-white mb2">DevOps Teams</h2>
              <p className="text-white">
                When servers are on fire, your team needs to be focused on
                fixing the issue at hand - not responding to an endless amount
                of internal emails. With Statuspage, your Dev and Operations
                teams can communicate efficiently and effectively, giving you
                the space needed to resolve incidents.
              </p>
            </div>
          </div>
          <div className="flex py2">
            <div className="col-2 ">
              <img src={support} alt="support" />
            </div>
            <div className="pl2">
              <h2 className="text-white mb2">Support Teams</h2>
              <p className="text-white">
                When servers are on fire, your team needs to be focused on
                fixing the issue at hand - not responding to an endless amount
                of internal emails. With Statuspage, your Dev and Operations
                teams can communicate efficiently and effectively, giving you
                the space needed to resolve incidents.
              </p>
            </div>
          </div>
          <div className="flex py2">
            <div className="col-2 ">
              <img src={tools} alt="" />
            </div>
            <div className="pl2">
              <h2 className="text-white mb2">IT Teams</h2>
              <p className="text-white">
                When servers are on fire, your team needs to be focused on
                fixing the issue at hand - not responding to an endless amount
                of internal emails. With Statuspage, your Dev and Operations
                teams can communicate efficiently and effectively, giving you
                the space needed to resolve incidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)
