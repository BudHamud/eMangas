import React, { useState } from 'react';
import { HeaderStyle, Logo } from './style'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const Header = () => {

    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState(false)

    const showNav = () => {
        setCurrent(!current)
    }

    return (
        <HeaderStyle>
            <nav>
                <div className='brand'>
                <Link to={'/'}>
                <Logo src='/logo3.png' />
                <h3>eMangas</h3>
                </Link>
                <i onClick={showNav} className="fa-solid fa-bars"></i>
                </div>
                <ul className={current ? 'items show' : 'items'}>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/mangas'}>Mangas</Link></li>
                    <li><Link to={'/categoria/seinen'}>Seinen</Link></li>
                </ul>
                <ul className={current ? 'userConfig show' : 'userConfig'}>
                    <li><Link to={'/'}><i className="fa-solid fa-magnifying-glass" /></Link></li>
                    <CartWidget 
                    count={ count }
                    />
                    <li><Link to={'/'}><i className="fa-solid fa-user" /></Link></li>
                    <li><div className='mode'></div></li>
                </ul>
            </nav>
        </HeaderStyle>
    );
}

export default Header;
