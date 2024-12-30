const express = require("express");
const router = express.Router();
const {
  index,
  store,
  show,
  edit,
  destroy,
  getDetail,
} = require("../controllers/ProjectController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
router.get("/", index);
router.get("/:id", getDetail);
router.get("/edit/:id", show);
router.post("/edit/:id", upload.single("imageUrl"), edit);
router.post("/delete/:id", destroy);
router.post("/", upload.single("imageUrl"), store);

module.exports = router;
