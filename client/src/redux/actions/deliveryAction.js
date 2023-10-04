
import axios from "axios";
import * as actionTypes from '../constants/deliveryConstant';
const URL = 'http://localhost:9000';

export const getDelivery = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/dlist`);

        dispatch({type: actionTypes.GET_Delivery_SUCCESS, payload:data })
    } 
    catch (error) {
        dispatch({type: actionTypes.GET_Delivery_FAIL,payload:error.message})
    }
}