import React, { useState, useEffect } from "react";
import { Camera, X, Image } from "lucide-react"; // Added Image icon for examples
import Example from "./Example";

const predefinedPhotos = {
  person: [
    "/path/to/person1.jpg",
    "/path/to/person2.jpg",
    "/path/to/person3.jpg",
    "/path/to/person4.jpg",
  ],
  garment: [
    "/path/to/garment1.jpg",
    "/path/to/garment2.jpg",
    "/path/to/garment3.jpg",
    "/path/to/garment4.jpg",
  ],
};

export default function LandingPage() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [timer, setTimer] = useState(60); // Timer in seconds

  useEffect(() => {
    let interval;
    if (isProcessing && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setResultImage("/api/placeholder/600/300"); // Simulate processing result
            setIsProcessing(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000); // Update every second
    } else if (!isProcessing) {
      setTimer(60); // Reset timer when processing is stopped
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
    if (index === 1) {
      setFile1(null);
      setResultImage(url); // Set the predefined image as result
    } else if (index === 2) {
      setFile2(null);
      setResultImage(url); // Set the predefined image as result
    }
  };

  const removeFile = (index) => {
    if (index === 1) {
      setFile1(null);
    } else if (index === 2) {
      setFile2(null);
    }
    setResultImage(null);
  };

  const startProcessing = () => {
    if (!file1 && !file2 && !resultImage) {
      alert(
        "Please upload or select both images before generating the result."
      );
      return;
    }
    setIsProcessing(true);
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
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
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
                            className="w-full h-24 object-cover border border-gray-300 rounded-lg transition-transform transform group-hover:scale-105"
                            onClick={() => handlePredefinedSelect(index, url)}
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
              <div className="w-full h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                {isProcessing ? (
                  <>
                    <div className="spinner"></div> {/* Spinner */}
                    <span className="text-gray-500 mt-4">
                      Generating... {timer}s
                    </span>
                  </>
                ) : resultImage ? (
                  <img
                    src={resultImage}
                    alt="Processed Result"
                    className="w-full h-full object-contain rounded-lg"
                  />
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
                {!isProcessing && (
                  <div className="mt-6">
                    <button
                      onClick={startProcessing}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Generate
                    </button>
                  </div>
                )}
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
