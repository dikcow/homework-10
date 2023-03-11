const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const pool = require("./config/config.js");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

router.use("/upload", express.static(path.join(__dirname, "upload")));

router.post("/upload/:id/image", multer({ storage: diskStorage }).single("image"), (req, res) => {
  const file = req.file.path;
  const { id } = req.params;
  if (!file) {
    res.status(400).json({
      message: "No file is selected",
    });
  } else {
    const updateMovieUrl = `
      UPDATE movies 
      SET photo_url = $1
      WHERE id = $2
    `;

    const imageUrl = `http://localhost:3000/upload/${req.file.filename}`;

    pool.query(updateMovieUrl, [imageUrl, id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
          message: "Image uploaded",
        });
      }
    });
  }
});

module.exports = router;
