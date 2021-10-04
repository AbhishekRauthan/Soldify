import React from "react";

const Error = () => {
  return (
    <section className="bg-gray-200 grid place-content-center h-[90vh]">
      <div className="container bg-white p-2 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center w-2/3 md:w-[90%]  text-center">
        <h1 className="text-3xl font-light font-lexio pb-2 md:text-7xl">
          404 Error
        </h1>
        <span className="h-0.5 w-20 mx-auto md:h-16 md:w-0.5 rounded-full md:mx-5 bg-gradient-to-r from-pink-500 to-purple-500"></span>
        <h3 className="capitalize pt-2 text-2xl md:text-4xl font-proza font-extralight">
          Page not Found
        </h3>
        <p className="mt-3 leading-6 md:leading-10 text-xl md:text-2xl font-light md:font-normal">
          Either something went wrong or the Page you requested doesn't exists
        </p>
      </div>
    </section>
  );
};

export default Error;
