import React from 'react';

const Service = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Services</h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transform Your Look with AI</h2>
        <p className="text-lg text-gray-700 mb-4">
          At [Your Company Name], we specialize in using advanced artificial intelligence to enhance your personal style. Our innovative service allows you to upload a photo of yourself and a separate image of a garment you admire. 
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With our cutting-edge technology, we seamlessly merge the garment with your photo, giving you a realistic preview of how the new garment would look on you. This way, you can explore different styles and make informed fashion choices without having to physically try on each piece.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">How It Works:</h3>
        <ol className="list-decimal list-inside mb-4 text-gray-700">
          <li className="mb-2">Upload a clear photo of yourself.</li>
          <li className="mb-2">Upload an image of the garment you want to try.</li>
          <li className="mb-2">Our AI processes the images and superimposes the garment onto your photo.</li>
          <li className="mb-2">Receive a preview image showing how the garment looks on you.</li>
        </ol>
        <p className="text-lg text-gray-700">
          Experience the future of fashion and make your shopping more enjoyable and efficient with [Your Company Name]. For more information or to get started, contact us at [Your Company Email].
        </p>
      </div>
    </section>
  );
};

export default Service;
