import { createContext } from 'react'
import { State } from '../types/productList'

export const store: State = {
  allProducts: []
}

export default createContext(store);

