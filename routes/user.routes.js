const express = require("express");
const { register } = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.route("/register").post(register);

module.exports = { userRouter };
