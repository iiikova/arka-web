import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";

// icons
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const navigate = useNavigate();

  const showMenu = () => {
    setIsMenu((previous) => !previous);
  };

  const login = () => {
    navigate("login");
    setIsMenu(false);
  };

  return (
    <>
      {isMenu ? (
        <div className={styles.menu_block}>
          <div>
            <img src={require("../../assets/images/logo.png")} alt="logo" />
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
                <li>
                  <button onClick={login} type="submit">
                    login
                  </button>
                </li>
              </ul>
            </nav>
          </div>
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
        </div>
      ) : null}

      <header>
        <div onClick={() => navigate("/")}>
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <li>
                  <NavLink to="/" data-toggle="tab" role="tab">
                    Start your design
                  </NavLink>
                </li>
              </li>
              <li>
                <NavLink
                  to="#products"
                  data-toggle="tab"
                  role="tab"
                  href="#products"
                >
                  All products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#design"
                  data-toggle="tab"
                  role="tab"
                  href="#design"
                >
                  Inspiration
                </NavLink>
              </li>
              <li>
                <NavLink to="#merchants" data-toggle="tab" role="tab">
                  <a href="#merchants">About</a>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="login">Account</NavLink>
              </li>

              <li>
                <NavLink to="login">
                  <GrCart />
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.menu}>
            <button onClick={showMenu}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
