import React, { useContext } from 'react';
import SelectedImageContext from '../contexts/SelectedImage';

const Modal = () => {
    const {selectedImage,selectImage} = useContext(SelectedImageContext);
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop') || e.target.classList.contains('close-btn'))
            selectImage(null);
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <div className="close-btn" onClick={handleClick}>&#9747;</div>
            <img src={selectedImage} alt="enlarged-pic" />
        </div>
    );
};

export default Modal;