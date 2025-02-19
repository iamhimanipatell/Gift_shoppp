import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "./Navbar.css";

const Navbar = ({ totalQuantity, isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <nav className="navbar">
      <h1>🎁 Gift Shop</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        
        <li><Link to="/products">Products</Link></li>

        <li>
          <Link to="/cart">
            Cart 🛒 {totalQuantity > 0 && <span className="cart-count">({totalQuantity})</span>} 
          </Link>
        </li>
        
        <li>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="auth-button">Logout</button>
          ) : (
            <Link to="/login" className="auth-link">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
