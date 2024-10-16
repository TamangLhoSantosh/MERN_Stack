import React, { useEffect, useState } from "react";
import axiosInstance from "../../Config/axiosConfig";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_image: "",
    product_price: "",
  });

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      product_name: product.product_name,
      product_description: product.product_description,
      product_image: product.product_image,
      product_price: product.product_price,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(
        `/api/products/${selectedProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product updated successfully");
      toast.success("Product updated successfully!");
      getProducts(); // Refresh the product list
      setSelectedProduct(null);
    } catch (error) {
      toast.error("Error updating product!");
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto my-20">
      <ToastContainer />
      {selectedProduct && (
        <div className="mt-8 p-4 border rounded">
          <h2 className="text-2xl mb-4">Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="product_name"
                value={formData.product_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Description</label>
              <textarea
                name="product_description"
                value={formData.product_description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Image</label>
              <input
                type="file"
                name="product_image"
                onChange={(e) => (formData.product_image = e.target.files[0])}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Price</label>
              <input
                type="number"
                name="product_price"
                value={formData.product_price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Update Product
            </button>
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
            onClick={() => navigate(`/products/${product._id}`)}
          >
            <img
              className="w-full"
              src={product.product_image}
              alt={product.product_name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {product.product_name}
              </div>
              <p className="text-gray-700 text-base">
                {product.product_description}
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {product.product_price}
              </span>
              <button
                onClick={() => handleEditClick(product)}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
