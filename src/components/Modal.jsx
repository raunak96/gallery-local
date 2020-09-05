import React, { useContext } from 'react';
import SelectedImageContext from '../contexts/SelectedImage';
import { motion } from "framer-motion";

const Modal = () => {
    const {selectedImage,selectImage} = useContext(SelectedImageContext);
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop') || e.target.classList.contains('close-btn'))
            selectImage(null);
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <div className="close-btn" onClick={handleClick}>&#9747;</div>
            <motion.img src={selectedImage} alt="enlarged-pic" 
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

export default Modal;