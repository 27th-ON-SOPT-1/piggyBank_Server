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

// Read a product by id
productRouter.get("/:productId", productController.getOneProduct);

// Read all products
productRouter.get("/", productController.getAllProducts);

// Update a product
productRouter.put("/:productId");

// Delete a product
productRouter.delete("/:productId");

module.exports = productRouter;
