import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setURl] = useState(null);

    useEffect(() => { 
      // refrences
      const storageREf = projectStorage.ref(file.name);

      storageREf.put(file).on('state_changed', (snap) => {
          let percentage =(snap.bytesTransferred / snap.bytesTransferred.totalBytes) * 100;
          setProgress(percentage);

      }, (err) => {
          setError(err);

      }, async () => {
          const url = await storageRef.getDownloadURL();
          setURl(url);

      })
    }, [file])
    
    return { progress, url, error }

} 

export default useStorage;
