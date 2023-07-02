import React from "react";
import HomeCSS from './Home.module.css';
import HomeNavBar from "../../components/NavBar/HomeNavbar/HomeNavBar";
import BV from '../../Assets/Videos/TheBeautyOfDeathStranding.mp4';
import HomeCard from "../../components/HomeCard/HomeCard";
import { Link } from "react-router-dom";
import RDR2 from '../../Assets/Images/RDR2.jpg'

const data = [
    {
        title: 'Red Dead Redemption 2',
        price: '59.99',
        img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
    },
    {
        title: 'Grand Theft Auto V',
        price: '29.99',
        img:'https://m.media-amazon.com/images/I/71hiZqozL2L.jpg'
    },
    {
        title: 'The Elder Scrolls V: Skyrim',
        price: '9.99',
        img: 'https://m.media-amazon.com/images/I/51v1IWrWhPL.jpg'
    },
    {
        title: '',
        price: '',
        img: ''
    },
]

const Home = () => (
    <div className={HomeCSS.Home}>
        <HomeNavBar />
        <div className={HomeCSS.Background}>
            <video src={BV} autoPlay muted loop/>
            <div className={HomeCSS.text}>
                <h1>Never Stop Gaming</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>

        <section className={HomeCSS.HomeSection}>
                <Link to='/most-popular'>Most Popular</Link>
            <div className="mt-4">
                {data.map((d) => <HomeCard title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={HomeCSS.HomeSection}>
                <Link to='/most-popular'>Trending</Link>
            <div className="mt-4">
                {data.map((d) => <HomeCard title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={HomeCSS.HomeSection}>
                <Link to='/most-popular'>Free Games</Link>
            <div className="mt-4">
                {data.map((d) => <HomeCard title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={HomeCSS.HomeSection}>
                <Link to='/most-popular'>Most Played</Link>
            <div className="mt-4">
                {data.map((d) => <HomeCard title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

    </div>
);

export default Home;