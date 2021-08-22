import React from "react";

const Error = () => {
  return (
    <div className="bg-gray-200 grid place-content-center h-[90vh]">
      <div className="container mx-auto bg-white p-2 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center w-2/3 md:w-[90%]  text-center">
        <h1 className="text-3xl font-light font-lexio border-b-2 border-gray-500 pb-2 md:border-none md:text-7xl">
          404 Error
        </h1>
        <span className="md:h-12 md:w-0.5 md:mx-5 md:bg-gray-800"></span>
        <h3 className="capitalize pt-2 text-2xl md:text-4xl font-proza font-extralight">
          Page not Found
        </h3>
        <p className="mt-3 leading-6 md:leading-10 text-xl md:text-2xl font-light md:font-normal">
          Either something went wrong or the Page you requested doesn't exists
        </p>
      </div>
    </div>
  );
};

export default Error;
