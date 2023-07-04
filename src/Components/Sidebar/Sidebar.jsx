import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar({ cartItems, closeSidebar, deleteCart, setCartItems }) {
    const [visible, setVisible] = useState(false);
    const [total, setTotal] = useState(0);

    const removeItem = (id) => {
        deleteCart(id);
    };

    const handleIncreaseQuantity = (cartItem) => {
            const updatedItems = cartItems.map((item) => {
                if (item.id === cartItem.id) {
                    return {
                    ...item,
                    quantity: item.quantity + 1
                    };
                }
                return item;
            });
            
            setCartItems(updatedItems);
        };
        
    const handleDecreaseQuantity = (cartItem) => {
        if (cartItem.quantity > 1) {
            const updatedItems = cartItems.map((item) => {
                if (item.id === cartItem.id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
                }
                return item;
            });
        
            setCartItems(updatedItems);
        }
    };

    useEffect(() => {
        
        cartItems.length > 0 ? setVisible(true) : setVisible(false);
        let total = 0;
        cartItems.forEach((cartItem) => {
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
            {visible ? (
            <><div className="sidebar-content">
                    {cartItems.map((cartItem) => (
                        <div key={cartItem.id} className="cart-item">
                            <img src={cartItem.image} alt="Product" width={70} />
                            <div className="cart-item-details">
                                <h3>{cartItem.title}</h3>
                                <p>Price: ${cartItem.price}</p>
                                <div className="quantity-controls">
                                    <div>Quantity:</div>
                                    <button onClick={() => handleDecreaseQuantity(cartItem)}>-</button>
                                    <span>{cartItem.quantity}</span>
                                    <button onClick={() => handleIncreaseQuantity(cartItem)}>+</button>
                                </div>
                            </div>
                            <button onClick={() => removeItem(cartItem.id)} className='button-delete'>
                                <i className='pi pi-trash'></i>
                            </button>
                        </div>
                    ))}
                </div><div className='total-container'>
                        <h3>Total: ${total}</h3>
                        <button>Buy</button>
                    </div></>): <div className='no-found'><h3>Products not found</h3></div>}
        </div>
    );
}

export default Sidebar;
