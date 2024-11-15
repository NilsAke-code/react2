import React, { useEffect, useState } from 'react'
import phoneeicon from '../assets/phoneeicon.svg'
import messageicon from '../assets/messageicon.svg'
import AccordionItem from './AccordionItem'

const Faq = () => {
    const [accordions,setAccordions] = useState([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }

    useEffect(() => {
        fetchFaq()
    }, [])


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

                        {
                            accordions.map(item => (
                               <AccordionItem key={item.id} item={item} />
                            ))
                        }


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq