const { User, Bank } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

module.exports = {
  signin: async (req, res) => {
    const { username } = req.body;
    const profilePictureUrl = req.file.location;

    try {
      const user = await User.create({ username, profilePictureUrl });
      console.log(user);
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.CREATED_USER, user));
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
  getProfile: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findOne({
        where: { id: userId },
        attributes: ["id", "username", "profilePictureUrl"],
      });
      if (!user) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.PROFILE_GET_SUCCESS,
            user,
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
  getOneUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findOne({
        where: { id: userId },
        attributes: ["id", "username", "profilePictureUrl"],
        include: [{ model: Bank, attributes: ["bankName", "balance"] }],
      });
      if (!user) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(statusCode.OK, responseMessage.GET_ASSETS_SUCCESS, user),
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
};
