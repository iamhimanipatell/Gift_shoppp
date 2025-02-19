import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Home from "./component/Home";
import About from "./component/About";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Login from "./component/Login";
import DetailsPage from "./component/DetailsPage";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.src === item.src);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.src === item.src
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.src === item.src
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
      {showPopup && <div className="popup">Product added to cart!</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/cart" 
          element={(
            <Cart 
              cartItems={cart} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
              isAuthenticated={isAuthenticated} 
            />
          )} 
        />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      {location.pathname !== "/products" && location.pathname !== "/cart" && <Footer />}
    </>
  );
};

export default App;
