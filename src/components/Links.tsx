import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  href: string;
}

const Link: FC<Props> = ({ href, children }) => {
  return (
    <RouterLink to={`/${href}`}>
      <div className="">
        <li className="font-proza list-none text-xl uppercase  peer">
          {children}
        </li>
        <span className="lg:peer-hover:w-full block w-full lg:w-0 h-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 lg:delay-150 lg:duration-300" />
      </div>
    </RouterLink>
  );
};

const Links = () => {
  return (
    <>
      <Link href="store">store</Link>
      <Link href="brands">brands</Link>
      <Link href="categories">categories</Link>
    </>
  );
};

export default Links;
