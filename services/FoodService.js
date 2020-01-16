import axios from 'axios';
import { Food } from '../models/food';


class FoodService {

  async get(code) {
    const data = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    return new Food(data.data);
  }
}

export default FoodService;
