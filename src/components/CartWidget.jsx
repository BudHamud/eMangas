import React from 'react';
import { Link } from 'react-router-dom'

const CartWidget = ({ count }) => {
    return (
        <li className='cart'><Link to='/carrito'><i className="fa-solid fa-cart-shopping" /><p>{count}</p></Link></li>
    );
}

export default CartWidget;
