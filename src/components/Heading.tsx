import React, { FC, HTMLAttributes } from "react";

const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...rest
}) => {
  return (
    <h1
      className={`font-bold tracking-widest font-lexio underline text-lg md:text-xl lg:text-2xl uppercase text-center`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Heading;
