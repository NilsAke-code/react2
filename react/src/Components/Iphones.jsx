import React from 'react'

import iphonestocksleft from '../assets/iphonestocksleft.svg'
import ProCenter from '../assets/iPhone 12 Pro Center.svg'
import iphonetransferright from '../assets/iphonetransferright.svg'
import tabletleft from '../assets/tabletleft.svg'
import transferCENTER from '../assets/transferCENTER.svg'
import tabletright from '../assets/tabletright.svg'
import Containermobile from '../assets/Containermobile.svg'


const Iphones = () => {
  return (
    <section className="iphones">

      <div className="container">
          <h1 className="rubrik">How Does It Work?</h1>

          <div className="caroussel">
              <div className="caroussel-item">
                  <img src={iphonestocksleft} alt="desktop left"/>
              </div>
              <div className="caroussel-item">
                  <img src={ProCenter} alt="desktop center"/>
              </div>
              <div className="caroussel-item">
                  <img src={iphonetransferright} alt="desktop right"/>
              </div>
          </div>
          <div className="tablet">

              <div className="tablet-läget">
                  <img src={tabletleft} alt="Tablet vänster"/>
              </div>
              <div className="tablet-läget">
                  <img src={transferCENTER} alt="Tablet center"/>
              </div>
              <div className="tablet-läget">
                  <img src={tabletright} alt="Tablet right"/>
              </div>
          </div>

          <div className="mobile">
              <div className="mobile-läget">
                  <img src={Containermobile} alt="Mobile"/>
              </div>
          </div>

          <div className="history">
              <h2>Latest transaction history</h2>
              <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
          </div>
          <div className="step3">
              <h3>Step 3. Transfers to people from your
                  contact list</h3>
                  <h4>Transfers to people from your
                      contact list</h4>
              <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                  Pellentesque volutpat ligula est. Mattis fermentum, at nec
                  lacus.</p>
          </div>

      </div>
    </section>
  )
}

export default Iphones