import React from 'react';
import MangaComp from '../components/MangaComp';
import { MainStyle } from '../components/style';

const Inicio = () => {

    const mangas = [
        {
            nombre: 'Oldboy 1',
            precio: 3900,
            img: '/manga1.jpg'
        },
        {
            nombre: '20th Century Boys 1',
            precio: 3950,
            img: '/manga2.jpg'
        },
        {
            nombre: 'Banana Fish 6',
            precio: 1900,
            img: '/manga3.jpg'
        }
    ]

    return (
        <MainStyle>
            <h2>Mangas</h2>
            <MangaComp data={ mangas } />
        </MainStyle>
    );
}

export default Inicio;
