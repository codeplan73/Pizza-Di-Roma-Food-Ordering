import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AmountButton from './AmountButton'


const AddToCart = () => {
    const [quantity, setQuantity] = useState(0)

    const increase = () => {
        setQuantity(quantity + 1)
    }

    const descrease = () => {
        if(quantity !== 1 || quantity !== 0){ 
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {

    }


    return (
        <div className=''>
            <AmountButton increase={increase} decrease={descrease} quantity={quantity} />
            <Link to='/cart' onClick={addToCart} className='text-xl font-semibold bg-burgundy-900 text-white px-4 py-2 rounded'>Add to Cart</Link>
        </div>
    )
}

export default AddToCart