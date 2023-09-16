import React from 'react';
import CartCardCSS from './CartCard.module.css';

const CartCard = ({ title, img, price }) => {

  return (

    <div className={CartCardCSS.CartCard}>
        <div style={{width:'30%'}}>
            <img src={img} alt={img}/>
        </div>
        <div style={{display: 'flex', flexDirection:'column', width: '70%'}}>
            <h3>{title}</h3>
            <h6>{price}</h6>
        </div>
    </div>
  )

};

export default CartCard;