import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import logoImg from '../pages/HomePage/HomePageAssets/logo.png';
import './Navbar.css';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><a href="#shops">Shops</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="navbar-sign">    
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><Link to="/">Home</Link></p>
          <p><a href="#shops">Shops</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
        <div className="navbar-menu_container-links-sign">
          <button type="button">Sign up</button>
        </div>
        </div>
        )}
      </div>
    </div>
  );
};
