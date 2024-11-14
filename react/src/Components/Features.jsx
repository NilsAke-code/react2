import React from 'react'
import iphonevisapopped from '../assets/iphonevisapopped.svg'

import creditcard from '../assets/credit-card.svg'
import shield from '../assets/shield.svg'
import barsgraphic from '../assets/bars-graphic.svg'
import communication from '../assets/communication.svg'
import Group from '../assets/Group.svg'
import happy from '../assets/happy.svg'




const Features = () => {
  return (
    <section className="features">

        <div className="container">

            <div className="iphone">
                <img src={iphonevisapopped} alt="Iphone visa card popped out"/>
            </div>
            <div className="text">
                <h1>App Features</h1>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            

                <div className="icon-box-grid">

                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={creditcard} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Easy Payments</h2>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
            
                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={shield} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Data Security</h2>
                            <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                        </div>
                    </div>
                
                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={barsgraphic} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Cost Statistics</h2>
                            <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                        </div>
                    </div>
                
                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={communication} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Support 24/7</h2>
                            <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                        </div>
                    </div>
                
                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={Group} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Regular Cashback</h2>
                            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                        </div>
                    </div>
                
                    <div className="icon-box">
                        <div className="icon-picture">
                            <img src={happy} alt=""/>
                        </div>
                        <div>
                            <h2 className="small-headline">Top Standards</h2>
                            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Features