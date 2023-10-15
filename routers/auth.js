const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
const validator = require("../middlewares/validator");
const loginSchema = require("../validations/auth");

router.post("/login", validator.body(loginSchema.loginAdminSchema),login);


module.exports = router;