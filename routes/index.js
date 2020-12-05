var express = require("express");
var router = express.Router();

// Users Router
router.use("/users", require("./userRouter"));
router.use("/products", require("./productRouter"));
router.use("/banks", require("./bankRouter"));

module.exports = router;
