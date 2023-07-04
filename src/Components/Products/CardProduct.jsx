import React from 'react'
import Card from './Card'

function CardProduct({ products, addToCart, cartItems, openModal, setProductSelect}) {
    return (
        <>
            {products !== null ? (
                products.map(product => (
                    <Card 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart}
                        cartItems={cartItems}
                        openModal={openModal}
                        setProductSelect={setProductSelect}
                    />
                ))
                ) : (
                "Loading..."
            )}
        
        </>
    )
}

export default CardProduct