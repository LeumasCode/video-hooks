import {useState, useEffect} from 'react'
import youtube from '../apis/Youtube'


const useVideos = (defaultSearchTerm) => {
 const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);


   const search  = async (term) => {
     const result = await youtube.get("/search", {
       params: {
         q: term,
       },
     });

     setVideos(result.data.items);
   };
    
   return [videos, search]
}

export default useVideos
