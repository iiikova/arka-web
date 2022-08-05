import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={require("../assets/images/logo.png")} alt="logo" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Start your design</a>
            </li>
            <li>
              <a href="#">All products</a>
            </li>
            <li>
              <a href="#">Inspiration</a>
            </li>
            <li>
              <a href="#">About</a>
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
              <a href="#">B</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
