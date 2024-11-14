import React from 'react'
import phoneeicon from '../assets/phoneeicon.svg'
import messageicon from '../assets/messageicon.svg'
const Faq = () => {
  return (
    <section className="faq">
        <div className="container">
            <div className="left-content">
              <h1>Any questions? Check out the FAQs</h1>
              <p>Still have unanswered questions and need to get in touch?</p>
                <div className="contact-boxes">
                    <div className="box-item1">
                        <img src={phoneeicon} alt="phone icon"/>
                        <span>Still have questions?</span>
                        <a href="#" className="primary">Contact us
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                    <div className="box-item1">
                        <img src={messageicon} alt="message icon"/>
                        <span>Don't like phone calls?</span>
                        <a href="#" className="success">Contact us
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <div className="accordion">
                    <div id="item-1" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>Is any of my personal information
                            stored in the App?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                            Nunc duis id aenean gravida tincidunt eu, tempor
                            ullamcorper.
                        </p>
                      
                    </div>
                    <div id="item-2" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>What formats can I download my transaction history in?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                            Nunc duis id aenean gravida tincidunt eu, tempor
                            ullamcorper.
                        </p>
                      
                    </div>
                    <div id="item-3" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>Can I schedule future transfers?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                            Nunc duis id aenean gravida tincidunt eu, tempor
                            ullamcorper.
                        </p>
                      
                    </div>
                    <div id="item-4" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>When can I use Banking App services?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                        </p>
                      
                    </div>
                    <div id="item-5" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>Can I create my own password that is easy for me to remember?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur iste quo consectetur magnam dolorum maiores consequuntur necessita.
                      </p>
                      
                    </div>
                    <div id="item-6" className="accordion-item">
                        <div className="item-titlebar">
                            <h1>What happens if I forget or lose my password?</h1>
                            <div className="btn btn-accordion">
                                <i className="item-icon fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <p className="item-content">
                            Nunc duis id aenean gravida tincidunt eu, tempor
                            ullamcorper.
                        </p>
                      
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Faq