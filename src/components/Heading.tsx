import React, { FC } from "react";

const Heading: FC = ({ children }) => {
  return (
    <h1 className="font-bold tracking-widest font-lexio underline text-lg md:text-xl lg:text-2xl uppercase text-center mb-5 md:mb-7 lg:mb-10">
      {children}
    </h1>
  );
};

export default Heading;
