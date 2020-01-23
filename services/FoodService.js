import axios from 'axios';
import { Food } from '../models/food';
import { Search } from '../models/search'


class FoodService {

  async get(code) {
    const data = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    return new Food(data.data);
  }

  async search(name) {
    const data = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1&page_size=20`);
    return data.data.products.map(p => (new Search(p)));
  }
}

export default FoodService;
