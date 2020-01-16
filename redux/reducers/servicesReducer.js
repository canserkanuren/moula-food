import FoodService from "../../services/FoodService";

const INITIAL_STATE = {
  foodService: new FoodService()
};

export default (state = INITIAL_STATE, actions) => {
  return state;
};
