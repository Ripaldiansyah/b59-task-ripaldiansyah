const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();
const {
  myProject,
  store,
  show,
  edit,
  destroy,
  getDetail,
  listProjects,
} = require("../controllers/ProjectController");
const multer = require("multer");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
    public_id: (req, file) => `${Date.now()} ${file.originalname}`,
  },
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "src/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()} ${file.originalname}`);
//   },
// });

const upload = multer({ storage: storage });
router.get("/list-projects", listProjects);
router.get("/", myProject);
router.get("/:id", getDetail);
router.get("/edit/:id", show);
router.post("/edit/:id", upload.single("imageUrl"), edit);
router.post("/delete/:id", destroy);
router.post("/", upload.single("imageUrl"), store);

module.exports = router;
