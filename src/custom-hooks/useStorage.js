import { useState, useEffect } from 'react';
import { projectStorage, projectFireStore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(()=>{
        const storageRef=projectStorage.ref(file.name); //basically defines a reference for file n firebase storage
        const collectionRef = projectFireStore.collection('images');

        /*  This 'on' runs every time file upload(as it is concat to put fn for file) state changes (progress) or error or completion of upload
            It has 4 params, 1---> type/name of event , 2---> snapshot of file being uploaded
                             3---> error fn, 4---> completion fn
        */
        storageRef.put(file).on('state_changed',(snapshot)=>{ // adds file to this storageRef
            const percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async ()=>{
            const imgUrl = await storageRef.getDownloadURL();
            await collectionRef.add({imgUrl,createdAt: timestamp()})
            setUrl(imgUrl);
        });   
    },[file]);
    return { progress, url, error };
};

export default useStorage;