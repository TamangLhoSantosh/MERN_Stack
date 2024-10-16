const Category = require("../models/category");

const category = (req, res) => {
  const name = req.body.category_name;
  const newCategory = new Category({ category_name: name });
  newCategory
    .save()
    .then((data) => {
      res.status(201).json({ message: "Category Successfully Added", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in creating Category", err });
    });
};

const getAllCategories = (req, res) => {
  Category.find()
    .then((data) => {
      res.status(200).json({ message: "All Categories", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in fetching Categories", err });
    });
};

const getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then((data) => {
      res.status(200).json({ message: "Category", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in fetching Category", err });
    });
};

const updateCategory = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category Updated", category });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    });
};

module.exports = {
  category,
  getAllCategories,
  getCategoryById,
  updateCategory,
};
