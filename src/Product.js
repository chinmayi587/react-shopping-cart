import React from "react";

function Products({ product, addToCart }) {

  return (
    <div className="products">

      {
        product.map((productitem, productIndex) => {

          return (
            <div className="product-item" key={productIndex}>

              <img
                src={productitem.url}
                width="100%"
                alt={productitem.name}
              />

              <h3>{productitem.name}</h3>

              <p>
                {productitem.category}
              </p>

              <p>
                Seller: {productitem.seller}
              </p>

              <p className="price">
                Rs. {productitem.price}
              </p>

              <button
                onClick={() => addToCart(productitem)}
              >
                Add to Cart
              </button>

            </div>
          );

        })
      }

    </div>
  );
}

export default Products;