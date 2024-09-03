import React from "react";
import { Camera, Shirt, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Dressify</h1>
        </div>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Welcome to Dressify, where fashion meets technology to revolutionize
            your wardrobe experience.
          </p>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: "Upload Your Photo",
                  description: "Start by uploading a clear photo of yourself.",
                  icon: Camera,
                },
                {
                  name: "Choose Your Garment",
                  description:
                    "Select from our vast collection or upload your own garment photo.",
                  icon: Shirt,
                },
                {
                  name: "See the Magic",
                  description:
                    "Watch as we seamlessly apply the garment to your photo.",
                  icon: Zap,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-500">
              At Dressify, we're passionate about helping you discover your
              perfect style. Our cutting-edge technology allows you to virtually
              try on clothes, making shopping more fun, efficient, and
              personalized than ever before.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900">
              Join the Fashion Revolution
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Experience the future of fashion today. With Dressify, your dream
              wardrobe is just a click away.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            &copy; 2024 Dressify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
