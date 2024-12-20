import React from 'react'
import Emailusicon from '../assets/Emailusicon.svg'
import Careersicon from '../assets/Careersicon.svg'
import Header from './Header'
import SpecialistForm from './SpecialistForm'


const Hero2 = () => {
  return (
    <div className="hero2">
            <div className="hero2-header">
              <Header />
              <a className="nav-contact" href="">Contact</a>
            </div>

      <div className="page">
        <div className="container">
          <div className="leftside">
              <nav className="nav-options">
                  <i className="fa-solid fa-house"></i>
                  <a className="Homepage-link1" href="#">Homepage
                  </a>
                  <i className="fa-solid fa-angles-right"></i>
                  <a className="Homepage-link" href="#">Contact
                  </a>
              </nav>
              <h1>Contact us</h1>

              <div className="contact-boxes2">
                  <div className="box-content1">
                    <div className="flexcontent">
                      <img src={Emailusicon} alt="email us icon" />
                      <h2>Email us</h2>
                    </div>
                      <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                      <a href="#">Leave a message
                      <i className="fa-solid fa-arrow-right"></i>
                      </a>
                  </div>

                  <div className="box-content1">
                    <div className="flexcontent">
                        <img src={Careersicon} alt="careers icon" />
                        <h2>Careers</h2>
                    </div>
                        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                        <a href="#">Send an application
                        <i className="fa-solid fa-arrow-right"></i>
                        </a>
                  </div>
              </div>
          </div>
          <SpecialistForm />

        </div>
      </div>
    </div>
  ) 
}

export default Hero2