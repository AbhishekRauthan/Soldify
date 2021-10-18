import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  additionalStyles?: string;
}

const Heading: FC<Props> = ({ children, additionalStyles, ...rest }) => {
  return (
    <h1
      className={`font-bold tracking-widest font-lexio underline text-lg md:text-xl lg:text-2xl uppercase text-center ${additionalStyles}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Heading;
