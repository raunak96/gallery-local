import React, { useContext } from 'react';
import SelectedImageContext from '../contexts/SelectedImage';

const Image = ({image:{imgUrl}}) => {
    const {selectImage} = useContext(SelectedImageContext);
    return (
        <div className="img-wrap" onClick={()=>selectImage(imgUrl)}>
           <img src={imgUrl} alt="uploaded-pic"/> 
        </div>
    );
};

export default React.memo(Image);