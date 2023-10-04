
import * as actionTypes from '../constants/sellerConstant';
export const editSellerReducer = (state = { seller: {} }, action) => {
    switch (action.type) {
      case actionTypes.EDIT_SELLER_SUCCESS:
        return { seller: action.payload };
      case actionTypes.EDIT_SELLER_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };
