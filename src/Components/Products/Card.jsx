import React, {useState, useEffect} from 'react'
import './Card.css'
import 'primeicons/primeicons.css'



function CardProduct( {product, addToCart, cartItems, openModal, setProductSelect} ) {
    const [visible, setVisible] = useState(true);
    const item = cartItems.filter((cartItem) => cartItem.id == product.id);
    useEffect(() => {
        item.length == 0 ? setVisible(true) : setVisible(false);
    }, [item]);
    
    const addCart = (product) =>{
        addToCart(product);
    }

    const modal = () =>{
        setProductSelect(product);
        openModal();
    }

    return (
        <div className='conteiner-card'>
            <div className='card-img'>
                <img src={product.image} alt="Image" />
                <button onClick={() => modal()} className='button-img'>View Product</button>
            </div>
            <div className='items'>
                <h1>{product.title}</h1>
                <div className='item-category'>
                    <i className='pi pi-tag'></i>
                    <h2>{product.category}</h2>
                </div>
                <div className='end-items'>
                    <span>${product.price}</span>
                    {visible ? <button onClick={()=>addCart(product)}>Add<i className='pi pi-cart-plus'></i></button>: <h6>added</h6>}
                </div>
            </div>
        </div>
    )
}

export default CardProduct