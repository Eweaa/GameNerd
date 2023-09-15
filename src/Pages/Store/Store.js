import React from "react";
import StoreCSS from './Store.module.css';
import NavBar from "../../components/NavBar/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../Auth/cart-slice";
import Slider from "../../components/Slider/Slider";

const Store = () => {
    // const dispatch = useDispatch();
    // const addToCart = () => {
    //     dispatch(CartActions.addToCart({
            
    //     }))
    // }


    const AG = [
        {
            title: 'Red Dead Redemption 2',
            price: '59.99',
            img: 'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_SL1200_.jpg'
        },
        {
            title: 'Sekiro Shadow Dies Twice',
            price: '29.99',
            img:'https://rukminim1.flixcart.com/image/850/1000/xif0q/poster/j/5/p/medium-sekiro-shadows-die-twice-matte-finish-poster-btt0662-original-imagmfteyvvk9gfb.jpeg?q=90'
        },
        {
            title: 'TITANFALL 2',
            price: '9.99',
            img: 'https://m.media-amazon.com/images/M/MV5BYTA3OGVlMGUtZDA1MS00ZmUyLTg4ZDAtZjkyYWQxY2M0NTZmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
        },
        {
            title: 'Call of Duty: Modern Warfare II',
            price: '39.99',
            img: 'https://m.media-amazon.com/images/I/81mUtFXhFCL.jpg'
        },
        {
            title: 'Elden Ring',
            price: '59.99',
            img: 'https://static.displate.com/857x1200/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg'
        },
    ]

    const SG = [
        {
            title: `SID MEIER’S CIVILIZATION® VI`,
            price: '29.99',
            img: 'https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg'
        },
        {
            title: `CRUSADER KINGS III`,
            price: '29.99',
            img: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Crusader_Kings_III.jpg'
        },
        {
            title: `ANNO 1800`,
            price: '29.99',
            img: 'https://store.ubisoft.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dw2040bef7/images/large/5b647010ef3aa548048c5958.jpg?sw=341&sh=450&sm=fit'
        },
        {
            title: `Command & Conquer: Red Alert 3`,
            price: '19.99',
            img: 'https://myhotposters.com/cdn/shop/products/mQ0396_19eb1209-a4df-450d-a890-43a2c92be86f_1024x1024.jpg?v=1571444624'
        },
        {
            title: `Cities: Skylines`,
            price: '29.99',
            img: 'data:image/jpeg;base64,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'
        },
    ]

    const FPSG = [
        {
            title: `Doom`,
            price: '29.99',
            img: 'https://static.displate.com/857x1200/displate/2021-04-21/3d9d1c41e4a781ff0e6a09fdf980c1ff_bb158dfdaa6a8577459e0fb15ed5ace3.jpg'
        },
        {
            title: `Wolfenstein II: The New Colossus`,
            price: '29.99',
            img: 'https://m.media-amazon.com/images/I/91fR0oBKxbL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: `Doom Eternal`,
            price: '29.99',
            img: 'https://i.ebayimg.com/images/g/SQ0AAOSwOA9eHunu/s-l1600.jpg'
        },
        {
            title: `Call of Duty: Black Ops Cold War`,
            price: '29.99',
            img: 'https://i.pinimg.com/736x/41/dd/72/41dd725903829daf77fa497805068ccf.jpg'
        },
        {
            title: `Battlefield 1`,
            price: '19.99',
            img: 'https://cdn.europosters.eu/image/750/posters/battlefield-1-main-i31918.jpg'
        },
    ]

    return(
        <div className={StoreCSS.StorePage}>
            <NavBar />
            <div>
                {/* <h1>Store</h1>
                <input type="text" placeholder="Search"/> */}
                <section>
                    <Link to='/' className="p-4">Action Games</Link>
                    <Slider data={AG}/>
                </section>
                <section>
                    <Link to='/' className="p-4">RPG Games</Link>
                    <Slider data={SG}/>
                </section>
                <section>
                    <Link to='/' className="p-4">First-person shooter Games</Link>
                    <Slider data={FPSG}/>
                </section>
                <section>
                    <Link to='/' className="p-4">New Releases</Link>
                    <Slider data={AG}/>
                </section>
            </div>
        </div>
    )
};

export default Store;