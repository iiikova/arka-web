/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Merchants() {
  return (
    <div className=" container" id="merchants">
      <div className="merchants">
        <div>
          <div>
            <img src={require("../assets/images/Merchants/google.png")} />
          </div>
        </div>
        <div>
          <div>
            <img src={require("../assets/images/Merchants/shopify.png")} />
          </div>
        </div>
        <div>
          <img src={require("../assets/images/Merchants/11.png")} />
          <img src={require("../assets/images/Merchants/11_2.png")} />
        </div>

        <div>
          <div>
            <h3>
              “Arka’s team is super fast, knowledgeable, and easy to work with -
              highly recommended!”
            </h3>

            <div>
              <div>
                <img src={require("../assets/images/Merchants/Jesse.png")} />
                <div>
                  <p>Jesse</p>
                  <p>Subscription Catalyst</p>
                </div>
              </div>

              <div>
                <button>Their story</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>
              “I really like Arka because it’s a really nice box, I’ve gotten a
              lot of compliments on&nbsp;it.”
            </h3>

            <div>
              <div>
                <img src={require("../assets/images/Merchants/Leslie.png")} />
                <div>
                  <p>Leslie</p>
                  <p>Burgundy Fox</p>
                </div>
              </div>

              <div>
                <button>Their story</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={require("../assets/images/Merchants/22.png")} />
          <img src={require("../assets/images/Merchants/22_2.png")} />
        </div>
        <div>
          <img src={require("../assets/images/Merchants/33.png")} />
          <img src={require("../assets/images/Merchants/33_1.png")} />
        </div>
        <div>
          <div>
            <h3>
              “I love how easily it was to customize the box, and you guys were
              more affordable.”
            </h3>

            <div>
              <div>
                <img src={require("../assets/images/Merchants/Anthony.png")} />
                <div>
                  <p>Anthony</p>
                  <p>Lipstick Junkie</p>
                </div>
              </div>

              <div>
                <button>Their story</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"merchants__bottom"}>
        <h2>Let`s get to it</h2>
        <div>
          <button>Start your design</button>
          <button>Browse all products</button>
        </div>
      </div>
    </div>
  );
}

export default Merchants;
