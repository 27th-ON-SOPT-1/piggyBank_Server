const express = require("express");
const bankController = require("../controllers/bankController");
const bankRouter = express.Router();
const upload = require("../modules/multer");
// Create a bank
bankRouter.post("/", bankController.createBank);

// Read all banks
bankRouter.get("/", bankController.getAllBanks);

// Read a bank by ID
bankRouter.get("/:bankId", bankController.getOneBank);

// Update a bank
bankRouter.put("/:bankId");

// Delete a bank
bankRouter.delete("/:bankId");

module.exports = bankRouter;
