
import axios from "axios";
import * as actionTypes from '../constants/userConstant';
const URL = 'http://localhost:9000';

export const getUser = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/clist`);

        dispatch({type: actionTypes.GET_User_SUCCESS, payload:data })
    } 
    catch (error) {
        dispatch({type: actionTypes.GET_User_FAIL,payload:error.message})
    }
}