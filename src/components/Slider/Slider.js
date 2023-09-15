import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SliderCSS from './Slider.module.css';
import HomeCard from '../HomeCard/HomeCard';
import SliderCard from '../SliderCard/SliderCard';
import { useEffect } from 'react';

const Slider = ({data}) => {

    
    const [test, setTest] = useState(0);
    const [margin, setMargin] = useState(100);
    const [limit, setLimit] = useState(data.length);
    
    // const x = window.innerWidth;
    // if(x < 500)
    // setLimit(limit - 1)
    // if(x > 500)
    // {
    //     setMargin(25)
    //     setLimit(limit - 4)
    // }

    const forward = () => {
        let margin;
        if(window.innerWidth > 500){
            margin = 25;
        }
        else{
            margin = 100;
        }
        const theLimit = limit * - margin;
        console.log(margin, limit, theLimit)
        if(test !== theLimit)
        setTest(test - margin);
        if(test === theLimit)
        setTest(0)
    }

    const backward = () => {
        if(test !== 0)
        setTest(test + margin);
    }

    const limits = () => {
        const x = window.innerWidth;
        if(x < 500)
        setLimit(limit - 1)
        if(x > 500)
        {
            setMargin(25)
            setLimit(limit - 4)
        }
    }

    useEffect(() => {
        limits()
    }, [])


  return (
    <section className={[SliderCSS.Container, 'mt-4'].join(' ')}>
        <button onClick={backward}>
            <FontAwesomeIcon style={{color: 'white'}} icon={faArrowLeft} />
        </button>
        <div className={SliderCSS.Slider} style={{translate: `${test}%`}}>
            {data.map((d, index) => <SliderCard key={index} title={d.title} price={d.price} img={d.img}/>)}
        </div>
        <button onClick={forward}>
            <FontAwesomeIcon style={{color: 'white'}} icon={faArrowRight} />
        </button>
    </section>
  )
}

export default Slider