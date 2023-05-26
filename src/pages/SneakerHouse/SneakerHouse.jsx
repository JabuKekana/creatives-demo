import React from "react";
import { PRODUCTS } from "../../pages/SneakerHouse/products";
import { Product } from "./product-config";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./SneakerHouse.css";
import ShopHeaderImg from './images/shop2.png';


export const SneakerHouse = () => {
  return (
    <div className="sneakerHouse">


{/* -------- SHOP NAV BAR STARTS -------- */}


<nav class="Shop-Navbar">
    <a href="#" class="logo">SH</a>
    <ul class="Shop-Menu">
      <li><a href="#shop-footer">Contact</a></li>
      <p><Link to="/cart"><ShoppingCart size={30} /></Link></p>      
    </ul>
</nav>



{/* -------- SHOP NAV BAR ENDS -------- */}







{/* -------- SHOP HEADER ENDS -------- */}




<div className="Shop-Header section-padding" id="home">
    <div className="Shop-Header-content">
      <h1 className="gradient__text">SNEAKER HOUSE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nobis magnam iste aliquam, ipsum non, ab, quasi eos aspernatur ut asperiores assumenda? Impedit dolorem, asperiores quisquam neque minus dolorum nihil eveniet quia corrupti sapiente accusamus aliquid culpa quas, facilis obcaecati.</p>
    </div>

    <div className="Shop-Header-image">
      <img src={ShopHeaderImg} alt="Shop-HeaderImage" />
    </div>
  </div>





{/* -------- SHOP HEADER ENDS -------- */}





      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>






      {/* -------- FOOTER SECTION STARTS -------- */}


    <div class="content1">
    </div>
      <footer className="shop-footer" id="shop-footer">
        <div class="main-content">
          <div class="left box">
            <h2>About us</h2>
            <div class="content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sunt vero id nihil minus, recusandae velit necessitatibus ducimus iusto incidunt eum ipsam ratione sit odio. Soluta nobis, ex eveniet cum suscipit tempora nemo deleniti praesentium molestiae quia dignissimos. Necessitatibus perferendis ex accusantium mollitia magni provident laboriosam suscipit molestias quasi consequatur.</p>
              <div class="social">
                <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
                <a href="#"><span class="fab fa-twitter"></span></a>
                <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
                <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
              </div>
            </div>
          </div>

          <div class="center box">
            <h2>CONTACT DETAILS</h2>
            <div class="content">
              <div class="place">
                <span class="fas fa-map-marker-alt"></span>
                <span class="text">Edenvale, Johannesburg, South Africa</span>
              </div>
              <div class="phone">
                <span class="fas fa-phone-alt"></span>
                <span class="text">+27 78 123 4567</span>
              </div>
              <div class="email">
                <span class="fas fa-envelope"></span>
                <span class="text">sneakerhouse@gmail.com</span>
              </div>
            </div>
          </div>

          <div class="right box">
            <h2>LINKS</h2>
            <div class="content">
              <form action="#">
                <div class="LinkButton1">
                  <p><Link to="/" className="LinkButton">Go To Home</Link></p>
                </div>
                <div class="LinkButton2">
                  <p><Link to="/" className="LinkButton">Track Your Order(s)</Link></p>
                </div>
                <div class="LinkButton3">
                  <p><Link to="/" className="LinkButton">Sign up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="bottom">
          <center>
            <span class="credit">Creatives SA</span>
            <span class="far fa-copyright"></span><span> | 2023 All rights reserved.</span>
          </center>
        </div>
      </footer>

{/* -------- FOOTER SECTION ENDS -------- */}



    </div>
  );
};
