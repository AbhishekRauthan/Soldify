import React from "react";
import { Link } from "react-router-dom";
import Shopping from "../assets/shopping.svg";
import Button from "../components/Button";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import Heading from "../components/Heading";
// svgs
import Payments from "../assets/payments.svg";
import Savings from "../assets/savings.svg";
import World from "../assets/world.svg";

const Home = () => {
  return (
    <main className="bg-white">
      {/* ------- Hero Section Starts here ------- */}
      <section>
        <div className="container mt-3 mb-8 md:my-5 lg:my-10 pt-20 pb-5 md:px-8 md:py-10 flex flex-col md:flex-row">
          <img
            src={Shopping}
            alt="Web Shopping SVG"
            className="w-full py-4 px-8 border-purple-500/70 md:h-80 md:w-1/2"
          />
          <span className="w-64 mt-5 mx-auto h-0.5 md:h-48 lg:h-52 md:my-auto md:w-0.5 bg-purple-500 rounded-full" />
          <div className="mt-4 mx-3 md:mx-0 md:w-1/2 text-center grid place-content-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest font-lexio uppercase underline">
              Soldify
            </h1>
            <p className="text-lg tracking-wider md:tracking-normal md:text-xl lg:text-2xl md:ml-5 lg:ml-10 mt-5 font-proza capitalize">
              An ecommerce for everyone. bringing you best of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-bold">
                indian brands
              </span>
            </p>
            <div className="mx-auto mt-3 space-x-4 md:space-x-10 flex items-center">
              <Button variant="primary">
                <Link to="/store">Checkout Store</Link>
              </Button>
              <Button variant="secondary">
                <Link to="/singin">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ------- Hero Section Ends here ------- */}
      {/* ------- Features Section Starts Here */}
      <section className="bg-white">
        <div className="container py-4">
          <Heading>why use soldify</Heading>
          <Grid>
            <GridItem
              statement="Hassle free Payment"
              imgSrc={Payments}
              imgAlt="stripe payment"
            />
            <GridItem
              statement="Get exciting deals"
              imgSrc={Savings}
              imgAlt="exciting deals"
            />
            <GridItem
              statement="Worldwide shipping"
              imgSrc={World}
              imgAlt="Worldwide shipping"
            />
          </Grid>
          <div className="flex justify-center mt-8">
            <Button variant="primary">
              <Link to="/store">Checkout Store</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* ------- Features Section Ends Here */}
      {/* ------- Categories/Loading Start Here ------- */}
      <section className="bg-red-500">
        <div className="container py-4">
          <Heading>categories</Heading>
          <Grid></Grid>
        </div>
      </section>
    </main>
  );
};

export default Home;
