import React, {useState} from 'react'
import AmountButton from './AmountButton'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../redux/features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

const AddToCart = ({id, name, price}) => {
    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {cartItems} = useSelector((state) => state.cart)

    const handleAddToCart = () => {
        console.log(`id:${id} name:${name} price:${price} amount: ${amount}`)
        dispatch(addToCart({id, name, price, amount}))
        localStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/cart')
    }

    const increaseItem = () => {
        setAmount(amount + 1)
    }

    const decreaseItem = ()=>{
        setAmount(amount - 1)
    }

    


    return (
        <div className=''>
            <AmountButton increase={increaseItem} decrease={decreaseItem} amount={amount} />
            <button to='/cart' onClick={handleAddToCart} className='text-xl font-semibold bg-burgundy-900 text-white px-4 py-2 rounded'>Add to Cart</button>
        </div>
    )
}

export default AddToCart