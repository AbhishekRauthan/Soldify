import React, { createContext, FC, useContext } from "react";
import { State } from "../types/productList";
import { getProductDataHook, getCategoriesHook } from "../utils";

const StoreContext = createContext({} as State);

const ContextProvider: FC = ({ children }) => {
  const { data } = getProductDataHook();
  const { categories } = getCategoriesHook();
  return (
    <StoreContext.Provider value={{ allProducts: data, categories }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default ContextProvider;
