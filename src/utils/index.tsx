import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ProductList from "../types/productList";

export const getProductDataHook = () => {
  const [data, setData] = useState<ProductList[]>([]);

  const getProductData = async () => {
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
    getProductData();
  }, []);

  return { data };
};
export const getCategoriesHook = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response: AxiosResponse<string[]>) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
};
