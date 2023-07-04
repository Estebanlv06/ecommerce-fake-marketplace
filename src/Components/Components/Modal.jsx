import React from 'react';
import './Modal.css'

function Modal ({ closeModal, children }) {

    return (
        <div id="modal1" className="modalmask">
            <div className="modalbox movedown">
                <a href="#close" title="Close" className="close" onClick={closeModal}>X</a>
                {children}
            </div>
        </div>
    );
};


export default Modal;
