import React, { useState } from 'react';
import { HeaderStyle, Logo } from './style'
import CartWidget from './CartWidget';

const Header = () => {

    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState(false)

    const addCart = () => {
        setCount(count + 1)
    }

    const showNav = () => {
        setCurrent(!current)
    }

    return (
        <HeaderStyle>
            <nav>
                <div className='brand'>
                <a href='#'>
                <Logo src='/logo3.png' />
                <h3>eMangas</h3>
                </a>
                <i onClick={showNav} class="fa-solid fa-bars"></i>
                </div>
                <ul className={current ? 'items show' : 'items'}>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Mangas</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
                <ul className={current ? 'userConfig show' : 'userConfig'}>
                    <li><a href='#'><i class="fa-solid fa-magnifying-glass" /></a></li>
                    <CartWidget 
                    count={ count }
                    addCart={ addCart }
                    />
                    <li><a href='#'><i className="fa-solid fa-user" /></a></li>
                </ul>
            </nav>
        </HeaderStyle>
    );
}

export default Header;
