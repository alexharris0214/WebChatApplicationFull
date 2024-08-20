import axios from 'axios'
export const loginUser = async (email, password) => {
    const body = {
        email: email,
        password: password
    }

    try{
        const response = await axios.post("http://localhost:3000/api/users/login", body);
        return response.data
    } catch(err){
        console.log(err)
        return -1
    }
}