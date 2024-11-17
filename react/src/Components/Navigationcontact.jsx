import React from 'react'
import map from '../assets/map.svg'
import naviconic from '../assets/naviconic.svg'
import phonecalliconic from '../assets/phonecalliconic.svg'
import timericonic from '../assets/timericonic.svg'
import facebookicon from '../assets/facebookicon.svg'
import twittericon from '../assets/twittericon.svg'
import instagramicon from '../assets/instagramicon.svg'
import youtubeicon from '../assets/youtubeicon.svg'

const Navigationcontact = () => {
  return (
    <div className="Navigationcontact">
      <div className="container">
        <div className="map-view">
          <img className="map" src={map} alt="map image"/>
        </div>

        <div className="medicalcenter">
          <div className="medicalcenter1">
            <h1>Medical Center 1</h1>
            <div className="icons-options">
              <div className="flexall">
                <img src={naviconic} alt=""/>
                <p className="imagetextflex">4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="flexall">
                <img src={phonecalliconic} alt="" />
                <p className="imagetextflex">(406) 555-0120</p>
              </div>
                <p className="flexcolumn">
                  <img className="timericonic" src={timericonic} alt="" />
                  <span className="days">Mon - Fri:</span><span className="secondrow1">9:00 am - 22:00 am<br/></span>
                  <span className="days1">Sat - Sun:</span><span className="secondrow"> 9:00 am - 20:00 am</span>
                </p>
            </div>
      
          </div>

          <div className="medicalcenter2">
            <h1>Medical Center 2</h1>
            <div className="icons-options">
              <div className="flexall">
                <img src={naviconic} alt=""/>
                <p className="imagetextflex">4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="flexall">
                <img src={phonecalliconic} alt="" />
                <p className="imagetextflex">(406) 555-0120</p>
              </div>
              
                <p className="flexcolumn">
                  <img className="timericonic" src={timericonic} alt="" />
                  <span className="days">Mon - Fri:</span><span className="secondrow1"> 9:00 am - 22:00 am<br/></span>
                  <span className="days1">Sat - Sun:</span><span className="secondrow"> 9:00 am - 20:00 am</span>
                </p>
            </div>
      
          </div>

          <div className="socialmedia">
            <img src={facebookicon} alt="facebook icon" />
            <img src={twittericon} alt="twittericon" />
            <img src={instagramicon} alt="instagramicon" />
            <img src={youtubeicon} alt="youtubeicon" />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Navigationcontact