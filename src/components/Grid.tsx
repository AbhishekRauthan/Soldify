import React, { FC } from "react";

const Grid: FC = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7 px-3 gap-y-7 md:gap-y-10 lg:mx-auto text-center">
      {children}
    </div>
  );
};

export default Grid;
