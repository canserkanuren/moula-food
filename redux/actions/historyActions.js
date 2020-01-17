import { AsyncStorage } from 'react-native';

// HISTORY_SCAN
export const HISTORY_SCAN_MAX = 10;
export const HISTORY_SCAN_LOCAL_STORAGE = 'HISTORY_SCAN'
export const HISTORY_SCAN_ALL = "HISTORY_SCAN_ALL";
export const HISTORY_SCAN_CLEAR = "HISTORY_SCAN_CLEAR";
export const HISTORY_SCAN_ADD = "HISTORY_SCAN_ADD";
export const HISTORY_SCAN_DEL = "HISTORY_SCAN_DEL";

// HISTORY_SEARCH
export const HISTORY_SEARCH_MAX = 10;
export const HISTORY_SEARCH_LOCAL_STORAGE = 'HISTORY_SEARCH'
export const HISTORY_SEARCH_ALL = "HISTORY_SEARCH_ALL";
export const HISTORY_SEARCH_CLEAR = "HISTORY_SEARCH_CLEAR";
export const HISTORY_SEARCH_ADD = "HISTORY_SEARCH_ADD";
export const HISTORY_SEARCH_DEL = "HISTORY_SEARCH_DEL";

// Initialisation de la liste des historiques recherchés
export const initHistorySearchList = () => {
  return async (dispatch) => {
    const barcodesToShop  = JSON.parse(await AsyncStorage.getItem(HISTORY_SEARCH_LOCAL_STORAGE)) || [];
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
      type: HISTORY_SEARCH_ALL,
      payload: productsToShop
    });
  };
}

// Supprime l'intégralité de la liste des historiques recherchés
export const clearHistorySearchList = () => {
  return async (dispatch) => {
    await AsyncStorage.setItem(HISTORY_SEARCH_LOCAL_STORAGE, []);
    dispatch({
      type: HISTORY_SEARCH_DEL,
      payload: []
    });
  };
}

// Ajoute un produit à la liste des historiques recherchés
export const addToHistorySearchList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(HISTORY_SEARCH_LOCAL_STORAGE)) || [];
    if (products.length == 10) {
      products.shift();
    }
    products.push(barcode);
    await AsyncStorage.setItem(HISTORY_SEARCH_LOCAL_STORAGE, JSON.stringify(products));
    dispatch({
      type: HISTORY_SEARCH_ADD,
      payload: products
    });
  };
}

// Supprime un produit de la liste des historiques recherchés
export const delFromHistorySearchList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(HISTORY_SEARCH_LOCAL_STORAGE)) || [];
    const index = products.indexOf(barcode);
    products.splice(index, 1);
    await AsyncStorage.setItem(HISTORY_SEARCH_LOCAL_STORAGE, JSON.stringify(products));
    dispatch({
      type: HISTORY_SEARCH_DEL,
      payload: products
    });
  };
}

// Initialisation de la liste des historiques recherchés
export const initHistoryScanList = () => {
  return async (dispatch) => {
    const barcodesToShop  = JSON.parse(await AsyncStorage.getItem(HISTORY_SCAN_LOCAL_STORAGE)) || [];
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
      type: HISTORY_SCAN_ALL,
      payload: productsToShop
    });
  };
}

// Supprime l'intégralité de la liste des historiques recherchés
export const clearHistoryScanList = () => {
  return async (dispatch) => {
    await AsyncStorage.setItem(HISTORY_SCAN_LOCAL_STORAGE, []);
    dispatch({
      type: HISTORY_SCAN_DEL,
      payload: []
    });
  };
}

// Ajoute un produit à la liste des historiques recherchés
export const addToHistoryScanList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(HISTORY_SCAN_LOCAL_STORAGE)) || [];
    if (!products.includes(barcode)) {
      if (products.length == 10) {
        products.shift();
      }
      products.push(barcode);
      await AsyncStorage.setItem(HISTORY_SCAN_LOCAL_STORAGE, JSON.stringify(products));
    }
    dispatch({
      type: HISTORY_SCAN_ADD,
      payload: products
    });
  };
}

// Supprime un produit de la liste des historiques recherchés
export const delFromHistoryScanList = (barcode) => {
  return async (dispatch) => {
    const products = JSON.parse(await AsyncStorage.getItem(HISTORY_SCAN_LOCAL_STORAGE)) || [];
    const index = products.indexOf(barcode);
    products.splice(index, 1);
    await AsyncStorage.setItem(HISTORY_SCAN_LOCAL_STORAGE, JSON.stringify(products));
    dispatch({
      type: HISTORY_SCAN_DEL,
      payload: products
    });
  };
}



