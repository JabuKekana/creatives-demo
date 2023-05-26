import React from 'react';
import CTAImg from '../../pages/HomePage/HomePageAssets/CTA-img.png';
import './CTA.css';






export const CTA = () => {
  return (    
    <div className="CTA section-padding" id="home">
    <div className="CTA-content">
      <h1 className="gradient__text">Do you own a brand? Let us show your brand to the world.</h1>
      <p>Together, let's celebrate the spirit of creativity and uplift our youth. Discover the hidden gems, embrace the innovation, and become a part of the Creative South Africa movement.</p>

      <div className="CTA-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="CTA-content">
        {/* <p>See The World like Never Before!..</p> */}
      </div>
    </div>

    <div className="CTA-image">
      <img src={CTAImg} alt="CTAImage" />
    </div>
  </div>
  );
};