
import React from 'react'
import StarRating from './Starrating'
import quotesblue from '../assets/quotesblue.svg'

const Testimonials = ({item}) => {
  return (
      <div className="testimonial-card">

          <div className="quote-citat">
            <img src={quotesblue} alt="blue quote"/>
          </div>
          <div className="rating">
            <StarRating rating={item.rating}/>
          </div>
          <p className="text">{item.comment}</p>
          <div className="image-user">
              <img src={item.avatarUrl} alt={item.author}/>
              <div className="name-worktitle">
                  <p className="name">{item.author}</p>
                  <p className="worktitle">{item.jobRole}</p>
              </div>
          </div>
      </div>
  )
}

export default Testimonials