import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 mb-0 dark:bg-gray-800">
      <div className="w-full   p-6 md:flex md:items-center md:justify-between">
        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline font-semibold"
          >
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-6 md:mt-0 text-md font-medium text-gray-500 dark:text-gray-400">
          <li className="mr-6">
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li className="mr-6">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="mr-6">
            <a href="/licensing" className="hover:underline">
              Licensing
            </a>
          </li>
          <li>
            <a href="/contribute" className="hover:underline">
              Contribute
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
