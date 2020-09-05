import React from 'react';
import useFireStore from '../custom-hooks/useFireStore';
import Image from './Image';

const ImagesList = () => {
    const {images} = useFireStore('images');
     return (
        <div className="img-grid">
            {images.map(image=>(
                <Image key={image.id} image={image} />
            ))}
        </div>
    );
};

export default ImagesList;