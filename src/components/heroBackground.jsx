import React from 'react';
import videoBg from '../assets/vid.mp4';
import '../components/heroBackground.css';
import { Link as ScrollLink} from 'react-scroll';

const HeroBackground = () => {
  return (
    <div className='mainBg'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className='content'>
        <div className='heroName'>JAYSON PINEDA</div>
        <p className='heroDesc'>Your IT Solution Partner</p>
        <ScrollLink to="cardsComponent" className="cards"><button className='exploreBtn'>Explore</button></ScrollLink>
        </div>
        
    
    </div>
  )
}

export default HeroBackground;