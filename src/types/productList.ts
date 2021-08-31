type ProductList = {
  id:number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface State {
  allProducts: ProductList[],
}

export interface reducerType {
  type: string;
  payload: ProductList[] | ProductList;
}


export default ProductList;