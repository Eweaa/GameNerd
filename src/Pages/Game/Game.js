import React, { useEffect, useState } from 'react'
import GameCSS from './Game.module.css'
import Logo from '../../Assets/Images/OuterHeaven.png'
import User from '../../Assets/Images/DRDis.jpg'
import RDRT from '../../Assets/Videos/RDRT.mp4'
import SVG from '../../Assets/Images/heart-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'


const Game = () => {

    const data = {
        title:'Red Dead Redemption 2',
        details:'this game is ont of the best games ever produced. it\'s certainly will go down as one of the best games in histroy and it may be the best game in history. Rockstar has always given us great gaming experince' 
    }

    const icon = {
        e:<FontAwesomeIcon icon={faHeart} style={{color: 'white'}}/>,
        f:<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:'#e33e75'}}>
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
    }

    const [index, setIndex] = useState()
    const imgs = [
        Logo,User, RDRT
    ]

    const thetag = {
        v: <video src={imgs[index]} autoPlay muted loop/>,
        i: <img src={imgs[index]}/>
    }

    const [tag, setTag] = useState();
    let d = thetag.i

    if(index === 2)
    d = thetag.v

    const [heart, setHeart] = useState();
    let Comp = icon.e;

    if(heart === true)
    Comp = icon.f

    

    
    
    
    let test = -1;
    let len = imgs.length

    const change = () => {

        for(let i=0; i<len; i++){
            setTimeout(() => {
                setIndex(i)
            }, 5000 * i)
        }

        
    }

    useEffect(() => {
        change()
    },[]) 
    
  return (
    <div className={[GameCSS.Game, 'p-4'].join(' ')}>
        <aside className={[GameCSS.LA, ''].join(' ')}>
            <Link to='/'>
                <img src={Logo}/>
                Outer Heaven
            </Link>
        </aside>
        <nav>
            <div style={{width:'100%'}}>
                <input type='text' placeholder='search' className='p-1'/>
            </div>
            <div>
                <img src={User}/>
            </div>
        </nav>
        <div className={GameCSS.Carousel}>
            {d}
            {/* <img src={imgs[index]}/> */}
            {/* <video src={imgs[index]} autoPlay muted loop/> */}
        </div>
        <aside className={[GameCSS.RA, 'p-'].join(' ')}>
            <div className={[GameCSS.GD, 'p-2'].join(' ')}>
                <h3>{data.title}</h3>
                <p>{data.details}</p>
                <div>
                    <button className='p-2'>Add to Cart</button>
                    <button className='p-2 mx-2' style={{borderRadius:'50%', width:'40px',height:'40px'}} onClick={() => setHeart(!heart)}>
                        {Comp}
                    </button>
                </div>
                {/* <img src={imgs[index]}/> */}
            </div>
        </aside>
    </div>
  )
}

export default Game