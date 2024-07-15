import React from "react";
import Shop from "../Shop";

const Functional = () => {
  const handleAddToCart = () => {
    alert("Add to cart clicked");
  };
  return (
    <div>
      <Shop handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Functional;
