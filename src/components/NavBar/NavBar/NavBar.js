import React from "react";
import {Link} from 'react-router-dom';
import NavBarCSS from './Navbar.module.css';

const NavBar = () => (
    <nav style={{position:'static'}}>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/store'>Store</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    </nav>
);

export default NavBar