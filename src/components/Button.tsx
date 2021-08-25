import React, { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

const Button: FC<Props> = ({ children, secondary, ...rest }) => {
  if (secondary) {
    return (
      <div className="relative peer">
        <button
          className="font-proza md:hover:translate-x-3 delay-100 duration-300 ease-in-out peer md:text-lg "
          {...rest}
        >
          {children}
        </button>
        <span className="absolute left-0 top-0 h-full w-0 peer-hover:w-1 md:peer-hover:bg-gradient-to-b from-pink-500 to-purple-500 delay-100 duration-300 ease-in-out rounded-full hidden md:block" />
      </div>
    );
  } else {
    return (
      <button
        className="py-1.5 md:py-3 px-2.5 md:px-4 block rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white duration-300 delay-150 ease-in-out md:hover:-translate-y-3 shadow md:hover:shadow-2xl font-proza md:text-lg"
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export default Button;
