const productController = require("../Controller/productController");
const express = require("express");
const { productImage } = require("../middleware/uploadMiddleware");
const router = express.Router();

/**
 * @description To create a new product
 * @api /api/product
 * @access PUBLIC
 * @type POST
 * @return response
 */
router.post(
  "/",
  productImage.single("product_image"),
  productController.product
);

/**
 * @description To get product
 * @api /api/product
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get("/", productController.getAllProduct);

/**
 * @description To get product by id
 * @api /api/product/:id
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get("/:id", productController.getProductById);

/**
 * @description To get product by category
 * @api /api/product/category/:category
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get("/category/:category", productController.getProductByCategory);

/**
 * @description To search product
 * @api /api/product/search-product
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get("/search-product", productController.search);

/**
 * @description To update product
 * @api /api/product/:id
 * @access PUBLIC
 * @type PUT
 * @return response
 */
router.put(
  "/:id",
  productImage.single("product_image"),
  productController.updateProduct
);

module.exports = router;
