const express = require("express");
const router = express.Router();
const { renderContact } = require("../controllers/ContactController");

router.get("/", renderContact);

module.exports = router;
