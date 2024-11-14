import React from 'react'
import Appstore from '../assets/App store.svg'
import googleplaylight from '../assets/googleplaylight.svg'
import iphonemybudget from '../assets/iphonemybudget.svg'
import Iphonevisa from '../assets/Iphonevisa.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money In One App</h1>
            </div>
            <div className="content">
                <p>We offer you a new generation of the mobile
                    banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-app" href="#"><img src={Appstore} alt="appstore"/></a>
                    <a className="btn-app" href="#"><img src={googleplaylight} alt="googleplay"/></a>
                </div>

                <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>

            <div className="iphone-images">
                <img className="img-back" src={iphonemybudget} alt="iphonemybudget"/>
                <img className="img-front" src={Iphonevisa} alt="iphonevisa"/>
            </div>
        </div>
    </section>
  )
}

export default Hero