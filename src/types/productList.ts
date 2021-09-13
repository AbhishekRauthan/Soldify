type ProductList = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number,
    rate: number
  }
}

export default ProductList;

export interface State {
  allProducts: ProductList[],
}

export interface reducerType {
  type: string;
  payload: ProductList[] | ProductList;
}
