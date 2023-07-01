import React from 'react'
import Card from './Card'

function CardProduct({ products, addToCart, deleteCart, cartItems }) {
    return (
        <>
            {products !== null ? (
                products.map(product => (
                    <Card 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart}
                        deleteCart={deleteCart}
                        cartItems={cartItems}
                    />
                ))
                ) : (
                "Loading..."
            )}
        
        </>
    )
}

export default CardProduct