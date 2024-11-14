import React from 'react'
import imagecontacts from '../assets/imagecontacts.svg'
import imagedollars from '../assets/imagedollars.svg'
import creditcardicon from '../assets/credit-cardicon.svg'
import walleticon from '../assets/walleticon.svg'


const Imagestext = () => {
  return (
    <section className="images-text">
      <div className="container">
          <div className="textleft">
              <h2>Make your money transfer simple and clear</h2>
              <ul className="list">
                  <li>Banking transcations are free for you</li>
                  <li>No monthly cash commission</li>
                  <li>Manage payments and transactions online</li>
              </ul>

              <a id="learn-more" href="#" className="btn-learn-more">
                  <span>Learn more</span> 
                  <i className="fa-solid fa-arrow-right"></i>
              </a>
              <div className="contacts">
                  <img src={imagecontacts} alt="contacts image left"/>
              </div>

          </div>

          <div className="textright">
              <div className="imagedollars">
                  <img src={imagedollars} alt="dollars image right"/>
              </div>
              <h3>Receive payment from international bank details</h3>
              <div className="information">
                  <div className="information-icon">
                      <img src={creditcardicon} alt="credit card"/>
                      <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                  </div>
                  <div className="information-icon">
                      <div className="wallet-icon">
                          <img src={walleticon} alt="wallet icon"/>
                          <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                      </div>
                  </div>
              </div>
              <a id="learn-more1" href="#" className="btn-learn-more">
                  <span>Learn more</span> 
                  <i className="fa-solid fa-arrow-right"></i>
              </a>
          </div>


      </div>
    </section>
  )
}

export default Imagestext