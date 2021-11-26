import React, {
  createContext,
  FC,
  useEffect,
  useState,
  useContext,
} from "react";
import axios, { AxiosResponse } from "axios";
import ProductList, { State } from "../types/productList";

const StoreContext = createContext({} as State);

const ContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<ProductList[]>([]);

  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response: AxiosResponse<ProductList[]>) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <StoreContext.Provider value={{ allProducts: data }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default ContextProvider;
