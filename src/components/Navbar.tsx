import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-xl py-4">
      <div className="container mx-auto px-3 lg:px-0 flex justify-between items-center">
        <div className="bg-purple-500 skew-y-3">
          <h1 className="font-lexio text-xl md:text-3xl uppercase -skew-y-3 font-bold ">
            Soldify
          </h1>
        </div>
        <nav className=""></nav>
      </div>
    </header>
  );
};

export default Navbar;
