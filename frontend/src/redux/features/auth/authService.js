import axios from 'axios'

const API_URL = '/api/v1/auth/'

const register = async (data) => {
    const response = await axios.post(API_URL + 'register', data)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return data;
}


const authService = {
    register
}

export default authService;