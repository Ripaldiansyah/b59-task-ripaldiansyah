const express = require("express");
const router = express.Router();
const {
  renderListProjectRating,
  renderFormRating,
  renderListProjectRated,
  store,
} = require("../controllers/RatingController");

router.get("/", renderListProjectRating);
router.get("/list", renderListProjectRated);
router.get("/rate/:id", renderFormRating);
router.post("/:id", store);

module.exports = router;
