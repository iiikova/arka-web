import React from "react";
import styles from "../Design/Design.module.scss";

function Design() {
  return (
    <div className={styles.container} id="design">
      <section>
        <div className={styles.green_box}>
          <h2>Fast and easy custom boxes your customers will love</h2>
          <div className={styles.green_items}>
            <div>
              <img
                src={require("../../assets/images/frames/Rectangle.png")}
                alt="frame"
              />
              <h3>You Order</h3>
              <p>
                Design and order boxes in a
                <br />
                few clicks.
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/images/frames/Rectangle (1).png")}
                alt="frame"
              />
              <h3>We Proof</h3>
              <p>
                Approve your designs
                <br />
                before production.
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/images/frames/Rectangle (2).png")}
                alt="frame"
              />
              <h3>We Print & Ship</h3>
              <p>
                Your order gets printed and
                <br />
                shipped with tracking.
              </p>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Start your design</button>
          </div>
        </div>

        <div className={styles.trans_box}>
          <h2>The Arka advantage</h2>
          <div className={styles.trans_items}>
            <div>
              <img
                src={require("../../assets/images/frames/1.png")}
                alt="frame"
              />
              <h3>Eco-Friendly Material</h3>
              <p>
                Order as little as 10, giving you the
                <br />
                lowest minimums in the industry at
                <br />
                the best prices.
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/images/frames/2.png")}
                alt="frame"
              />
              <h3>Full Outside Print</h3>
              <p>
                Design what you want - no extra
                <br />
                cost! Prices include 100% exterior
                <br />
                print, change design whenever!
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/images/frames/3.png")}
                alt="frame"
              />
              <h3>Proofing</h3>
              <p>
                After you order, our internal designers
                <br />
                help make sure your designs are
                <br />
                100% ready for printing!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.yellow_box}>
          <div>
            <img
              src={require("../../assets/images/frames/11.png")}
              alt="frame"
            />
            <h3>Couldn't find a size you need?</h3>
            <p>
              We’ll work directly with you to create a fully branded packaging
              system.
            </p>
            <button>Request a quote</button>
          </div>
          <div>
            <img
              src={require("../../assets/images/frames/22.png")}
              alt="frame"
            />
            <h3>Couldn't find a size you need?</h3>
            <p>
              Let us know what size you need and we'll email an Adobe
              Illustrator dieline to you within 3-4 business days.
            </p>
            <button>Request a quote</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Design;
