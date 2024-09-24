import React from 'react';
import { Carousel } from 'antd';
import './banner.css'; 

const Banner: React.FC = () => (
  <Carousel autoplay className='carousel'>
    <div>
      <img src="/src/assets/images/banner/banner1.png" alt="" className="banner-image" />
    </div>
    <div>
      <img src="/src/assets/images/banner/banner2.webp" alt="" className="banner-image" />
    </div>
  </Carousel>
);

export default Banner;
