import React from "react";
import CartCSS from './Cart.module.css';
import NavBar from "../../components/NavBar/NavBar/NavBar";
import cartsvg from '../../Assets/Images/cart.svg'
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {

    const data = useSelector((state) => state)

    console.log('this is the data', data)

    const cart = {
        e:'Your Cart Is Empty',
        o: 'There is a Game In Your Cart',
        f: `There are ${data.value} Games In Your Cart`,
    }

    let comp;

    if(data.value === 0)
    {
        comp = cart.e
    }
    else if(data.value === 1)
    {
        comp = cart.o
    }
    else
    {
        comp = cart.f
    }

    const total = data.games.reduce((acc, obj) => {
        return acc + obj.price;
    }, 0);

    console.log(total)

    return(
        <div className={CartCSS.CartPage}>
            <NavBar />
            <div>
                <section className={CartCSS.CartSection}>
                    <h1 style={{textAlign:'left'}}>Cart</h1>
                    <img style={{display: data.games.length ? 'none' : 'block'}} src={cartsvg}/>
                    {/* <h3>{comp}</h3> */}
                    {data.games.map((g, index) => <CartCard key={index} title={g.title} img={g.img} />)}
                </section>
                <section style={{display: data.games.length ? 'block' : 'none'}} className={CartCSS.DetailsSection}>
                    <h1>Order Summary</h1>
                    <h4>Total: {total}$</h4>
                    <button className="p-2 mt-2">Checkout</button>
                </section>
            </div>
        </div>
    )
};

export default Cart;