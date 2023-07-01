import React from 'react'
import './CardProduct.css'
import 'primeicons/primeicons.css'
        

function FeaturedCard({product}) {
    return (
        <div className='conteiner-card'>
            <div className='card-img'>
                <img src={product.image} alt="Image" />
            </div>
            <div className='items'>
                <h1>{product.title}</h1>
            </div>
        </div>
    )
}

export default FeaturedCard