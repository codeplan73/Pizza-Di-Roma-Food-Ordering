import axios from 'axios'

const API_URL = 'https://pizza-di-roma.onrender.com/api/v1/meals/'
// const API_URL = 'http://localhost:5000/api/v1/meals'

// get meals
const getAllMeals = async () => {
    const response = await axios.get(API_URL)
    return response.data
}
 
// get meal
const getMeal = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
}

const mealService = {
    getAllMeals,
    getMeal
}

export default mealService