import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({actual}) => {
    return (
        <div className='breadcrumbs'
        style={{
            backgroundColor: '#222',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
            marginBottom: 20
        }}>
            <Link style={{marginRight: 5}} to={'/mangas'}>Mangas</Link> / {actual}
        </div>
    );
}

export default Breadcrumbs;
