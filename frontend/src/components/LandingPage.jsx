import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import Example from "./Example";

export default function PhotoUploadAndResult() {
  const [files, setFiles] = useState([null, null]);
  const [resultImage, setResultImage] = useState(null);

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);

    // If both files are uploaded, simulate processing
    if (newFiles[0] && newFiles[1]) {
      simulateImageProcessing();
    }
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles[index] = null;
    setFiles(newFiles);
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
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-white p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full  mt-12">
          {" "}
          {/* Increased max-w to 5xl for more space */}
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Upload Your Photos
          </h1>
          <p className="text-lg mb-6 text-center text-gray-600">
            Choose two photos to upload and process.
          </p>
          <div className="flex gap-6 mb-6">
            {[0, 1].map((index) => (
              <div key={index} className="relative w-1/3">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  PErson Image
                </h2>{" "}
                {/* Changed to flex layout */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e)}
                  className="hidden"
                  id={`file-${index}`}
                />
                <label
                  htmlFor={`file-${index}`}
                  className="flex flex-col items-center justify-center w-full h-48 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  {files[index] ? (
                    <>
                      <img
                        src={URL.createObjectURL(files[index])}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
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
                        Add Photo {index + 1}
                      </span>
                    </>
                  )}
                </label>
              </div>
            ))}
            <div className="w-1/3">
              {" "}
              {/* Adjust width to 1/3 for balance */}
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Garment Image
              </h2>
              {resultImage ? (
                <img
                  src={resultImage}
                  alt="Processed Result"
                  className="w-full h-48 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">
                    Upload two photos to see the result
                  </span>
                </div>
              )}
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
