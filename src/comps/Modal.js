import React from 'react';

const Modal = ({selectedImg}) => {

    return (
        <div className="backdrop">
           <img src={selectedImg} alt="enlarged photo"/> 
        </div>
    )

}

export default Modal;

