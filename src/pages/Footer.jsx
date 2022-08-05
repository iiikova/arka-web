import React from "react";

function Footer() {
  return (
    <footer>
      <div className=" container ">
        <div>
          <img src={require("../assets/images/logo.png")} />
        </div>
        <div>
          <nav>
            <ul>
              <li>Custom Design</li>
              <li>All Products</li>
              <li>Inspiration</li>
              <li>Sustainability</li>
              <li>Affiliate Program</li>
              <li>Request Custom Quote</li>
              <li>Request Dieline</li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            <li>Shopify App</li>
            <li>14 Day Free Shopify Trial</li>
            <li>BigCommerce</li>
            <li>
              <div>
                <span>f</span>
                <span>t</span>
                <span>i</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p>Get exclusive offers and tips.</p>
          <input type="text" placeholder="Your email" />
          <button>Join instantly</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
