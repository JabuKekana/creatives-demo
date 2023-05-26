import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Featured.css';
import slideImg1 from '../../pages/HomePage/HomePageAssets/slide1.jpg';
import slideImg2 from '../../pages/HomePage/HomePageAssets/slide2.jpg';
import slideImg3 from '../../pages/HomePage/HomePageAssets/slide3.jpg';
import slideImg4 from '../../pages/HomePage/HomePageAssets/slide4.jpg';
import slideImg5 from '../../pages/HomePage/HomePageAssets/slide5.jpg';

export const Featured = () => {
  const slidesData = [
    {
      image: slideImg1,
      heading: 'Unbeatable Value, Stylish Nike Shirts at Affordable Prices',
      buttonText: 'Go to Shop',
      buttonLink: '/page1',
    },
    {
      image: slideImg2,
      heading: 'Discover Extraordinary Denim Jackets',
      buttonText: 'Go to Shop',
      buttonLink: '/page2',
    },
    {
      image: slideImg3,
      heading: 'Premium Quality Jerseys',
      buttonText: 'Go to Shop',
      buttonLink: '/page3',
    },
    {
      image: slideImg4,
      heading: 'Air Jordan Nike ',
      buttonText: 'Go to Shop',
      buttonLink: '/page3',
    },
    {
      image: slideImg5,
      heading: 'Black Golf Caps',
      buttonText: 'Go to Shop',
      buttonLink: '/page3',
    },
  ];

  return (
    <div className="offers section-padding" >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-character">
              Discover the vibrant world of local brands created by South Africa's talented youth & explore the endless creativity and unique designs that showcase our country's rich culture and heritage.
            </h3>
          </div>
        </div>
      </div>
      
      <div className="Image-slides" id="featured">
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slide-container">
              <img src={slide.image} alt={`Image R{index + 1}`} />
              <div className="overlay">
                <h2>{slide.heading}</h2>
                <a href={slide.buttonLink} className="button">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
