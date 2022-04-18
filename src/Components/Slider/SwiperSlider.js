// import React, { useRef, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// custom css
import './SwiperSlider.css';

// images
import image1 from '../../images/slice_0_0.jpg';
import image2 from '../../images/slice_0_1.jpg';
import image3 from '../../images/slice_0_2.jpg';

import { Link } from 'react-router-dom'

// slider component
const SwiperSlider = () => {
  return (
    <Swiper 
      //{...SwiperSliderConfigs} getSwiper={setParallaxSwiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      noSwipingClass='noSwiping'
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-image">
          <img src={image1} alt="image1"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <p className='item_name'>Big Kulich</p>
          <p className='item_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
        <div className='overSlide_right'>
          <img id="kulich" src="https://www.wikihow.com/images/3/3a/Make-Russian-Kulich-Bread-Final.jpg" alt=""/>
        </div>
        <div className='overSlide noSwiping'>

        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className="slide-image">
          <img src={image2} alt="image2"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <p className='item_name'>Pasha</p>
          <p className='item_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
        <div className='overSlide_right'>
          <img id="pasha" src="https://i2.wp.com/russianmomcooks.com/wp-content/uploads/2013/03/Paskha_WM-2.jpg" alt=""/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-image">
          <img src={image3} alt="image3"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <p className='item_name'>Basket</p>
          <p className='item_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
        <div className='overSlide_right'>
          <img id="basket" src="https://fthmb.tqn.com/pqTVxlyyceB5kSH_L7WPnegS98o=/425x326/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-512788366-583ee5033df78c6f6a5d796a.jpg" alt=""/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;