require("dotenv").config();
const userModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userController = {
  register: async (req, res) => {
    try {
      const existedUser = await userModel.findOne({
        email: req.body.email,
      });

      if (existedUser) {
        return res.status(409).json("User already exist.");
      }

      const verify_token = await jwt.sign(
        { user_id: req.body.email },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      const verify_token_encrypt = await bcrypt.hash(verify_token, 10);
      const user_signup = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        verify_token: login_token_encrypt,
        verify: false,
        verify_token: verify_token_encrypt,
      });
      user_signup.save();
      return res.status(200).json({ user_signup });
    } catch (error) {
      return res.status(500).json("unknown error");
    }
  },
  login: async (req, res, next) => {
    try {
      const user_search = await userModel.findOne({
        email: req.body.email,
      });
      if (!user_search) {
        return res.status(404).json("User not found");
      }
      const password_verification = await bcrypt.compare(
        req.body.password,
        user_search.password
      );
      if (!password_verification) {
        return res.status(400).json("Incorrect password");
      }

      if (!user_search.verify) {
        return res.status(400).json("User is not verified");
      }

      const new_token = await jwt.sign(
        { id_token: user_search._id },
        process.env.TOKEN_KEY
      );

      // const updateToken = await userModel.findOneAndUpdate({ email: req.body.email }, { token: new_token});
      // !updateToken && res.status(404).json("error");
      user_search.token = new_token;

      user_search.password = undefined;
      return res.status(200).json(user_search);
    } catch (error) {
      return res.status(500).json("unknown error");
    }
  },
};
module.exports = userController;
