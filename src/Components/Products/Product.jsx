import React, {useState, useEffect} from 'react';
import Modal from '../Components/Modal';
import './Product.css'

const Product = ({ product, closeModal, addToCart, cartItems }) => {
    const [visible, setVisible] = useState(true);
    const item = cartItems.filter((cartItem) => cartItem.id == product.id);
    useEffect(() => {
        item.length == 0 ? setVisible(true) : setVisible(false);
    }, [item]);
    
    const addCart = (product) =>{
        addToCart(product);
    }
    
    return (
        <>  
            <Modal closeModal={closeModal}>
                <div className='container-modal'>
                    <div className='modal-img'>
                        <img src={product.image} alt="Image" />
                    </div>
                    <div className='details'>
                        <h1>{product.title}</h1>
                        <div className='category'>
                        <i className='pi pi-tag'></i>
                        <h2>{product.category}</h2>
                        </div>
                        <div className='description'>
                            <p>{product.description}</p>
                        </div>
                        <div className='price-btn'>
                            <span>Price: ${product.price}</span>
                            {visible ? <button onClick={()=>addCart(product)}>Add<i className='pi pi-cart-plus'></i></button>: <h6>added</h6>}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;
