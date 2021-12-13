import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link className="nav-div" to="/store">
        <div className="nav-item peer">Store</div>
        <span className="bottom-span" />
      </Link>
      <Link className="nav-div" to="/categories">
        <div className="nav-item peer">categories</div>
        <span className="bottom-span" />
      </Link>
      <Link className="nav-div" to="/brands">
        <div className="nav-item peer">brands</div>
        <span className="bottom-span" />
      </Link>
    </>
  );
};
export default Links;
