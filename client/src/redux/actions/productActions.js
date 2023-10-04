import axios from "axios";
import * as actionTypes from '../constants/productConstant';

const URL = 'http://localhost:9000';
export const editProduct = (formData, productId) => async (dispatch) => {
    if (productId) {
      try {
        const response = await axios.put(`${URL}/product/${productId}`, formData);
        const updatedProduct = response.data;
        dispatch({
          type: actionTypes.EDIT_PRODUCT_SUCCESS,
          payload: updatedProduct,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.EDIT_PRODUCT_FAIL,
          payload: error.message,
        });
      }
    } else {
      console.error('productId is undefined'); 
    }
  };
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
}
export const addProduct = (product) => async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/product`, product);
      const newProduct = response.data;
  
      dispatch({
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        payload: newProduct,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };
