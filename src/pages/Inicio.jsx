import React from 'react';
import Footer from '../components/Footer';
import MangaComp from '../components/MangaComp';
import { MainStyle } from '../components/style';
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <>
        <MainStyle>
            <h2>Bienvenid@ a eMangas</h2>
            <Link to={'/mangas'}>Ver Mangas</Link>
        </MainStyle>
        <Footer />
        </>
    );
}

export default Inicio;
