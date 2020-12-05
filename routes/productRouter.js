const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
const upload = require("../modules/multer");

// Create a product
productRouter.post(
  "/",
  upload.single("image"),
  productController.createProduct,
);

// Read all products
productRouter.get("/:productId", productController.getOneProduct);

// Read a product by ID
productRouter.get("/:productId");

// Update a product
productRouter.put("/:productId");

// Delete a product
productRouter.delete("/:productId");

module.exports = productRouter;
