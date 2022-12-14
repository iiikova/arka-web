import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Main.module.scss";

function Main() {
  return (
    <>
      <section className={styles.main} id="main">
        <div className={styles.container}>
          <div>
            <h1>Fast and easy custom boxes your customers will love</h1>
            <p>
              Fastest turnaround. Best prices instantly.
              <br />
              Dieline design help available.
            </p>
            <button>Start your design</button>
          </div>
        </div>
      </section>
      <div className={styles.brands}>
        <div className={styles.container}>
          <div>
            <img
              src={require("../../assets/images/shopify.png")}
              alt="Shopify"
            />
            <p>
              Shopify <br /> Integrated
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/images/Rectangle (1).png")}
              alt="Amazon"
            />
            <p>
              Amazon <br /> Certified
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/images/Rectangle (2).png")}
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
