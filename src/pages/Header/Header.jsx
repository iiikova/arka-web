import React, { useState } from "react";
import styles from "./Header.module.scss";

// icons
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const showMenu = () => {
    setIsMenu((previous) => !previous);
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
