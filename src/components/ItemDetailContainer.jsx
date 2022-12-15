import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { gFetch } from "../helpers/gFetch";
import Footer from "./Footer";
import MangaDetail from "./MangaDetail";
import { MainStyle } from "./style";

const ItemDetailContainer = () => {

    const [ mangas, setMangas ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { id } = useParams()
    
    useEffect(()=>{
        if (id) {
            gFetch()
            .then(res =>  setMangas(res.find(e => e.id === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))             
        } else {
            gFetch()
            .then(res =>  setMangas(res))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }   
    }, [id])

    return (
        <>
        <MainStyle>
        {
            loading ? 'Cargando...' :
            <MangaDetail data={mangas} />
        }
        </MainStyle>
        <Footer />
            
        </>
    );
}

export default ItemDetailContainer;
