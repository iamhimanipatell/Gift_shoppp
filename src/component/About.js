import React from "react";
import "./About.css"; // ✅ Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to <strong>Gift Shop</strong> – your one-stop destination for unique and thoughtful gifts! 🎁  
        We believe that every gift tells a story, and we are here to make those moments special.  
      </p>
      
      <div className="about-content">
        <img 
          src="https://i.pinimg.com/736x/c1/a9/1f/c1a91f7a6b27f2a44947f22f882fad20.jpg" 
          alt="Doodle 1" 
          className="doodle left" 
        />
        <p>
          ✨ <strong>Our Mission:</strong> To bring joy and happiness through handpicked gifts that make every occasion memorable.  
        </p>
      </div>

      <div className="about-content">
        <p>
          🎨 <strong>What We Offer:</strong> From handmade crafts to personalized items, we have a wide range of gifts suited for everyone!  
        </p>
        <img 
          src="https://i.pinimg.com/736x/ff/46/5d/ff465d132513a95d1aa7bafac264a8aa.jpg" 
          alt="Doodle 2" 
          className="doodle right" 
        />
      </div>

      <div className="about-content">
        <img 
          src="https://i.pinimg.com/736x/2d/11/24/2d1124b7f13101d5a79e55bd8da100f3.jpg" 
          alt="Doodle 3" 
          className="doodle left" 
        />
        <p>
          ❤️ <strong>Why Choose Us?</strong> We curate every product with love, ensuring high quality and uniqueness in every piece.  
        </p>
      </div>
    </div>
  );
};

export default About;
