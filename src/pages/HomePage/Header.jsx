import React from 'react';
import headerImg from '../../pages/HomePage/HomePageAssets/header.jpg';
import './Header.css';



export const Header = () => {
  return (    
    <div className="header-image">
  {/* <img src={headerImg} alt="HeaderImage" /> */}
  <div className="header-text">
    <h1>The Home Of Creativity</h1>
    <p>Where creatives meet the fashion adventurer</p>
    <button>Sign up</button>
  </div>
</div>
  );
};
