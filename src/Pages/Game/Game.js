import React, { useEffect, useState } from 'react'
import GameCSS from './Game.module.css'
import Logo from '../../Assets/Images/OuterHeaven.png'
import User from '../../Assets/Images/DRDis.jpg'
import RDRT from '../../Assets/Videos/RDRT.mp4'
import RDR1 from '../../Assets/Images/RDR2.jpg'
import RDR2 from '../../Assets/Images/RDR21.jpg'
import RDR3 from '../../Assets/Images/RDR22.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import CircleRating from '../../components/CircleRating/CircleRating';
import { useDispatch } from 'react-redux'
import { actions } from '../../store'


const Game = () => {

    const dispatch = useDispatch();
    const add = () => dispatch(actions.add())

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
        RDR1, RDR2, RDR3, RDRT
    ]

    const thetag = {
        v: <video src={imgs[index]} autoPlay muted loop/>,
        i: <img src={imgs[index]}/>
    }

    let d = thetag.i

    if(index === 3)
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
    }, []) 

    // if(index >= len){
    //     change()
    // }
    
  return (
    <div className={GameCSS.Game}>
        <nav className={[GameCSS.Nav, 'p-2'].join(' ')}>
            <Link to='/'>
                <img src={Logo}/>
                <span>
                    Outer Heaven
                </span>
            </Link>
            <div style={{width:'50%'}}>
                <input type='text' placeholder='Search' className='p-1'/>
            </div>
            <div>
                <img src={User}/>
            </div>
        </nav>
        <div className={[GameCSS.Main, 'p-4'].join(' ')}>
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
                        <div style={{width: '100%'}}>
                            <button style={{width: '100%', borderRadius:'5px'}} className='p-2 mb-2'>Buy Now</button>
                        </div>
                        <button className='p-2' onClick={add}>Add to Cart</button>
                        <button className='p-2 mx-2' style={{borderRadius:'50%', width:'40px',height:'40px'}} onClick={() => setHeart(!heart)}>
                            {Comp}
                        </button>
                    </div>
                    {/* <img src={imgs[index]}/> */}
                </div>
            </aside>
        </div>
        <div style={{width:'70%'}} className='p-4'>
            Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.
            <h6>
                Red Dead Redemption 2
            </h6>
            <p>
                Includes Red Dead Redemption 2: Story Mode and Red Dead Online.
            </p>
            <p>
                Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.
            </p>
            <p>
                America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
            </p>
            <p>
                Red Dead Redemption 2 also includes the shared living world of Red Dead Online – forge your own path as you battle lawmen, outlaw gangs and ferocious wild animals to build a life on the American frontier. Build a camp, ride solo or form a posse and explore everything from the snowy mountains in the North to the swamps of the South, from remote outposts to busy farms and bustling towns. Chase down bounties, hunt, fish and trade, search for exotic treasures, run your own underground Moonshine distillery, or become a Naturalist to learn the secrets of the animal kingdom and much more in a world of astounding depth and detail – includes all new features, gameplay content and additional enhancements released since launch.
            </p>
            <div className={GameCSS.Ratings}>
                <h3 className='mb-4'>Ratings</h3>
                <div className={GameCSS.TheRatings}>
                    <CircleRating Rating='94%' org='Critics Recommend'/>
                    <CircleRating Rating='96' org='Top Critic Average'/>
                </div>
            </div>
            <div className={[GameCSS.RequirementsT, 'mt-4'].join(' ')}>
                <h3 className='mb-4'>System Requirements</h3>
                <div className={[GameCSS.Requirements, 'p-4'].join(' ')}>
                    <div>
                        <h6>Minimum</h6>
                        <p>
                            <span>OS</span>
                            Windows 10 - April 2018 Update (v1803)
                        </p>
                        <p>
                            <span>Processor</span>
                            Intel(R) Core(TM) i5-2500K / AMD FX-6300
                        </p>
                        <p>
                            <span>Memory</span>
                            8GB
                        </p>
                        <p>
                            <span>Graphics</span>
                            Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB
                        </p>
                        <p>
                            <span>Storage</span>
                            150GB
                        </p>

                    </div>
                    <div>
                        <h6>Recommended</h6>
                        <p>
                            <span>OS</span>
                            Windows 10 - April 2018 Update (v1803)
                        </p>
                        <p>
                            <span>Processor</span>
                            Windows 10 - April 2018 Update (v1803)
                        </p>
                        <p>
                            <span>Memory</span>
                            12GB
                        </p>
                        <p>
                            <span>Graphics</span>
                            Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB
                        </p>
                        <p>
                            <span>Storage</span>
                            150GB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game