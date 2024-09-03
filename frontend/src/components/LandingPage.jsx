import React from "react";

export default function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">
          Your journey to an amazing experience starts here.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
}
