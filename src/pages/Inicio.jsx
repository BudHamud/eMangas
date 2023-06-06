import React from 'react';
import { MainStyle } from '../components/style';
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <>
        <MainStyle>
            <h2>Bienvenid@ a eMangas</h2>
            <Link to={'/mangas'}>Ver Mangas</Link>
        </MainStyle>
        </>
    );
}

export default Inicio;
