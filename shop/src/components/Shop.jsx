import React from "react";

const Shop = ({ handleAddToCart }) => {
  return (
    <button
      className="px-6 py-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
};

export default Shop;
