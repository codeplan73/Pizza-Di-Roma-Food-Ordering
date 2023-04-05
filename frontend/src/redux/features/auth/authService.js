import axios from 'axios'

const API_URL = 'https://pizza-di-roma.onrender.com/api/v1/auth/'

const register = async (data) => {
    console.log('Sending Data', data)
    const response = await axios.post(API_URL + 'register', data)
    
    if(response.data){
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return data;
}

// login user
const login = async(userData)=>{
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
    }
 
    return response.data
}


const authService = {
    register,
    login,
}

export default authService;