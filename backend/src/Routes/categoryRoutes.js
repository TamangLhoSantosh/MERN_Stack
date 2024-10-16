const express = require("express");
const categoryController = require("../controller/categoryController");
const router = express.Router();

/**
 * @description To create a new category
 * @api /api/category
 * @access PUBLIC
 * @type POST
 * @return response
 */
router.post("/create", categoryController.category);

/**
 * @description To get all category
 * @api /api/category
 * @access PUBLIC
 * @type get
 * @return response
 */
router.get("/all", categoryController.getAllCategories);

/**
 * @description To get specific category
 * @api /api/category/:id
 * @access PUBLIC
 * @type get
 * @return response
 */
router.patch("/update/:id", categoryController.getCategoryById);

/**
 * @description To update category
 * @api /api/category/:id
 * @access PUBLIC
 * @type put
 * @return response
 */
router.delete("/delete/:id", categoryController.updateCategory);

module.exports = router;
