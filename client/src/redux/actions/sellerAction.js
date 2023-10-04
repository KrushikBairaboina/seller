
import axios from "axios";
import * as actionTypes from '../constants/sellerConstant';
const URL = 'http://localhost:9000';
export const editSeller = (sellerData, sellerId) => async (dispatch) => {
    if (sellerId) {
      try {
        const response = await axios.put(`${URL}/account/${sellerId}`, sellerData);
        const updatedSeller = response.data;
        dispatch({
          type: actionTypes.EDIT_SELLER_SUCCESS,
          payload: updatedSeller,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.EDIT_SELLER_FAIL,
          payload: error.message,
        });
      }
    } else {
      console.error('sellerId is undefined'); 
    }
  };