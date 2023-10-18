
import React from 'react';
import '../components/footer.css';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linkedin.png';
import footer1 from '../assets/footer1.png';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <>
    <div className='footer-container'><img className="footerBG" src={footer1} alt="facebook"/>

        <div className='layer'>
             <div className='first-layer'></div>
             <div className='second-layer'>
                <div className='second-part-one'>
                <div className='facebook'><img className='pFacebook' src={facebook} alt="facebook"></img></div>
                <div className='github'><img className='pGithub' src={github} alt="github"></img></div>
                <div className='linkedin'><img className='pLinkedin' src={linkedIn} alt="linkedIn"></img></div>
                <div className='github'></div>
                <div className='linkedIn'></div>
                </div>
                <div className='second-part-two'>
                    <Link to="/home" className='footer-link'>Home</Link>
                    <Link to="about" className='footer-link'>About</Link>
                    <Link to="contact" className='footer-link'>Contact</Link>
                    
                </div>
                <div className='second-part-three'>
                    <p className='copy'>@2023 Jayson Garcia Pineda | All Rights Reserved</p>
                </div>
             </div>

        </div>
       

    </div>
    </>
  )
}

export default Footer;