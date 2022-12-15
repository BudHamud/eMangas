import React from 'react';
import { Link } from 'react-router-dom'

const CartWidget = (props) => {
    return (
        <li className='cart'><Link to='/carrito'><i className="fa-solid fa-cart-shopping" /><p>{props.count}</p></Link></li>
    );
}

export default CartWidget;
