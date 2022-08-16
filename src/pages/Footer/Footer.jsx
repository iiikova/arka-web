/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.row}>
          <div>
            <img src={require("../../assets/images/logo.png")} />
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
                <div className={styles.social}>
                  <span>
                    <BsFacebook />
                  </span>
                  <span>
                    <AiFillTwitterCircle />
                  </span>
                  <span>
                    <RiInstagramFill />
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <p>Get exclusive offers and tips.</p>
              </li>
              <li>
                <input type="text" placeholder="Your email" />
              </li>
              <li>
                <button>Join instantly</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
