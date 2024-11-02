import React from 'react';
import { Carousel } from 'antd';
import './Banner.css'; 
import img1 from '../../assets/images/banner/banner1.png'
import img2 from '../../assets/images/banner/banner2.png'

const Banner: React.FC = () => (
  <Carousel autoplay className='carousel'>
    <div>
      <img src={img1} alt="" className="banner-image" />
    </div>
    <div>
      <img src={img2} alt="" className="banner-image" />
    </div>
  </Carousel>
);

export default Banner;
