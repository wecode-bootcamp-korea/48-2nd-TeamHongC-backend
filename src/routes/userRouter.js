const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/kakaosign", userController.kakaoSign);

module.exports = { userRouter };
