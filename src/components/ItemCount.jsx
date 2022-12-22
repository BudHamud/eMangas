import { useState } from "react"

const ItemCount = ({stock = 5, inital=1 ,onAdd }) => {

    const [ count, setCount ] = useState(inital) 
    const [booleano, setBooleano] = useState(true)

    const handleCount = () => {
         if(count < stock) {
             console.log(count)
            setCount(count + 1)            
        } 
    }
    const restart = () => {if(count > inital) setCount(count - 1)}              

    const handleOnAdd = () => onAdd(count)

    return (
        <>
        <p>Cantidad: {count}</p>
        <div className="cartBtns">
        <button onClick={ handleCount }>+</button>
        <button onClick={ restart }>-</button>
        <button onClick={ handleOnAdd }>Agregar al Carrito</button>     
        </div>
        </>
    );
}

export default ItemCount;
