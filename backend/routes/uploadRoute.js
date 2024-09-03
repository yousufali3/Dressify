import express from "express";
import { uploadPhotos } from "../controller/uploadController.js"; // Make sure to include the .js extension
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });

// Route to handle the photo upload
router.post(
  "/",
  upload.fields([{ name: "userPhoto" }, { name: "garmentPhoto" }]),
  uploadPhotos
);

export default router;
