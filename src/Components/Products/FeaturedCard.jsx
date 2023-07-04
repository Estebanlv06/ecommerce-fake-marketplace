import React from 'react'
import './FeaturedCard.css'
import 'primeicons/primeicons.css'
        

function FeaturedCard({product}) {
    return (
        <div className='conteiner-featured-card'>
            <div className='featured-card-img'>
                <img src={product.image} alt="Image"/>
            </div>
        </div>
    )
}

export default FeaturedCard