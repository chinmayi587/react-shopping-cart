import React from "react";
import "./App.css";

function Header(props) {

  return (
    <div className="shopping-cart">

      <div
        className="logo"
        onClick={() => props.handleShow(false)}
      >
        Shopping Cart
      </div>

      <div
        className="cart-button"
        onClick={() => props.handleShow(true)}
      >
        Cart <sup>{props.count}</sup>
      </div>

    </div>
  );
}

export default Header;