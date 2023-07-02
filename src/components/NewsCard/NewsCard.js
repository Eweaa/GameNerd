import React from "react";
import NewsCardCSS from './NewsCard.module.css';
import {Link} from 'react-router-dom';
import RDR2I from '../../Assets/Images/RDR2.jpg';


const NewsCard = (props) => (
    <div className={NewsCardCSS.NewsCard}>
        <Link to='/'>
            <div className={NewsCardCSS.NewsImg}>
                <img src={props.img}/>        
            </div>
            <div className={NewsCardCSS.NewsTxt}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </Link>
    </div>
);

export default NewsCard