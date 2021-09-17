import React, { FC } from "react";

interface Props {
  imgSrc: string;
  statement: string;
  imgAlt: string;
}

const GridItem: FC<Props> = ({ imgSrc, statement, imgAlt }) => {
  return (
    <div className="py-2 mx-auto lg:mx-0 lg:w-full w-5/6 md:w-4/6 bg-gray-50 shadow-md">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-40 md:h-52 w-40 md:w-52 mx-auto md:mt-5 pb-6"
      />
      <span className="inline-block h-0.5 w-4/5 mx-auto bg-gradient-to-r from-pink-500 to-purple-500" />
      <h1 className="font-proza text-lg mt-1 md:mt-4 md:text-xl capitalize">
        {statement}
      </h1>
    </div>
  );
};

export default GridItem;
