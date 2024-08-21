import axios from 'axios'
export const loginUser = async (email, password) => {
    const body = {
        email: email,
        password: password
    }

    try{
        const response = await axios.post("http://localhost:8081/api/auth/login", body);
        return response.data
    } catch(err){
        console.log(err)
        return -1
    }
}