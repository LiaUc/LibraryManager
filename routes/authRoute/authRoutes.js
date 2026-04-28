const express = require("express");
const router = express.Router();

const signUpValidation = require("../../middleware/auth/signUpValidation");
const signUpController = require("../../controller/authController/signUpController");

router.post("/register", signUpValidation, signUpController);
module.exports = router;
