import React from 'react'
import bellicon from '../assets/bell-icon.svg'
const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
          <div className="content">
              <div className="bell-text">
                  <img className="bell" src={bellicon} alt="bell icon"/>
                  <h1>Subscribe to our newsletter</h1>
                  <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
              </div>
              <h3 className="texttablet">Subscribe to our newsletter</h3>

                
              <div className="input-group">
                  <i className="fa-regular fa-envelope"></i>
                  <input className="form-input email" type="email" placeholder="Your Email"/>
                  <button className="btnsubscribe">Subscribe</button>
              </div>

              
          </div>
      </div>
    </section>
  )
}

export default Subscription