import React, { useState } from "react";

const Product = () => {
  const [username, setUsername] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log(contactInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(contactInfo);
  };

  return (
    <div className="ps-20 pt-40">
      <h1>{username}</h1>
      <form>
        <label>Username</label>
        <br />
        <input
          type="text"
          className="border border-blue-600 rounded"
          placeholder="Enter Username"
          onChange={handleUsernameChange}
        />
      </form>

      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          className="border border-blue-600 rounded"
          placeholder="Enter your name"
          onChange={handleContactChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          className="border border-blue-600 rounded"
          placeholder="Enter your email"
          onChange={handleContactChange}
        />
        <br />
        <label>Gender</label>
        <br />
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onClick={handleContactChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onClick={handleContactChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onClick={handleContactChange}
          />
          <label htmlFor="other">Other</label>
        </div>
        <br />
        <label>Message</label>
        <br />
        <textarea
          name="message"
          className="border border-blue-600 rounded"
          placeholder="Enter your message"
          onChange={handleContactChange}
        />
        <br />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Product;
