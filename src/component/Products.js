import React, { useState } from "react";
import SearchBar from "./SearchBar"; // Import SearchBar Component
import "./Product.css";

const Products = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const productCategories = [
    {
      name: "Flowers",
      products: [
        { name: "Red Roses", src: "https://i.pinimg.com/736x/0b/04/c7/0b04c75706da1bdc012fbfdae80bf9c0.jpg", price: "₹299" },
        { name: "Blue Orchids", src: "https://i.pinimg.com/736x/4e/89/bb/4e89bbc9c553d3d844df971548478cdb.jpg", price: "₹349" },
        { name: "White Lilies", src: "https://i.pinimg.com/736x/46/90/2a/46902ae7133e3a83dd64d9f0c79eda56.jpg", price: "₹399" },
        { name: "Pink Tulips", src: "https://i.pinimg.com/736x/b9/a7/18/b9a718df45a15a40810da7b3c7e8cd07.jpg", price: "₹449" },
        { name: "Sunflowers", src: "https://i.pinimg.com/736x/c1/d9/42/c1d942f66b90957704df7762b0599f5b.jpg", price: "₹499" },
        { name: "Daisies", src: "https://i.pinimg.com/736x/e5/31/ac/e531acb13a5102d58a93cd023342f25b.jpg", price: "₹549" },
      ],
    },
    {
      name: "Handmade Cards",
      products: [
        { name: "Birthday Card", src: "https://i.pinimg.com/736x/74/5f/bb/745fbb0e9b77d89c37b3bd65a65d19ef.jpg", price: "₹199" },
        { name: "Anniversary Card", src: "https://i.pinimg.com/736x/e4/8e/22/e48e226a664177eac142f5fe64f4d410.jpg", price: "₹249" },
        { name: "Wedding Card", src: "https://i.pinimg.com/736x/17/75/ac/1775ac23e7019959cf38afe71864f9b1.jpg", price: "₹299" },
        { name: "Thank You Card", src: "https://i.pinimg.com/736x/22/b9/59/22b9599bb97b0ef65cc465a76817abb7.jpg", price: "₹349" },
        { name: "Love Card", src: "https://i.pinimg.com/736x/22/b9/59/22b9599bb97b0ef65cc465a76817abb7.jpg", price: "₹399" },
        { name: "Congratulations Card", src: "https://i.pinimg.com/736x/8f/ca/90/8fca9072e5920ca120a07d8d6587bfbe.jpg", price: "₹449" },
      ],
    },
    {
      name: "Hampers",
      products: [
        { name: "Luxury Hamper", src: "https://i.pinimg.com/736x/cf/4d/cd/cf4dcd1ddc03d32aef1e48441bdc2eaa.jpg", price: "₹599" },
        { name: "Chocolate Hamper", src: "https://i.pinimg.com/736x/4c/d6/7b/4cd67b3b64ad4e41f2cc8fb07792fcb1.jpg", price: "₹699" },
        { name: "Gourmet Hamper", src: "https://i.pinimg.com/736x/41/5d/c6/415dc694ce7060407b52d87ac56b9fdb.jpg", price: "₹799" },
        { name: "Spa Hamper", src: "https://i.pinimg.com/736x/e3/2e/92/e32e92114f1dd4a00aec7f1d5fab0ab6.jpg", price: "₹899" },
        { name: "Fruit Hamper", src: "https://i.pinimg.com/736x/9a/77/e8/9a77e809e1dabdcfec0d738fefb64f33.jpg", price: "₹999" },
        { name: "Tea Hamper", src: "https://i.pinimg.com/736x/83/58/ac/8358acb4787665139283d6c8110baf57.jpg", price: "₹1099" },
      ],
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredCategories = productCategories.map((category) => ({
    ...category,
    products: category.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    ),
  }));

  return (
    <div className="products-container">
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      {filteredCategories.map((category, index) => (
        <div key={index} className="category">
          <h2 className="category-title">{category.name}</h2>
          <div className="image-container">
            {category.products.map((item, idx) => (
              <div key={idx} className="product-card">
                <img src={item.src} alt={`${category.name} ${idx + 1}`} className="product-image" />
                <p className="product-name">{item.name}</p>
                <p className="price">{item.price}</p>
                <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
