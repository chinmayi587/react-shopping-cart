import Header from "./Header";
import "./App.css";
import Products from "./Product";
import { useState } from "react";
import CartList from "./CartList";

function App() {

  const [product] = useState([
    {
      url: "/lenovo.jpg",
      name: "Lenovo IdeaPad Slim 3",
      category: "Laptop",
      seller: "Lenovo",
      price: 57000
    },
    {
      url: "/fastrack.jpg",
      name: "Fastrack W98",
      category: "Watch",
      seller: "Fastrack",
      price: 1599
    },
    {
      url: "/miphone.jpg",
      name: "Mi 12 Pro",
      category: "Mobile",
      seller: "Mi",
      price: 20000
    },
    {
      url: "boat.jpg",
      name: "boAt V20",
      category: "Headset",
      seller: "boAt",
      price: 999
    },
    {
      url: "/IFb.jpg",
      name: "IFB Washing Machine",
      category: "Electronics",
      seller: "Electro",
      price: 20000
    }
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>

      <Header
        count={cart.length}
        handleShow={handleShow}
      />

      {
        showCart
          ? <CartList cart={cart} />
          : <Products
              product={product}
              addToCart={addToCart}
            />
      }

    </div>
  );
}

export default App;