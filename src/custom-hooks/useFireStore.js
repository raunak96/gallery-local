import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";


const useFireStore = (collectionName) => {
    const [images,setImages] = useState([]);
    useEffect(()=>{

        const unsub = projectFireStore.collection(collectionName).orderBy('createdAt','desc')
            .onSnapshot(snapshot=>{
                let docImages = [];
                snapshot.forEach(doc=> docImages.push({...doc.data(),id: doc.id}));
                setImages(docImages);
            });
        
        return ()=> unsub();
        
    },[collectionName]);

    return {images};
};

export default useFireStore;