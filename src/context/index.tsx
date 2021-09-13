import React, { FC, useEffect, useState } from "react";
import axios from "axios";

const ContextProvider: FC = ({ children }) => {
  
  const [data, setData] = useState();
  
  
  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log("Err:", err);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return <>{children}</>;
};

export default ContextProvider;
