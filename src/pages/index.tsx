import React from "react";
import Shopping from "../assets/shopping.svg";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      {/* ------- Hero Section Starts here ------- */}
      <section className="bg-white h-[96vh]">
        <div className="container mx-auto my-3 md:my-5 lg:mt-10 py-5 md:px-8 md:py-10 flex flex-col md:flex-row">
          <img
            src={Shopping}
            alt="Web Shopping SVG"
            className="w-full py-4 px-8 border-purple-500/70 md:h-80 md:w-1/2"
          />
          <span className="w-64 mt-5 mx-auto h-0.5 md:h-48 md:my-auto md:w-0.5 bg-purple-500 rounded-full" />
          <div className="mt-4 md:w-1/2 text-center grid place-content-center">
            <h1 className="text-3xl font-bold tracking-widest font-lexio uppercase underline">
              Soldify
            </h1>
            <p className="text-2xl md:ml-5 lg:ml-10 mt-5 font-proza capitalize">
              An ecommerce for everyone. bringing you best of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-bold">
                indian brands
              </span>
            </p>
            <div className="mx-auto mt-3 space-x-10 flex items-center">
              <Button>Check Store</Button>
              <Button secondary>Sign Up</Button>
            </div>
          </div>
        </div>
      </section>
      {/* ------- Hero Section Ends here ------- */}
    </>
  );
};

export default Home;
