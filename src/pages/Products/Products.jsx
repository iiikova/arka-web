import React from "react";
import styles from "./Products.module.scss";

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Products you can customize</h2>
        <button>Browse all products</button>
      </div>
      <div className={styles.prod}>
        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle.png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Carton Boxes</h3>
              <p>
                Create a clean brand presentation with this custom carton box.
              </p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$10.44/unit</p>
            </div>
          </div>
        </div>

        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle (1).png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Boxes</h3>
              <p>A stylish and strong corrugated cardboard box.</p>
            </div>
            <div></div>
          </div>
        </div>

        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle (2).png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Poly Mailers</h3>
              <p>A fully custom high quality self sealing poly mailer.</p>
            </div>
            <div></div>
          </div>
        </div>

        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle (3).png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Tape</h3>
              <p>
                High quality custom tape to seal your shipping boxes during
                delivery.
              </p>
            </div>
            <div className={styles.desc__price}>
              <p>Starting at:</p>
              <p>$12.16/unit</p>
            </div>
          </div>
        </div>

        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle (4).png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Stickers</h3>
              <p>Add personality to your packages with custom stickers.</p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$0.41/unit</p>
            </div>
          </div>
        </div>

        <div className={styles.prod__item}>
          <img
            src={require("../../assets/images/products/Rectangle (5).png")}
            alt="products"
          />
          <div className={styles.prod__item__desc}>
            <div>
              <h3>Custom Tissue Paper</h3>
              <p>The perfect addition to branding your package.</p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$6.54/unit</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.under_title}>
        <p>Need unbranded stock items?</p>
        <button>Shop stock</button>
      </div>
    </div>
  );
}

export default Products;
