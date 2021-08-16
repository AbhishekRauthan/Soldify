import { ActionTypes } from "../constant/action-types";
import ProductList from "../../types/productList";

interface State {
  products: ProductList[],
}

interface reducerType {
  type: string;
  payload: ProductList[] | ProductList;
}

const intialState: State = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }: reducerType) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state: State | {} = {}, { type, payload }: reducerType) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};