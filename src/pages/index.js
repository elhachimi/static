import React from 'react'
import Link from 'gatsby-link'
import styles from './landing.module.css';
import Illustration from '../assets/images/illustration-1.svg'

export default () => (
  <section className={`${styles.section1} flex px3 pt3 blueGray`}>
    <div className="col-6 pt5">
      <h1>A whole new way to invest in real estate.</h1>
      <h2>
        Introducing the first private market real estate investing platform
      </h2>
      <Link className="blue rounded text-white blue-shadow my3 px2 py1 inline-block" to="">Join now</Link>
    </div>
    <div className="col-6 flex justify-center">
      <img src={Illustration} alt="" />
    </div>
  </section>
)
