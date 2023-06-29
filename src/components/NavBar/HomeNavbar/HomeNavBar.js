import React from 'react';
import HomeNavBarCSS from './HomeNavBar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Images/OuterHeaven.png';
import User from '../../../Assets/Images/DRDis.jpg'

const HomeNavBar = () => (
    <nav className = {HomeNavBarCSS.nav}>
        <h1>
            <img src={Logo}/>
            <Link to='/' className='mx-2'>Outer Heaven</Link>
        </h1>
        <ul>
            <li><Link to='news'>News</Link></li>
            <li><Link to='store'>Store</Link></li>
            <li><Link to='cart'>Cart</Link></li>
            <li>
                <Link to='cart'>
                    <img src={User}/>
                </Link>
            </li>
        </ul>
    </nav>
);

export default HomeNavBar