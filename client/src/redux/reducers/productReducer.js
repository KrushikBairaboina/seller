import * as actionTypes from '../constants/productConstant';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const addProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return { product: action.payload };
    case actionTypes.ADD_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const editProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PRODUCT_SUCCESS:
      return { product: action.payload };
    case actionTypes.EDIT_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};