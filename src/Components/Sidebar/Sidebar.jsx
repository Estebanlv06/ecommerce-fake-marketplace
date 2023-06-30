import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar({ cartItems, closeSidebar, handleChangeCartItems,  handleIncreaseQuantity, handleDecreaseQuantity }) {
    const [itemQuantities, setItemQuantities] = useState({});
    const [total, setTotal] = useState(0);

        
    const handleRemoveItem = (itemId) => {
        const updatedQuantities = { ...itemQuantities };
        delete updatedQuantities[itemId];
        setItemQuantities(updatedQuantities);

        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
        handleChangeCartItems(updatedCartItems);
    };

    useEffect(() => {
        let total = 0;
        cartItems.forEach(cartItem => {
            const quantity = cartItem.quantity || 1;
            total += cartItem.price * quantity;
            });
            setTotal(total.toFixed(2));
        }, [cartItems]);
    

    return (
        <div className='sidebar'>
            <h2>Cart Products</h2>
            <button className="toggle-button" onClick={closeSidebar}>
                <i className='pi pi-arrow-right'></i>
            </button>
            <div className="sidebar-content">
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                        <img src={cartItem.image} alt="Product" width={70} />
                        <div className="cart-item-details">
                            <h3>{cartItem.title}</h3>
                            <p>Price: ${cartItem.price}</p>
                            <div className="quantity-controls">
                                <div>Quantity:</div>
                                <button onClick={() => handleDecreaseQuantity(cartItem.id)}>-</button>
                                <span>{cartItem.quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(cartItem.id)}>+</button>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveItem(cartItem.id)} className='button-delete'>
                            <i className='pi pi-trash'></i>
                        </button>
                    </div>
                ))}
            </div>

            <div className='total-container'>
                <h3>Total: ${total}</h3>
                <button>Buy</button>
            </div>
        </div>
    );
}

export default Sidebar;
