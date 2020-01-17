import { AsyncStorage } from 'react-native';

// SHOPPING
export const SHOPPING_ALL = "SHOPPING_ALL";
export const SHOPPING_CLEAR= "SHOPPING_CLEAR";

// SHOPPING
export const SHOPPING_ADD = "SHOPPING_ADD";
export const SHOPPING_DEL = "SHOPPING_DEL";

// Initialisation de la liste d'achats
export const initShoppingList = () => {
  return async (dispatch) => {
    const barcodesToShop  = JSON.parse(await AsyncStorage.getItem('SHOPPING')) || [];
    if (barcodesToShop.length > 0 ) {
      var productsToShop = [];
      barcodesToShop.forEach(barcode => {
        // TODO : barcode => Service getProductInfo
        product = barcode || null;
        if (product != null ) productsToShop.push(product);
      });
    } else {
      const productsToShop = [];
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
    await AsyncStorage.setItem('SHOPPING', []);
    dispatch({
      type: SHOPPING_DEL,
      payload: []
    });
  };
}

// Ajoute un produit à la liste d'achats
export const addToShoppingList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem('SHOPPING')) || [];
    products.push(barcode);
    await AsyncStorage.setItem('SHOPPING', JSON.stringify(products));
    dispatch({
      type: SHOPPING_ADD,
      payload: products
    });
  };
}

// Supprime un produit de la liste d'achats
export const delFromShoppingList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem('SHOPPING')) || [];
    const index = products.indexOf(barcode);
    products.splice(index, 1);
    await AsyncStorage.setItem('SHOPPING', JSON.stringify(products));
    dispatch({
      type: SHOPPING_DEL,
      payload: products
    });
  };
}
