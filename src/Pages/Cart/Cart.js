import React from "react";
import CartCSS from './Cart.module.css';
import NavBar from "../../components/NavBar/NavBar/NavBar";

const Cart = () => {
    return(
        <div className={CartCSS.CartPage}>
            <NavBar />
            <div>
                <section className={CartCSS.CartSection}>
                    <h1>Cart</h1>
                    <h3>Your Cart is Empty</h3>
                </section>
                <section className={CartCSS.DetailsSection}>
                    <h1>Details</h1>
                </section>
            </div>
        </div>
    )
};

export default Cart;