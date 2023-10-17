import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/web.jpg'
import img2 from '../assets/process.jpg'
import img3 from '../assets/face.jpg'
import '../components/carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    
    <div className='carousel-container'>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} className='carouselImg' alt="web" text="web" />
        <Carousel.Caption>
          <h3>Junior Web Developer</h3>
          <p>A junior web developer can assist in coding, troubleshooting, and enhancing website functionality, contributing to its design and functionality.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className='carouselImg' alt="web" text="process" />
        <Carousel.Caption>
          <h3>Process Engineer</h3>
          <p>A process engineer can improve efficiency, optimize workflows, and streamline operations to enhance productivity and minimize operational costs effectively.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className='carouselImg'  alt="web" text="facebook" />
        <Carousel.Caption>
          <h3>Facebook Ads Manager</h3>
          <p>
          A Facebook ads manager can create and manage targeted ad campaigns to reach specific audiences, boost brand visibility, and drive conversions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    
    </>
    
  );
}

export default ControlledCarousel;