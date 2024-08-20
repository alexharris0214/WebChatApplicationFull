import { API_URL } from "../constants"
import axios from 'axios'

export const validateRegisterInputs = (firstName, lastName, email, password) => {
    return (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0)
}

export const registerUser = async (firstName, lastName, email, password) => {
    if(!validateRegisterInputs(firstName, lastName, email, password)){
        alert("Not all fields are filled")
        return
    }
    const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    try{
        const response = await axios.post(API_URL + '/api/users/register', body)
        if(response.status == 200){
            return response.data.userId
        }
        return -1
    } catch(err){
        console.log(err)
        return -1
    }
}