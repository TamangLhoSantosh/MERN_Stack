import React from "react";

const Shop = ({ handleAddToCart }) => {
  return (
    <button
      className="px-6 py-4 rounded text-white bg-blue-500 hover:bg-blue-700"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
};

export default Shop;
