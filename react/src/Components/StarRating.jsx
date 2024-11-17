
import React from 'react'
import starRatingFour from '../assets/ratingyellow.svg'
import starRatingFive from '../assets/ratingyellow2.svg'

const StarRating = ({ rating }) => {

  const starImage = rating === 5 ? starRatingFive : starRatingFour 

  return (
    <div className="star-rating">
      <img src={starImage} alt={`${rating} star rating`} />
    </div>
  )
}

export default StarRating
