import { AUTH_URL} from "../constants"
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
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }

    try{
        const response = await axios.post(AUTH_URL + '/api/auth/register', body, {
            headers: {
                'Content-Type': 'application/json'
            }}
        )
        if(response.status == 200){
            return response.data.userId
        }
        return -1
    } catch(err){
        console.log(err)
        return -1
    }
}