import React from "react";

function Main() {
  return (
    <>
      <section className="main">
        <div className="container">
          <h1>Fast and easy custom boxes your customers will love</h1>
          <p>
            Fastest turnaround. Best prices instantly. Dieline design help
            available.
          </p>
          <button>Start your design</button>
        </div>
      </section>
      <div className="brands ">
        <div className="container">
          <div>
            <img src={require("../assets/images/shopify.png")} alt="Shopify" />
            <p>
              Shopify <br /> Integrated
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/Rectangle (1).png")}
              alt="Amazon"
            />
            <p>
              Amazon <br /> Certified
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/Rectangle (2).png")}
              alt="Eco"
            />
            <p>
              Eco-Fri
              <br />
              endly
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
