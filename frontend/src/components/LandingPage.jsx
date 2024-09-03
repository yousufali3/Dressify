import React, { useState } from "react";
import { Camera, X } from "lucide-react";

export default function PhotoUploadAndResult() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (index === 1) {
      setFile1(file);
    } else if (index === 2) {
      setFile2(file);
    }

    // If both files are uploaded, simulate processing
    if (file1 && file2) {
      simulateImageProcessing();
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

  const simulateImageProcessing = () => {
    // In a real application, you would process the images here
    // For now, we'll just use a placeholder
    setTimeout(() => {
      setResultImage("/api/placeholder/600/300");
    }, 1000);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-white p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full  mt-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Upload Your Photos</h1>
        <p className="text-lg mb-6 text-center text-gray-600">
          Choose two photos to upload and process.
        </p>
        <div className="flex gap-6 mb-6">
          {/* First Image Input */}
          <div className="relative w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Person Image 1</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(1, e)}
              className="hidden"
              id="file-1"
            />
            <label
              htmlFor="file-1"
              className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors relative"
            >
              {file1 ? (
                <>
                  <img
                    src={URL.createObjectURL(file1)}
                    alt="Upload 1"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile(1);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <>
                  <Camera className="w-16 h-16 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">Add Photo 1</span>
                </>
              )}
            </label>
          </div>

          {/* Second Image Input */}
          <div className="relative w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Person Image 2</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(2, e)}
              className="hidden"
              id="file-2"
            />
            <label
              htmlFor="file-2"
              className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors relative"
            >
              {file2 ? (
                <>
                  <img
                    src={URL.createObjectURL(file2)}
                    alt="Upload 2"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile(2);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <>
                  <Camera className="w-16 h-16 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">Add Photo 2</span>
                </>
              )}
            </label>
          </div>

          {/* Result Image */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Result Image</h2>
            {resultImage ? (
              <img
                src={resultImage}
                alt="Processed Result"
                className="w-full h-48 object-contain rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Upload two photos to see the result</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
