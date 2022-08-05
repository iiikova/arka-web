import React from "react";

function Products() {
  return (
    <div className="container ">
      <div>
        <h2>Products you can customize</h2>
        <button>Browse all products</button>
      </div>
      <section className="products">
        <div>
          <img
            src={require("../assets/images/products/Rectangle.png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Carton Boxes</p>
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
        <div>
          <img
            src={require("../assets/images/products/Rectangle (1).png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Boxes</p>
              <p>A stylish and strong corrugated cardboard box.</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <img
            src={require("../assets/images/products/Rectangle (2).png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Poly Mailers</p>
              <p>A fully custom high quality self sealing poly mailer.</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <img
            src={require("../assets/images/products/Rectangle (3).png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Tape</p>
              <p>
                High quality custom tape to seal your shipping boxes during
                delivery.
              </p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$12.16/unit</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={require("../assets/images/products/Rectangle (4).png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Stickers</p>
              <p>Add personality to your packages with custom stickers.</p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$0.41/unit</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={require("../assets/images/products/Rectangle (5).png")}
            alt="products"
          />
          <div>
            <div>
              <p>Custom Tissue Paper</p>
              <p>The perfect addition to branding your package.</p>
            </div>
            <div>
              <p>Starting at:</p>
              <p>$6.54/unit</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <p>Need unbranded stock items?</p>
        <button>Shop stock</button>
      </div>
    </div>
  );
}

export default Products;
