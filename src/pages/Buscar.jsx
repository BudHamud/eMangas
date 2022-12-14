import { useState } from 'react';
import { MainStyle, MangasContainer } from '../components/style';
import Footer from '../components/Footer'
import getMangas from '../hooks/getMangas'
import MangaComp from '../components/MangaComp'

const Buscar = () => {

    const [busqueda, setBusqueda] = useState('')
    const [mangas, loading] = getMangas()
    const arr = []

    mangas.map(e => {
        e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ?
        '' : arr.push(e)
    })

    return (
        <>
            <MainStyle style={{justifyContent: 'inherit'}}>
                <input onChange={(e) => setBusqueda(e.target.value)} className='buscador' type="text" />

                {
                    busqueda === '' || busqueda == ' ' ? 'Ningún resultado' :
                    <MangasContainer>
                    {
                        mangas.map(e => (
                            e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ?
                            <MangaComp data={e} /> : ''
                        ))
                    }
                    {
                        arr.length === mangas.length
                        ? <p style={{margin: '0 auto'}}>Ningún resultado</p>
                        : ''
                    }
                    </MangasContainer>
                }
            </MainStyle>
            <Footer />
        </>
    );
}

export default Buscar;
