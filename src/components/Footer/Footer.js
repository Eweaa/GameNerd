import React from 'react';
import FooterCSS from './Footer.module.css'
import { Link } from 'react-router-dom';
import youtube from '../../Assets/Images/youtube.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


  return (
    <footer className={[FooterCSS.Footer, 'p-4'].join(' ')}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
                <div>
                    Follow us on social media
                </div>
                <Link>Twitter</Link>
                <Link>Facebook</Link>
                <Link>Youtube</Link>
            </div>
            <button onClick={toTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
        <div>
            &copy; 2023 Eweaa.  All rights reserved. All trademarks are property of their respective owners in Egypt and other countries.
            VAT included in all prices where applicable
        </div>
        <div>
            <Link>Terms of Service</Link>
            <Link>Privacy Policy</Link>
            <Link>Store Refund Policy</Link>
        </div>
    </footer>
  )
}

export default Footer