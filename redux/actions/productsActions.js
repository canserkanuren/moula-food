import { AsyncStorage } from 'react-native';

// PRODUCTS
export const PRODUCTS_ALL = "PRODUCTS_ALL";

// PRODUCT
export const PRODUCT_ADD = "PRODUCT_ADD";
export const PRODUCT_DEL = "PRODUCT_DEL";

export const initProduct = () => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem('PRODUCTS')) || [];
    dispatch({
      type: PRODUCTS_ALL,
      payload: products
    });
  };
}

export const addProduct = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem('PRODUCTS')) || [];
    products.push(barcode);
    await AsyncStorage.setItem('PRODUCTS', JSON.stringify(products));
    dispatch({
      type: PRODUCT_ADD,
      payload: products
    });
  };
}

export const delProduct = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem('PRODUCTS')) || [];
    const index = products.indexOf(barcode);
    products.splice(index, 1);
    await AsyncStorage.setItem('PRODUCTS', JSON.stringify(products));
    dispatch({
      type: PRODUCT_DEL,
      payload: products
    });
  };
}
