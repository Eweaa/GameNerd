import React from 'react';
import CircleRatingCSS from './CircleRating.module.css'

const CircleRating = ({ Rating, org }) => {
  return (
    <div className={[CircleRatingCSS.main, 'mx-4'].join(' ')}>
        <div className={CircleRatingCSS.CR}>
            {Rating}
        </div>
        {org}
    </div>
  )
}

export default CircleRating