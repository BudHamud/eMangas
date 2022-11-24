import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div style={{backgroundColor: '#555'}}>
            {props.greeting}
        </div>
    );
}

export default ItemListContainer;
