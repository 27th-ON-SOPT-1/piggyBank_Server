const { User, Product } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

module.exports = {
  createProduct: async (req, res) => {
    const { productName, subtitle } = req.body;
    const productImageUrl = req.file.location;
    try {
      const product = await Product.create({
        productName,
        subtitle,
        productImageUrl,
      });
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.CREATE_PRODUCT_SUCCESS,
            product,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
  getOneProduct: async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await Product.findOne({
        where: { id: productId },
        attributes: ["id", "productName", "subtitle", "productImageUrl"],
      });
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ONE_PRODUCT_SUCCESS,
            product,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(util.fail(statusCode.OK, responseMessage.INTERNAL_SERVER_ERROR));
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: ["id", "productName", "subtitle", "productImageUrl"],
      });
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ALL_PRODUCTS_SUCCESS,
            products,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(util.fail(statusCode.OK, responseMessage.INTERNAL_SERVER_ERROR));
    }
  },
};
