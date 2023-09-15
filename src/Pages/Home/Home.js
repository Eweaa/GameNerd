import React from "react";
import HomeCSS from './Home.module.css';
import HomeNavBar from "../../components/NavBar/HomeNavbar/HomeNavBar";
import BV from '../../Assets/Videos/TheBeautyOfDeathStranding.mp4';
import HomeCard from "../../components/HomeCard/HomeCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../store";



const MP2 = [
    {
        title: 'Red Dead Redemption 2',
        price: '59.99',
        img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
    },
    {
        title: 'Grand Theft Auto V',
        price: '29.99',
        img:'https://m.media-amazon.com/images/I/51MFu2e82VL.jpg'
    },
    {
        title: 'The Elder Scrolls V: Skyrim',
        price: '9.99',
        img: 'https://m.media-amazon.com/images/I/51v1IWrWhPL.jpg'
    },
    {
        title: 'Death Stranding',
        price: '39.99',
        img: 'https://sm.ign.com/ign_nordic/gallery/d/death-stra/death-stranding-5-new-character-posters_vssf.jpg'
    },
    {
        title: 'Red Dead Redemption 2',
        price: '59.99',
        img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
    },
    {
        title: 'Grand Theft Auto V',
        price: '29.99',
        img:'https://m.media-amazon.com/images/I/51MFu2e82VL.jpg'
    },
    {
        title: 'The Elder Scrolls V: Skyrim',
        price: '9.99',
        img: 'https://m.media-amazon.com/images/I/51v1IWrWhPL.jpg'
    },
    {
        title: 'Death Stranding',
        price: '39.99',
        img: 'https://sm.ign.com/ign_nordic/gallery/d/death-stra/death-stranding-5-new-character-posters_vssf.jpg'
    },
    {
        title: 'Red Dead Redemption 2',
        price: '59.99',
        img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
    },
    {
        title: 'Grand Theft Auto V',
        price: '29.99',
        img:'https://m.media-amazon.com/images/I/51MFu2e82VL.jpg'
    },
    {
        title: 'The Elder Scrolls V: Skyrim',
        price: '9.99',
        img: 'https://m.media-amazon.com/images/I/51v1IWrWhPL.jpg'
    },
    {
        title: 'Death Stranding',
        price: '39.99',
        img: 'https://sm.ign.com/ign_nordic/gallery/d/death-stra/death-stranding-5-new-character-posters_vssf.jpg'
    },
]
const MP = [
    {
        title: 'Red Dead Redemption 2',
        price: '59.99',
        img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
    },
    {
        title: 'Grand Theft Auto V',
        price: '29.99',
        img:'https://m.media-amazon.com/images/I/51MFu2e82VL.jpg'
    },
    {
        title: 'The Elder Scrolls V: Skyrim',
        price: '9.99',
        img: 'https://m.media-amazon.com/images/I/51v1IWrWhPL.jpg'
    },
    {
        title: 'Death Stranding',
        price: '39.99',
        img: 'https://sm.ign.com/ign_nordic/gallery/d/death-stra/death-stranding-5-new-character-posters_vssf.jpg'
    },
]

const UC = [
    {
        title: 'Death Stranding 2',
        price: '59.99',
        img: 'https://cdn.kanobu.ru/editor/images/91/1aeb9314-d47e-412a-a22b-e381cd0d1f62.webp'
    },
    {
        title: 'Starfield',
        price: '69.99',
        img:'https://m.media-amazon.com/images/I/81fwGFBXWFL.jpg'
    },
    {
        title: 'Mortal Kombat 1',
        price: '69.99',
        img: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/05/Mortal-Kombat-1-release-date-88003ec.jpg?quality=90&resize=980,654'
    },
    {
        title: `Assassin's Creed Mirage`,
        price: '39.99',
        img: 'https://store-images.s-microsoft.com/image/apps.23659.14135771392422555.5ce715a2-1c1c-4b01-aed8-c2e964c55efc.005cb1b5-f46f-43e0-a800-7bbe3bbf96b1?w=400&h=600'
    },
]

const FG = [
    {
        title: 'PUBG',
        price: 'Free',
        img: 'https://cdn.europosters.eu/image/750/posters/pubg-playerunknown-i59195.jpg'
    },
    {
        title: 'Rocket League',
        price: 'Free',
        img:'https://i.pinimg.com/originals/b9/5b/a8/b95ba82397861787eb23b03e0b71d407.jpg'
    },
    {
        title: 'Fortnite',
        price: 'Free',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNJBuy5qJaOBmM19yk_SnOzag5lASlK8eIw&usqp=CAU'
    },
    {
        title: 'Valorant',
        price: 'Free',
        img: 'https://m.media-amazon.com/images/M/MV5BODhkN2U1YzYtODQzZC00MTc5LTlmMmYtYjQ2ZGU2ZmM4YzJkXkEyXkFqcGdeQXVyMTE0MTc4MjU2._V1_FMjpg_UX1000_.jpg'
    },
]


const Home = () => {
  return (
    <div className={HomeCSS.Home}>
        <HomeNavBar />
        <div className={HomeCSS.Background}>
            <video src={BV} autoPlay muted loop/>
            <div className={HomeCSS.text}>
                <h1>Never Stop Gaming</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <section className={[HomeCSS.HomeSection, 'p-4'].join(' ')}>
                <Link to='/most-popular'>Most Popular</Link>
            <div className="mt-4">
                {MP.map((d, index) => <HomeCard key={index} title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={[HomeCSS.HomeSection, 'p-4'].join(' ')}>
                <Link to='/most-popular'>Upcoming Titles</Link>
            <div className="mt-4">
                {UC.map((d, index) => <HomeCard key={index} title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={[HomeCSS.HomeSection, 'p-4'].join(' ')}>
                <Link to='/most-popular'>Free Games</Link>
            <div className="mt-4">
                {FG.map((d, index) => <HomeCard key={index} title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

        <section className={[HomeCSS.HomeSection, 'p-4'].join(' ')}>
                <Link to='/most-popular'>Most Played</Link>
            <div className="mt-4">
                {MP.map((d, index) => <HomeCard key={index} title={d.title} price={d.price} img={d.img}/>)}
            </div>
        </section>

    </div>
  )
}

export default Home
