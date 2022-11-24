import React from 'react';
import { HeaderStyle, Logo } from './style'

const Header = () => {
    return (
        <HeaderStyle>
            <nav>
                <Logo src='/logo3.png' />
                <ul className='items'>
                    <li>Inicio</li>
                    <li>Mangas</li>
                    <li>Contacto</li>
                </ul>
                <ul className='userConfig'>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                    <li><i className="fa-solid fa-user"></i></li>
                </ul>
            </nav>
        </HeaderStyle>
    );
}

export default Header;
