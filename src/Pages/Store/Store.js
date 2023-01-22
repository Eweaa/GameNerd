import React from "react";
import StoreCSS from './Store.module.css';
import NavBar from "../../components/NavBar/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../Auth/cart-slice";

const Store = () => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(CartActions.addToCart({
            
        }))
    }
    return(
        <div className={StoreCSS.StorePage}>
            <NavBar />
            <div style={{'padding':'0 2rem 2rem 2rem'}}>
                <h1>Store</h1>
                <section>
                    <Link to='/'>Free Games</Link>
                </section>
                <section>
                    <Link to='/'>Top Sellers</Link>
                </section>
                <section>
                    <Link to='/'>Most Popular</Link>
                </section>
                <section>
                    <Link to='/'>New Releases</Link>
                </section>
            </div>
        </div>
    )
};

export default Store;