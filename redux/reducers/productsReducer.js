import { PRODUCTS_ALL } from "../actions/productsActions";
import { PRODUCT_ADD, PRODUCT_DEL } from "../actions/productsActions";

const INITIAL_STATE = {
  products: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ALL:
      return { products: action.payload };
    case PRODUCT_ADD:
      return { products: action.payload };
    case PRODUCT_DEL:
      return { products: action.payload };
    default:
      return state
  }
}