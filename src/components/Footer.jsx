import React from 'react';
import './Footer.css';



export const Footer = () => {
  return (    
    <div className="footer footer-padding" id="footer">
      <h3 className="heading-with-border contact">Contact us</h3>

        <div class="grid">
          <div class="item a">
              Want to make your brand digital? Let's make it happen
          </div>
          <div class="item b">               
                +27 12 345 6789<br/>
                info@creativessa.co.za<br/>
                Johannesburg<br/>
                Gauteng, South Africa
          </div>
          <div class="item c">
                Terms of service<br/>
                Privacy policy<br/>
                Impressum</div>
          <div class="item d">
                Home<br/>
                Shops<br/>
                Blog
          </div>
          <div class="item e">
                Github<br/>
                Linkedin<br/>
                Teams
          </div>
          {/* <div class="item f">
                Youtube<br/>
                Behance<br/>
                Dribbble
          </div> */}
          <div class="item g">
                Explore Creative Brands<br/>
                ©2023 Creatives SA
          </div>
        </div>

    </div>
  );
};
