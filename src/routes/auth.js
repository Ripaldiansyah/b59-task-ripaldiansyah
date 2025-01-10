const express = require("express");
const router = express.Router();
const {
  renderLogin,
  renderRegister,
  login,
  register,
  logout,
} = require("../controllers/AuthController");

router.get("/login", renderLogin);
router.get("/logout", logout);
router.post("/login", login);
router.get("/register", renderRegister);
router.post("/register", register);

module.exports = router;
