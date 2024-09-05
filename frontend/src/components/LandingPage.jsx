import React, { useState, useEffect } from "react";
import axios from "axios";
import { Camera, X, Image, Download } from "lucide-react"; // Added Download icon
import Example from "./Example";
import person1 from "../assets/000.png";
import person2 from "../assets/001.png";
import person3 from "../assets/002.png";
import person4 from "../assets/003.png";

import garment1 from "../assets/02_upper.png";
import garment2 from "../assets/03_upper.jpg";
import garment3 from "../assets/06_upper.png";
import garment4 from "../assets/09_upper.png";
const predefinedPhotos = {
  person: [person1, person2, person3, person4],
  garment: [garment1, garment2, garment3, garment4],
};

export default function LandingPage() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [pngImageURL, setPngImageURL] = useState(null); // State for PNG image URL

  useEffect(() => {
    let interval;
    if (isProcessing && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsProcessing(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000); // Update every second
    } else if (!isProcessing) {
      setTimer(120); // Reset timer when processing is stopped
    }
    return () => clearInterval(interval);
  }, [isProcessing, timer]);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (index === 1) {
      setFile1(file);
    } else if (index === 2) {
      setFile2(file);
    }
  };

  const handlePredefinedSelect = (index, url) => {
    console.log("Clicked predefined image", index, url);

    // Create a Blob object from the URL to simulate a file upload
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], url.split("/").pop(), {
          type: blob.type,
        });

        // Update the correct file state based on the index
        if (index === 1) {
          setFile1(file);
        } else if (index === 2) {
          setFile2(file);
        }
      })
      .catch((error) => {
        console.error("Error creating file from predefined image:", error);
      });
  };

  const removeFile = (index) => {
    if (index === 1) {
      setFile1(null);
    } else if (index === 2) {
      setFile2(null);
    }
    setResultImage(null);
  };

  const startProcessing = async () => {
    if (!file1 || !file2) {
      alert("Please upload both images before generating the result.");
      return;
    }
    console.log("pro");

    const formData = new FormData();
    formData.append("userPhoto", file1);
    formData.append("garmentPhoto", file2);

    setIsProcessing(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const imageUrl = response.data.data.data[0].url; // Adjust according to your API response
      setResultImage(imageUrl);

      // Convert the image to PNG and store URL
      convertImageToPNG(imageUrl);
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const convertImageToPNG = (imageUrl) => {
    // Create an HTMLImageElement
    const img = document.createElement("img");
    img.crossOrigin = "Anonymous"; // Handle CORS issues
    img.src = imageUrl;

    img.onload = () => {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas dimensions to match image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Convert canvas to PNG
      const dataURL = canvas.toDataURL("image/png");
      setPngImageURL(dataURL); // Set the PNG image URL
    };

    // Handle image loading errors
    img.onerror = () => {
      alert("Failed to convert image to PNG.");
    };
  };

  const handleButtonClick = () => {
    if (isProcessing) return;
    if (resultImage) {
      downloadImage();
    } else {
      startProcessing();
    }
  };

  const downloadImage = () => {
    if (!pngImageURL) return;

    // Create a link element for download
    const link = document.createElement("a");
    link.href = pngImageURL;
    link.download = "result-image.png"; // Set the desired file name and format

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-white p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full mt-12">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Upload Your Photo and Garment Photo to See the Perfect Fit
          </h1>
          <p className="text-lg mb-6 text-center text-gray-600">
            Get a realistic view of your outfit by merging your photo with
            garment images.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {[1, 2].map((index) => (
              <div key={index} className="relative w-full md:w-1/3">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  {index === 1
                    ? "Step 1. Upload a person image"
                    : "Step 2. Upload a garment image"}
                </h2>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e)}
                  className="hidden"
                  id={`file-${index}`}
                />
                <label
                  htmlFor={`file-${index}`}
                  className="flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  {index === 1 && file1 ? (
                    <>
                      <img
                        src={URL.createObjectURL(file1)}
                        alt={`Person Image`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeFile(index);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : index === 2 && file2 ? (
                    <>
                      <img
                        src={URL.createObjectURL(file2)}
                        alt={`Garment Image`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeFile(index);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <Camera className="w-16 h-16 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        Add Photo {index}
                      </span>
                    </>
                  )}
                </label>
                {/* Predefined Photos */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <Image size={24} className="text-gray-600" />
                    Example {index === 1 ? "Person" : "Garment"} Photos
                  </h3>
                  <div className="border border-gray-300 rounded-lg p-2">
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {" "}
                      {/* Updated to gap-2 */}
                      {(index === 1
                        ? predefinedPhotos.person
                        : predefinedPhotos.garment
                      ).map((url, i) => (
                        <div key={i} className="relative group">
                          <img
                            src={url}
                            alt={`Example ${
                              index === 1 ? "Person" : "Garment"
                            } ${i + 1}`}
                            className="w-full h-24 object-contain border border-gray-300 rounded-lg transition-transform transform group-hover:scale-105"
                            onClick={() => {
                              alert("hi");
                            }}
                          />
                          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full md:w-1/3">
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Click "Generate" to see your results
              </h2>
              <div className="w-full h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center relative">
                {isProcessing ? (
                  <>
                    <div className="spinner"></div> {/* Spinner */}
                    <span className="text-gray-500 mt-4">
                      Generating... {timer}s
                    </span>
                  </>
                ) : resultImage ? (
                  <>
                    <img
                      src={resultImage}
                      alt="Processed Result"
                      className="w-full h-full object-contain rounded-lg"
                    />
                    <button
                      onClick={downloadImage}
                      className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition-colors"
                    >
                      <Download size={16} />
                    </button>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <Image size={24} className="text-gray-600" />
                      <span className="text-gray-500">
                        Upload your photos to see the magic
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 ml-[35%]">
                <button
                  onClick={handleButtonClick}
                  disabled={isProcessing ? true : false}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {isProcessing
                    ? "Generate..."
                    : resultImage
                    ? "Download"
                    : "Generate"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Example />
      </section>
    </>
  );
}
