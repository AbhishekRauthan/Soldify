import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-5">
      <div className="text-center mb-10 md:mb-13 md:mt-13">
        <h1 className="font-bold tracking-widest font-lexio underline text-lg md:text-xl lg:text-2xl uppercase">
          soldify
        </h1>
      </div>
      <div className="container flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-12 items-center md:justify-center align-middle">
        <Links />
      </div>
      <div className="text-center md:text-lg mt-4 text-gray-700 capitalize">
        <p>this is a fictional ecommerce site!</p>
      </div>
    </footer>
  );
};

export default Footer;
