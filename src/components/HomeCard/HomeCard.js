import React from "react";
import HomeCardCSS from './HomeCard.module.css';
import { Link } from "react-router-dom";

const HomeCard = (props) => (
    <div className={HomeCardCSS.HomeCard}>
        <Link to={['game/', props.title].join('')}>
            <div className={HomeCardCSS.Cover}>
                <img src={props.img}/>
            </div>
            <div className={HomeCardCSS.Details}>
                <h4>{props.title}</h4>
                <p>${props.price}</p>
            </div>
        </Link>
    </div>
);

export default HomeCard;