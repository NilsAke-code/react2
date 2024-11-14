import React from 'react'
import Testimonials from './Testimonials'
import Fannie from '../assets/Fannie.svg'
import Albert from '../assets/Albert.svg'

const SectionTestimonials = () => {

  const testimonials = [
    {
      rating: 4,
      comment: "Working with this team has been a fantastic experience! They understood my vision and delivered a design that exceeded my expectations. I would definitely recommend them.",
      avatarUrl: Fannie,
      author: "Fannie Summers",
      jobRole: "Designer"
    },
    {
      rating: 5,
      comment: "The project ran smoothly, and their technical expertise was evident from start to finish. Everything was delivered on time and exceeded our requirements. Full marks for their professionalism.",
      avatarUrl: Albert,
      author: "Albert Flores",
      jobRole: "Developer"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="headlineleft">
          <h1>Clients are Loving Our App</h1>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Testimonials key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials