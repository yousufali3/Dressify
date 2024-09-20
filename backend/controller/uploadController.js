import axios from "axios";
import path from "path";
import fs from "fs";
import { client } from "@gradio/client";
import { log } from "util";

// Handle the photo uploads and interaction with Kwai-Kolors/Kolors-Virtual-Try-On API
export const uploadPhotos = async (req, res) => {
  let userPhotoPath;
  let garmentPhotoPath;
  console.log(req.files);

  try {
    // Multer stores the uploaded files' information in req.files
    userPhotoPath = req.files["userPhoto"][0].path;
    garmentPhotoPath = req.files["garmentPhoto"][0].path;
    console.log(req.files);

    // Read the files to send as blobs
    const userPhotoBlob = fs.readFileSync(userPhotoPath);
    const garmentPhotoBlob = fs.readFileSync(garmentPhotoPath);

    // Connect to the Kwai-Kolors API
    const app = await client("Nymbo/Virtual-Try-On");

    // Send the blobs to the API for virtual try-on
    const result = await app.predict("/tryon", [
      {
        background: userPhotoBlob, // Use the local image blob for background
        layers: [], // Empty layers, update if necessary
        composite: null, // Composite null, update if necessary
      },
      garmentPhotoBlob, // Use the local image blob for the Garment image component
      "Hello!!", // Textbox component
      true, // First boolean Checkbox component
      true, // Second boolean Checkbox component
      23, // Denoising Steps
      23, // Seed
    ]);

    console.log(result.data);

    // Return the response from API
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    // Improved error handling
    console.error("Error during photo upload or API call:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  } finally {
    // Delete the uploaded files after processing
    try {
      if (userPhotoPath) fs.unlinkSync(userPhotoPath);
      if (garmentPhotoPath) fs.unlinkSync(garmentPhotoPath);
    } catch (unlinkError) {
      console.error("Error deleting files:", unlinkError.message);
    }
  }
};
