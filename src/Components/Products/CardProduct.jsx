import React from 'react'
import './CardProduct.css'
import 'primeicons/primeicons.css'
        

function CardProduct({product}) {
    return (
        <div className='conteiner-card'>
            <div className='card-img'>
                <img src={product.image} alt="Image" />
            </div>
            <div className='items'>
                <h1>{product.title}</h1>
                <div className='item-category'>
                    <i className='pi pi-tag'></i>
                    <h2>{product.category}</h2>
                </div>
                <div className='end-items'>
                    <span>${product.price}</span>
                    <button><i className='pi pi-cart-plus'></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct