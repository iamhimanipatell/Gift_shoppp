import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, addToCart, removeFromCart, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/details"); // Go to DetailsPage if logged in
    } else {
      localStorage.setItem("redirectAfterLogin", "/details"); // Store checkout intent
      navigate("/login"); // Redirect to login first
    }
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace("₹", ""), 10);
    return isNaN(price) ? total : total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.src} alt="cart item" className="cart-image" />
                <p className="cart-price">{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
