import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

const GetUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const { userId } = useParams();

  useEffect(()=>{          
    const db = getFirestore()
    const queryCollection = collection(db, 'user')
    
    const queryCollectionFilter =  query(queryCollection, where('userId', '==', userId))

    getDocs(queryCollectionFilter)
    .then(resp =>  setUser( resp.docs.map(e => ({ id: e.id, ...e.data() }) ) ) )
    .catch( err => console.log(err) )
    .finally(() => setLoading(false))  
}, [userId])

  return [user, loading];
};

export default GetUser;
