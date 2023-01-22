import React from 'react';
import HomeNavBarCSS from './HomeNavBar.module.css';
import { Link } from 'react-router-dom';

const HomeNavBar = () => (
    <nav className = {HomeNavBarCSS.nav}>
        <h1><Link to='/'>Outer Heaven</Link></h1>
        <ul>
            <li><Link to='news'>News</Link></li>
            <li><Link to='store'>Store</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>
);

export default HomeNavBar