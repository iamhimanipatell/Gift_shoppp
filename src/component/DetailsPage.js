import React, { useState } from "react";
import "./DetailsPage.css"; 

const DetailsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Further actions can be done here like sending the data to a server or displaying a confirmation.
  };

  return (
    <div className="details-container">
      <h2>Delivery Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="details-input"
        />

        <div className="phone-email">
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="details-input"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="details-input"
          />
        </div>

        <input
          type="text"
          placeholder="Delivery Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="details-input"
        />

        <div className="location">
          <input
            type="text"
            placeholder="Pin Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="details-input"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="details-input"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="details-input"
          />
        </div>

        <select
          className="details-input"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>

        <button type="submit" className="details-button">Submit</button>
      </form>
    </div>
  );
};

export default DetailsPage;
