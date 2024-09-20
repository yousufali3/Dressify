import React, { useState, useEffect } from "react";
import axios from "axios";
import { Camera, X, Image, Download, Rocket } from "lucide-react";
import Example from "../components/Example";
import api from "../../config/api";
import m1 from "/src/assets/m2.png";
import m2 from "/src/assets/m3.webp";
import m3 from "/src/assets/009.jpg";
import m4 from "/src/assets/sm-pic2.webp";
import m5 from "/src/assets/m4.png";
import m6 from "/src/assets/m5.png";
import m7 from "/src/assets/m14.png";
import m8 from "/src/assets/m6.jpg";
import m9 from "/src/assets/m7.jpg";
import m10 from "/src/assets/m8.jpg";
import m11 from "/src/assets/m1.png";
import m12 from "/src/assets/m9.png";
import m13 from "/src/assets/m10.png";
import m14 from "/src/assets/m11.png";
import m15 from "/src/assets/m12.png";
import m16 from "/src/assets/m13.jpg";

import g1 from "/src/assets/g1.jpeg";
import g2 from "/src/assets/g2.jpg";
import g3 from "/src/assets/g3.jpeg";
import g4 from "/src/assets/g4.jpeg";
import g5 from "/src/assets/m17.jpg";
import g6 from "/src/assets/g7.jpeg";
import g7 from "/src/assets/g8.jpeg";
import g8 from "/src/assets/g9.jpeg";
import g9 from "/src/assets/g10.jpeg";
import g10 from "/src/assets/g11.jpeg";
import g11 from "/src/assets/g12.jpeg";
import g12 from "/src/assets/g13.jpeg";
import g13 from "/src/assets/g14.jpeg";
import g14 from "/src/assets/k1.jpeg";
import g15 from "/src/assets/k2.jpeg";
import g16 from "/src/assets/k3.jpeg";

const predefinedPhotos = {
  person: [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
    m15,
    m16,
  ],
  garment: [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g16,
    g15,
    g14,
  ],
};

export default function LandingPage() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pngImageURL, setPngImageURL] = useState(null); // PNG image URL

  useEffect(() => {
    // Clean up object URL if resultImage changes
    return () => {
      if (resultImage) {
        URL.revokeObjectURL(resultImage);
      }
    };
  }, [resultImage]);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (index === 1) {
      setFile1(file);
    } else if (index === 2) {
      setFile2(file);
    }
  };

  const handlePredefinedSelect = (index, type, url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], url.split("/").pop(), {
          type: blob.type,
        });
        if (type === "person") {
          setFile1(file);
        } else if (type === "garment") {
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

    const formData = new FormData();
    formData.append("userPhoto", file1);
    formData.append("garmentPhoto", file2);

    setIsProcessing(true);

    try {
      const response = await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = response.data.data.data[0].url; // Adjust according to your API response
      setResultImage(imageUrl);
      convertImageToPNG(imageUrl);
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Too many users, please try again later");
    } finally {
      setIsProcessing(false);
    }
  };

  const convertImageToPNG = (imageUrl) => {
    console.log(imageUrl);

    const img = document.createElement("img");
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL("image/png");
      setPngImageURL(dataURL);
    };

    img.onerror = () => {
      alert("Failed to convert image to PNG.");
    };
  };

  const handleButtonClick = () => {
    if (isProcessing) return;
    startProcessing();
  };

  const downloadImage = () => {
    if (!pngImageURL || !file1) return; // Ensure both the PNG URL and person file exist

    // Get the original file name of the person photo (excluding the extension)
    const originalFileName = file1.name.split(".").slice(0, -1).join(".");

    // Create the download link with the original file name and the .png extension
    const link = document.createElement("a");
    link.href = pngImageURL;
    link.download = `${originalFileName}.png`; // Use the original file name with .png extension

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke the object URL to release memory
    URL.revokeObjectURL(pngImageURL);
  };

  const getButtonLabel = () => (isProcessing ? "Generating..." : "Generate");

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
                      <Camera size={48} className="w-16 h-16 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        Upload {index === 1 ? "Person" : "Garment"} Photo
                      </span>
                    </>
                  )}
                </label>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <Image size={24} className="text-gray-600" />
                    Example {index === 1 ? "Person" : "Garment"} Photos
                  </h3>
                  <div className="border border-gray-300 rounded-lg p-2">
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {(index === 1
                        ? predefinedPhotos.person
                        : predefinedPhotos.garment
                      ).map((url, i) => (
                        <div
                          key={i}
                          className="relative group cursor-pointer"
                          onClick={() =>
                            handlePredefinedSelect(
                              index,
                              index === 1 ? "person" : "garment",
                              url
                            )
                          }
                        >
                          <img
                            src={url}
                            alt={`Example ${
                              index === 1 ? "Person" : "Garment"
                            } ${i + 1}`}
                            className="w-full h-24 object-contain border border-gray-300 rounded-lg transition-transform transform group-hover:scale-105"
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
                  <div className="spinner"></div>
                ) : resultImage ? (
                  <>
                    <img
                      src={resultImage}
                      alt="Processed Result"
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
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
                  disabled={isProcessing}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Rocket size={16} />
                  {getButtonLabel()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Example />
    </>
  );
}
