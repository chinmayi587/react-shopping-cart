import React, { useState, useEffect } from "react";
import "./App.css";

function CartList({ cart }) {

  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const total = CART
    .map(item => item.price * item.quantity)
    .reduce((total, value) => total + value, 0);

  return (
    <div className="cart-list">

      <h2>Your Cart</h2>

      {
        CART.map((cartitem, cartindex) => {

          return (
            <div className="cart-item" key={cartindex}>

              <img
                src={cartitem.url}
                width="70"
                alt={cartitem.name}
              />

              <span className="cart-name">
                {cartitem.name}
              </span>

              <button
                onClick={() => {

                  const _CART = CART.map((item, index) => {

                    return cartindex === index
                      ? {
                          ...item,
                          quantity:
                            item.quantity > 1
                              ? item.quantity - 1
                              : 1
                        }
                      : item;

                  });

                  setCART(_CART);
                }}
              >
                -
              </button>

              <span>
                {cartitem.quantity}
              </span>

              <button
                onClick={() => {

                  const _CART = CART.map((item, index) => {

                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity + 1
                        }
                      : item;

                  });

                  setCART(_CART);
                }}
              >
                +
              </button>

              <span className="subtotal">
                Rs. {cartitem.price * cartitem.quantity}
              </span>

            </div>
          );
        })
      }

      <h3 className="total">
        Total = Rs. {total}
      </h3>

    </div>
  );
}

export default CartList;