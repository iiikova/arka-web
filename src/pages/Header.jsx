import React, { useState } from "react";

// rr6
import { NavLink } from "react-router-dom";

// icons
import { BsStars } from "react-icons/bs";
import { GrCart } from "react-icons/gr";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <div>
        <img src={require("../assets/images/logo.png")} alt="logo" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a data-toggle="tab" role="tab" href="#main">
                Start your design
              </a>
            </li>
            <li>
              <a data-toggle="tab" role="tab" href="#products">
                All products
              </a>
            </li>
            <li>
              <a data-toggle="tab" role="tab" href="#design">
                Inspiration
              </a>
            </li>
            <li>
              <a data-toggle="tab" role="tab" href="#merchants">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">
                <GrCart />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
