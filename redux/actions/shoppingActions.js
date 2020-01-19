import { AsyncStorage } from 'react-native';
import FoodService from '../../services/FoodService';

let foodService = new FoodService();

// SHOPPING
export const SHOPPING_LOCAL_STORAGE = 'SHOPPING'

export const SHOPPING_ALL = "SHOPPING_ALL";
export const SHOPPING_CLEAR = "SHOPPING_CLEAR";
export const SHOPPING_ADD = "SHOPPING_ADD";
export const SHOPPING_DEL = "SHOPPING_DEL";

// Initialisation de la liste d'achats
export const initShoppingList = () => {
  return async (dispatch) => {
    const barcodesToShop = JSON.parse(await AsyncStorage.getItem(SHOPPING_LOCAL_STORAGE)) || [];
    var productsToShop = [];

    for (let index = 0; index < barcodesToShop.length; index++) {
      product = await foodService.get(barcodesToShop[index]) || null;
      if (product != null) productsToShop.push(product);
    }
    dispatch({
      type: SHOPPING_ALL,
      payload: productsToShop
    });
  };
}

// Supprime l'intégralité de la liste d'achats
export const clearShoppingList = () => {
  return async (dispatch) => {
    await AsyncStorage.setItem(SHOPPING_LOCAL_STORAGE, []);
    dispatch({
      type: SHOPPING_DEL,
      payload: []
    });
  };
}

// Ajoute un produit à la liste d'achats
export const addToShoppingList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(SHOPPING_LOCAL_STORAGE)) || [];
    products.push(barcode);
    await AsyncStorage.setItem(SHOPPING_LOCAL_STORAGE, JSON.stringify(products));

    productsToShop = [];
    for (let index = 0; index < products.length; index++) {
      product = await foodService.get(products[index]) || null;
      if (product != null) productsToShop.push(product);
    }

    dispatch({
      type: SHOPPING_ADD,
      payload: { shoppingProducts: products }
    });
  };
}

// Supprime un produit de la liste d'achats
export const delFromShoppingList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(SHOPPING_LOCAL_STORAGE)) || [];
    const index = products.indexOf(barcode);
    products.splice(index, 1);
    await AsyncStorage.setItem(SHOPPING_LOCAL_STORAGE, JSON.stringify(products));

    productsToShop = [];
    for (let index = 0; index < products.length; index++) {
      product = await foodService.get(products[index]) || null;
      if (product != null) productsToShop.push(product);
    }

    dispatch({
      type: SHOPPING_DEL,
      payload: { shoppingProducts: products }
    });
  };
}
