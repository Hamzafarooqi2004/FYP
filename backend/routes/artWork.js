// Import necessary modules
const express = require('express');
const router = express.Router();
const multer  = require('multer')

const { saveArtwork } = require('../controller/artController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/Users/jamsh/Desktop/FYP/FYP/frontend/src/uploads/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

// Route for saving artwork with file upload
router.post('/upload', upload.single('image'),  saveArtwork);

module.exports = router;
