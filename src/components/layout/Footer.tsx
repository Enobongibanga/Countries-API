import React from "react";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 m-4">
      <div className="w-full container mx-auto p-4 md:px-6 ">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#/" className="hover:underline">
            Enobong Igho-Godwin™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
