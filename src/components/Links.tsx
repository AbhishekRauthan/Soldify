import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div className="nav-div">
        <Link className="nav-item peer" to="/store">
          Store
        </Link>
        <span className="bottom-span" />
      </div>
      <div className="nav-div">
        <Link className="nav-item peer" to="/categories">
          categories
        </Link>
        <span className="bottom-span" />
      </div>
      {/* <div className="nav-div">
        <Link className="nav-item peer" to="#">
          hello
        </Link>
        <span className="bottom-span" />
      </div> */}
    </>
  );
};
export default Links;
