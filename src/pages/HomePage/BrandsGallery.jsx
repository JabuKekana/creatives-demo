import React from 'react';
import './BrandsGallery.css';
import slideImg1 from '../../pages/DressUpHub/images/shop1.png';
import slideImg2 from '../../pages/SneakerHouse/images/shop2.png';
import slideImg3 from '../../pages/HomePage/HomePageAssets/slide3.jpg';
import slideImg4 from '../../pages/HomePage/HomePageAssets/slide4.jpg';
import slideImg5 from '../../pages/HomePage/HomePageAssets/slide5.jpg';
import slideImg6 from '../../pages/HomePage/HomePageAssets/slide6.jpg';
import slideImg7 from '../../pages/HomePage/HomePageAssets/slide7.jpg';
import slideImg8 from '../../pages/HomePage/HomePageAssets/slide8.jpg';
import slideImg9 from '../../pages/HomePage/HomePageAssets/slide9.jpg';
import { Link } from 'react-router-dom';





export const BrandsGallery = () => {
    return (    
        <div className="brandsGallery section-padding"  id="shops">
        <h3 className="small-title"><br/><br/>Browse Online Shops</h3>

        {/******image card layout start******/}
        <div class="container">
            {/******image row start******/}
            <div class="row">
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg1} alt="HeaderImage" />
                    <div class="details">
                        <h2>Dress Up <span>Hub</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/DressUpHub" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>

                {/******image card start******/}
                <div class="image">
                    <img src={slideImg2} alt="HeaderImage" />
                    <div class="details">
                        <h2>Sneaker<span> House</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/SneakerHouse" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>

                {/******image card start******/}
                <div class="image">
                    <img src={slideImg3} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand  <span>3</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
            {/******image card end******/}
            </div>

            {/******image row start******/}
            <div class="row">
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg4} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand  <span>4</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
      
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg5} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand <span>5</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
      
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg6} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand <span>6</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
                {/******image card end******/}
            </div>
            {/******image row end******/} 

            {/******image row start******/}
            <div class="row">
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg7} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand  <span>7</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
      
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg8} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand <span>8</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
      
                {/******image card start******/}
                <div class="image">
                    <img src={slideImg9} alt="HeaderImage" />
                    <div class="details">
                        <h2>Brand <span>9</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="more">
                            <Link to="/cart" className="read-more">View <span>Shop 1</span></Link>
                        </div>
                    </div>
                </div>
                {/******image card end******/}
            </div>
            {/******image row end******/}

        </div>
    {/******image card layout end*******/}    
    </div>
    );
  };