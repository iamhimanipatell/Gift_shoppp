import React from "react";
import "./Home.css"; // ✅ Import CSS for styling

const images = [
  "https://i.pinimg.com/736x/1c/7b/88/1c7b88eb3ef8b97e3015c047dbc34f78.jpg",
  "https://i.pinimg.com/736x/cc/e6/5d/cce65df669be57867136037e9c7db2af.jpg",
  "https://i.pinimg.com/736x/c5/c1/c4/c5c1c4495d09630270aadc24ac347e28.jpg",
  "https://i.pinimg.com/736x/2d/09/8a/2d098a881298c0760611133164c52246.jpg",
  "https://i.pinimg.com/736x/69/92/1c/69921cedc070e1bc269abbafb0650c11.jpg",
  "https://i.pinimg.com/736x/aa/ab/d9/aaabd946a83c9f6a0b35b573d421e7d1.jpg"
];

const Home = () => {
  return (
    <div className="home-container">
      {/* ✅ Spaced-out heading */}
      <div className="heading-container">
        <h2>Welcome to the Gift Shop! 🎁</h2>
        <p className="sub-heading">Buy something special for your loved ones, with love 💖</p>
      </div>

      {/* ✅ Image Slider inside a division */}
      <div className="slider-wrapper">
        <div className="slider-container">
          <div className="image-slider">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
            {/* ✅ Duplicate images for smooth infinite loop */}
            {images.map((src, index) => (
              <img key={index + images.length} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
