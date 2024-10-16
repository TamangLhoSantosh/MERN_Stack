const domain = "http://localhost:8000";
const Product = require("../models/product");

const product = async (req, res) => {
  try {
    const { product_name, product_description, product_price, category } =
      req.body;

    let productData = {
      product_name,
      product_description,
      product_price,
      category,
    };

    if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      productData.product_image = productImage;
    }

    const product = new Product(productData);
    await product.save();

    res.status(201).json({
      msg: "Product created successfully",
      product: product,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "All Products", products: products });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product", product: product });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

const search = async (req, res) => {
  console.log(req.query);
  try {
    const { search, sort } = req.query;
    let query = {};
    if (search) {
      query.product_name = { $regex: search, $options: "i" };
    }

    let products = await Product.find(query);

    if (sort) {
      const sortOrder = sort === "asc" ? 1 : -1;
      products = products.sort((a, b) => (a.price - b.price) * sortOrder);
    }

    res.json({ message: "Search result", products: products });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res
      .status(200)
      .json({ message: "Product by category", products: products });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

const updateProduct = async (req, res) => {
  try {
    let productData = req.body;
    if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      productData.product_image = productImage;
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Product updated", product: product });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    res.status(200).json({ message: "All products deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

module.exports = {
  product,
  getAllProduct,
  getProductById,
  getProductByCategory,
  search,
  updateProduct,
};
