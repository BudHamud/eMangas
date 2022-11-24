import React from 'react';

const CartWidget = (props) => {
    return (
        <li className='cart'><a onClick={props.addCart} href='#'><i className="fa-solid fa-cart-shopping" /><p>{props.count}</p></a></li>
    );
}

export default CartWidget;
