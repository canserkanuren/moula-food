import { SHOPPING_ALL, SHOPPING_CLEAR } from "../actions/shoppingActions";
import { SHOPPING_ADD, SHOPPING_DEL } from "../actions/shoppingActions";

const INITIAL_STATE = {
  shoppingProducts: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOPPING_ALL:
      return { shoppingProducts: action.payload };
    case SHOPPING_CLEAR:
      return { shoppingProducts: action.payload };
    case SHOPPING_ADD:
      return { shoppingProducts: action.payload.shoppingProducts };
    case SHOPPING_DEL:
      return { shoppingProducts: action.payload.shoppingProducts };
    default:
      return state
  }
}