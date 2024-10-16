import React, { useEffect, useState } from "react";
import axiosInstance from "../../Config/axiosConfig";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-20">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center"
          src={product.product_image}
          alt={product.product_name}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            {product.product_name}
          </h2>
          <p className="text-gray-700 mb-4">{product.product_description}</p>
          <span className="text-lg font-bold">{product.product_price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
