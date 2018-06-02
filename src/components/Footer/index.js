import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import Logo from '../../assets/images/Logo'
import twitter from '../../assets/images/twitter.svg'
import pinterest from '../../assets/images/pinterest.svg'
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'

const Footer = () => (
  <footer className="px3">
    <div className={`${styles.footer} flex py4`}>
      <div className="col-4">
        <Logo />
      </div>
      <div className="col-2">
        <h2>Product</h2>
        <ul>
          <li>
            <Link to="">Popular</Link>
          </li>
          <li>
            <Link to="">Trending</Link>
          </li>
          <li>
            <Link to="">Catalog</Link>
          </li>
          <li>
            <Link to="">Features</Link>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <h2>Comunity</h2>
        <ul>
          <li>
            <Link to="">Press Releases</Link>
          </li>
          <li>
            <Link to="">Mission</Link>
          </li>
          <li>
            <Link to="">Strategy</Link>
          </li>
          <li>
            <Link to="">Works</Link>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <h2>Support</h2>
        <ul>
          <li>
            <Link to="">Support</Link>
          </li>
          <li>
            <Link to="">Developers</Link>
          </li>
          <li>
            <Link to="">Customer Service</Link>
          </li>
          <li>
            <Link to="">Get Started Guide</Link>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <h2>Legal</h2>
        <ul>
          <li>
            <Link to="">Customer Agreement</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">Security</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex pt3 pb4">
      <div className="col-8 flex justify-between">
        <Link to="">Languages</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">Terms &amp; Conidtions</Link>
        <span>&copy; 2018 Mercycircles. All rights reserved.</span>
      </div>
      <div className="col-2 col-offset-2 flex justify-between">
        <Link to="">
          <img src={facebook} />
        </Link>
        <Link to="">
          <img src={twitter} />
        </Link>
        <Link to="">
          <img src={linkedin} />
        </Link>
        <Link to="">
          <img src={pinterest} />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
