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
                    <div className=''>
                        <h1>{product.title}</h1>
                        <div className=''>
                            <i className='pi pi-tag'></i>
                            <h2>{product.category}</h2>
                        </div>
                        <div className=''>
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;
