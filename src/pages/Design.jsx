import React from "react";

function Design() {
  return (
    <div className="design">
      <div className="container">
        <h2>Fast and easy custom boxes your customers will love</h2>
        <div>
          <div>
            <img src={require("../assets/images/frames/1.png")} alt="frame" />
            <p>You Order</p>
            <p>Design and order boxes in a few clicks.</p>
          </div>
          <div>
            <img src={require("../assets/images/frames/2.png")} alt="frame" />
            <p>We Proof</p>
            <p>Approve your designs before production.</p>
          </div>
          <div>
            <img src={require("../assets/images/frames/3.png")} alt="frame" />
            <p>We Print & Ship</p>
            <p>Your order gets printed and shipped with tracking.</p>
          </div>
        </div>
        <button>Start your design</button>

        <div className="yellow">
          <div>
            <img src={require("../assets/images/frames/11.png")} alt="frame" />
            <p>Couldn't find a size you need?</p>
            <p>
              We’ll work directly with you to create a fully branded packaging
              system.
            </p>
            <button>Request a quote</button>
          </div>
          <div>
            <img src={require("../assets/images/frames/22.png")} alt="frame" />
            <p>Couldn't find a size you need?</p>
            <p>
              We’ll work directly with you to create a fully branded packaging
              system.
            </p>
            <button>Request a quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
