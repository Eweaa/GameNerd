import React from "react";
import CartCSS from './Cart.module.css';
import NavBar from "../../components/NavBar/NavBar/NavBar";

const Cart = () => {

    const data = []

    const cart = {
        e:'Your Cart Is Empty',
        f: 'There Something In Your Cart'
    }

    let comp;

    if( data.length === 0 )
    {
        comp = cart.e
    }
    else
    {
        comp = cart.f
    }


    return(
        <div className={CartCSS.CartPage}>
            <NavBar />
            <div>
                <section className={CartCSS.CartSection}>
                    <h1>Cart</h1>
                    <h3>{comp}</h3>
                </section>
                <section style={{display: data.length ? 'block' : 'none'}} className={CartCSS.DetailsSection}>
                    <h1>Details</h1>
                </section>
            </div>
        </div>
    )
};

export default Cart;