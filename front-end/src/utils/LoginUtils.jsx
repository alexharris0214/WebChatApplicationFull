import axios from 'axios'
import { AUTH_URL } from '../constants';
export const loginUser = async (email, password) => {
    const body = {
        email: email,
        password: password
    }
    try{
        const response = await axios.post(AUTH_URL + "/api/auth/login", body, {
            headers: {
                'Content-Type': 'application/json'
              }
        });
        return response.data
    } catch(err){
        console.log(err)
        return -1
    }
}