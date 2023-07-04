import React from 'react';
import './Modal.css'

function Modal ({ closeModal, children }) {

    return (
        <div id="modal1" className="modalmask">
            <div className="modalbox movedown">
                <button className="close" onClick={closeModal}>X</button>
                {children}
            </div>
        </div>
    );
};


export default Modal;
