import * as actionTypes from '../constants/deliveryConstant';
export const getDeliveryReducer = (state = {delivery: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_Delivery_SUCCESS:
            return { delivery: action.payload }
        case actionTypes.GET_Delivery_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};