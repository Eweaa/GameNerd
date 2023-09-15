import React, { useState } from 'react';
import HomeNavBarCSS from './HomeNavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../Assets/Images/OuterHeaven.png';
import User from '../../../Assets/Images/DRDis.jpg'
import { useAuth } from '../../../Auth/AuthContext';
import { useSelector } from 'react-redux';

const HomeNavBar = () => {

    const cart = useSelector((state) => state.value);

    const {currentUser, logout} = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            setError(' ')
            await logout();
            navigate('/login')
        } catch {
            setError('Failed to logout')
        }
    }

    return(
        <nav className = {HomeNavBarCSS.nav}>
            <h1>
                <img src={Logo}/>
                <Link to='/' className='mx-2'>Outer Heaven</Link>
            </h1>
            <ul>
                <li><Link to='news'>News</Link></li>
                <li><Link to='store'>Store</Link></li>
                <li><Link to='cart'>Cart {cart}</Link></li>
                <li>
                    <button onClick={handleLogout}>
                        <img src={User}/>
                    </button>
                </li>
            </ul>
        </nav>   
    )
};

export default HomeNavBar