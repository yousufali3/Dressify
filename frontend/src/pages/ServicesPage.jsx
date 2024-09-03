import React from "react";
import { Camera, Tshirt, Image, Upload } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Dressify Services
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Virtual Try-On Experience
          </h2>
          <p className="text-gray-600 mb-6">
            Transform your shopping experience with our cutting-edge virtual
            try-on technology. See how garments look on you without the need for
            a physical fitting room.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
              <Camera className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Upload Your Photo
              </h3>
              <p className="text-gray-600 text-center">
                Start by uploading a clear, full-body photo of yourself.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
              <Tshirt className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Choose a Garment
              </h3>
              <p className="text-gray-600 text-center">
                Select the garment you'd like to try on virtually.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
              <Image className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                See the Result
              </h3>
              <p className="text-gray-600 text-center">
                Our AI will blend the garment onto your photo for a realistic
                preview.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li>Upload your photo and the garment you want to try</li>
              <li>Our advanced AI processes your request</li>
              <li>
                View the generated image of you wearing the selected garment
              </li>
              <li>Experiment with different styles and sizes</li>
              <li>
                Make confident purchase decisions based on how the clothes look
                on you
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center">
            <Upload className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Ready to Try?
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Experience the future of online shopping with our virtual try-on
              service.
            </p>
            <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
              Start Now
            </button>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 Dressify. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
