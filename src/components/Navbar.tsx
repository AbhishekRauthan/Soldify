import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = () => {
  const [closed, setClosed] = useState(true);
  return (
    <header className="bg-white w-full px-5 xl:px-0 sticky top-0 shadow-md lg:shadow-xl py-4 z-20">
      <nav className="py-1 container relative flex justify-between items-center">
        <div className="skew-y-3 bg-gradient-to-r from-pink-500  to-purple-500 ">
          <h1 className="font-lexio text-2xl text-gray-800 capitalize -skew-y-3 p-1.5 tracking-widest">
            <Link to="/">Soldify</Link>
          </h1>
        </div>
        <span className="md:hidden" onClick={() => setClosed(!closed)}>
          <svg
            className={closed ? `h-7 w-7` : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={closed ? `hidden` : "h-7 w-7"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <ul
          className={`${
            closed ? "hidden" : ""
          } absolute md:relative md:inline-flex text-center bg-white shadow-xl top-12 -right-3 md:top-0 md:right-0 space-y-3 md:space-y-0 md:space-x-10 p-3 md:p-0 md:flex-grow justify-end md:shadow-none md:bg-transparent`}
        >
          <Links />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
