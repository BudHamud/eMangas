import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const GetMangas = () => {

    const [loading, setLoading] = useState(true)
    const [mangas, setMangas] = useState([])

    const { categoria } = useParams()

    useEffect(()=>{          
        const db = getFirestore()
        const queryCollection = collection(db, 'mangas')
        
        const queryCollectionFilter = categoria ?  query(queryCollection, where('categoria', '==', categoria)) : queryCollection 

        getDocs(queryCollectionFilter)
        .then(resp =>  setMangas( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))  
    }, [categoria])

    return [mangas, loading]
}

export default GetMangas;