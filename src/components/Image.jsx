import React, { useContext } from 'react';
import SelectedImageContext from '../contexts/SelectedImage';
import {motion} from "framer-motion";

const Image = ({image:{imgUrl}}) => {
    const {selectImage} = useContext(SelectedImageContext);
    return (
        <motion.div className="img-wrap" onClick={()=>selectImage(imgUrl)}
            whileHover={{opacity: 1}}
            layout
        >
           <motion.img src={imgUrl} alt="uploaded-pic"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
           /> 
        </motion.div>
    );
};

export default React.memo(Image);