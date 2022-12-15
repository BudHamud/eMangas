import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../helpers/gFetch'
import { MainStyle } from './style'
import Footer from './Footer'
import MangaComp from './MangaComp'

    const ItemListContainer = () => {

    const [ mangas, setMangas ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { id } = useParams()
    
    useEffect(()=>{
        if (id) {
            gFetch()
            .then(res =>  setMangas(res.filter(manga => manga.categoria === id )) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))             
        } else {
            gFetch()
            .then(res =>  setMangas(res))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }   
    }, [id])

    console.log(id)    
  return (
    <>
        <MainStyle>
        {
            loading ? 'cargando...' :
            <MangaComp data={mangas} />
        }   
        </MainStyle>
        <Footer />
    </>
  )
}

export default ItemListContainer
