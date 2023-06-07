import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Cargando from './Cargando'
import Footer from "./Footer";
import MangaDetail from "./MangaDetail";
import { MainStyle } from "./style";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Breadcrumbs from "./Breadcrumbs";

const ItemDetailContainer = () => {

    const [manga, setManga] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const queryManga = doc(db, "mangas", id);
        getDoc(queryManga)
          .then((ans) => setManga({ id: ans.id, ...ans.data() }))
          .catch((e) => console.log(e))
    
      }, [id]);


    return (
        <>

        <MainStyle>
        {
            manga.id ?
            <Breadcrumbs actual={manga.nombre} /> :
            ''
        }
        {
            manga.id ? 
            <MangaDetail data={manga} /> :
            <Cargando />
        }
        </MainStyle>

        </>
    );
}

export default ItemDetailContainer;
