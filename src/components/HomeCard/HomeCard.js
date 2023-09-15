import React from "react";
import HomeCardCSS from './HomeCard.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../store";

const HomeCard = (props) => {

    const dispatch = useDispatch();
    const add = () => dispatch(actions.add())

  return (
    <div className={HomeCardCSS.CardContainer} style={{position: 'relative'}}>
        <button className={HomeCardCSS.HCB} onClick={add}>+</button>
        <Link to={['/game/', props.title].join('')} className={HomeCardCSS.HomeCard}>
            <div className={HomeCardCSS.Cover}>
                <img src={props.img}/>
            </div>
            <div className={[HomeCardCSS.Details, 'mt-1'].join(' ')}>
                <h6>{props.title}</h6>
                <p>${props.price}</p>
            </div>
        </Link>
    </div>
  )
}

export default HomeCard