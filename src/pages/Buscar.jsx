import { useState } from 'react';
import { MainStyle, MangasContainer } from '../components/style';
import Footer from '../components/Footer'
import getMangas from '../hooks/getMangas'
import MangaComp from '../components/MangaComp'

const Buscar = () => {

    const [busqueda, setBusqueda] = useState('')
    const [mangas, loading] = getMangas()

    return (
        <>
            <MainStyle style={{justifyContent: 'inherit'}}>
                <input onChange={(e) => setBusqueda(e.target.value)} className='buscador' type="text" />

                {
                    busqueda === '' ? 'Ningún resultado' :
                    <MangasContainer>
                    {
                        mangas.map((e, i) => {
                            const found = e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ?
                            <MangaComp data={e} index={i} />
                            : ''
                            return found
                        })
                    }
                    </MangasContainer>
                }
            </MainStyle>
            <Footer />
        </>
    );
}

export default Buscar;
