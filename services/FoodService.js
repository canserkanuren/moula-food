import axios from 'axios';
import { Food } from '../models/food';

const code = '3270190026273';

class FoodService {

  async get() {
    const data = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    return new Food(data.data);
  }
}

export default FoodService;
