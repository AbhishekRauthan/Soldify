import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Links from './Links'

const Navbar = () => {
  const [closed, setClosed] = useState(true);
  return (
    <div className="overflow-visible">
      <header className="fixed block top-0 bg-white shadow-xl py-4 z-50 w-full">
        <div className="container relative px-4  md:px-5 flex justify-between items-center ">
          <div className="bg-purple-500/90 skew-y-3">
            <h1 className="font-lexio text-2xl md:text-3xl uppercase -skew-y-3 font-bold tracking-widest">
             <Link to="/">
               soldify
             </Link>
            </h1>
          </div>
          <nav
            className={`${
              closed ? "hidden" : ""
            } absolute shadow-xl top-10 right-5 flex flex-col w-40 items-start pt-4 z-20 bg-white `}
          >
            <Links />
          </nav>
          <nav className="hidden mx-11 md:inline-flex justify-end items-center flex-grow space-x-24">
            <Links />
          </nav>
          <span
            className="cursor-pointer md:hidden"
            onClick={() => setClosed(!closed)}
          >
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;
