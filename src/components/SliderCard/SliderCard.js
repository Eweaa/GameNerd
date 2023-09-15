import React from 'react';
import { Link } from 'react-router-dom';
import SliderCardCSS from './SliderCard.module.css'

const SliderCard = (props) => {
  return (
    <Link to={['/game/', props.title].join('')} className={SliderCardCSS.HomeCard}>
        <div className={SliderCardCSS.Cover}>
            <img src={props.img}/>
        </div>
        <div className={[SliderCardCSS.Details, 'mt-1'].join(' ')}>
            <h6>{props.title}</h6>
            <p>${props.price}</p>
        </div>
    </Link>
  )
}

export default SliderCard