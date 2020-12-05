const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const upload = require("../modules/multer");
// Create a user
userRouter.post("/", upload.single("image"), userController.signin);

// get Profile
userRouter.get("/:userId/profile", userController.getProfile);

// Read a user by ID
userRouter.get("/:userId", userController.getOneUser);

// Update a user
userRouter.put("/:userId");

// Delete a user
userRouter.delete("/:userId");

module.exports = userRouter;
