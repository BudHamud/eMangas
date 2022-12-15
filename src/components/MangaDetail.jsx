import React from 'react';
import { MangaDetailStyle } from './style'

const MangaDetail = ({data}) => {

    const miData = data

    return (
        <MangaDetailStyle>

        <img src={miData.img} />

        <div className='detalle'>
        <p>{miData.nombre}</p>
        <p>Genero: {miData.categoria.toUpperCase()}</p>
        <p>${miData.precio}</p>
        <button>Agregar al carrito</button>
        </div>

        </MangaDetailStyle>
    );
}

export default MangaDetail;
