import React from "react";
import HomeCSS from './Home.module.css';
import HomeNavBar from "../../components/NavBar/HomeNavbar/HomeNavBar";
import BV from '../../Assets/Videos/TheBeautyOfDeathStranding.mp4';
import HomeCard from "../../components/HomeCard/HomeCard";
import { Link } from "react-router-dom";
import RDR2 from '../../Assets/Images/RDR2.jpg'

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
            <Link to='/'>Most Popular</Link>
            <div>
                <HomeCard title='Red Dead Redemption 2' price='59.99' img={RDR2}/>
                <HomeCard title='Red Dead Redemption 2' price='59.99' img={RDR2}/>
                <HomeCard title='Red Dead Redemption 2' price='59.99' img={RDR2}/>
                <HomeCard title='Red Dead Redemption 2' price='59.99' img={RDR2}/>
                <HomeCard title='Red Dead Redemption 2' price='59.99' img={RDR2}/>
            </div>
        </section>
    </div>
);

export default Home;