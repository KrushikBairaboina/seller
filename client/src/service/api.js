import axios from 'axios';
const URL = 'http://localhost:9000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}

