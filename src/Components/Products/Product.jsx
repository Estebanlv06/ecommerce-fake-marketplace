import React from 'react';
import Modal from '../Components/Modal';
import './Product.css'

const Product = ({ closeModal, product }) => {
    console.log("asdas");
    console.log(product.id);
    
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
                            <span>${product.price}</span>
                            <button >Add<i className='pi pi-cart-plus'></i></button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;
