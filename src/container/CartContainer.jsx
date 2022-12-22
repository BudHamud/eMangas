import { useState } from "react";
import Footer from "../components/Footer";
import { MainStyle } from "../components/style";
import { useCartContext } from "../context/CartContext";
import { auth } from "../firebase/config";
import Modal from '../components/Modal'

const CartContainer = () => {
  const { cartList, vaciarCarrito, borrar } = useCartContext();

  const formato = [
    "kanzenX",
    "kanzenM",
    "kanzenS",
    "kanzenP",
    "kanzenD",
    "tankoX",
    "tankoM",
    "tankoS",
    "bunko",
  ];

  const precio = [4900, 3400, 2300, 2300, 3900, 3600, 2500, 1500, 1250];

  let total = 0;

  cartList.map((e) => {
    let suma = Number(precio[formato.indexOf(e.formato)]) * Number(e.cantidad);
    total = total + suma;
  });

  const [modal, setModal] = useState(false)
  const [msj, setMsj] = useState('')
  const [extra, setExtra] = useState('')

  const checkUser = ()=> {
    if (cartList.length === 0) {
      setModal(true)
      setMsj('Carrito Vacío')
    } else if (auth.currentUser === null) {
      setModal(true)
      setMsj('No estás registrado')
      setExtra('sign')
    }
  }

  const handleClose = () => {
    setModal(false)
    setMsj('')
    setExtra('')
  }

  return (
    <>
      <MainStyle>
        <h2>Carrito</h2>
        {cartList.length === 0 ? (
          "Sin mangas en el carrito"
        ) : (
          <ul className="cartList">
            {cartList.map((e) => (
              <li key={e.id}>
                <img src={e.img} alt="" />
                <div className="itemsCart">
                  <p>{e.nombre}</p>
                  <p>Cantidad: {e.cantidad}</p>
                  <p>Unidad: ${precio[formato.indexOf(e.formato)]}</p>
                </div>
                <button className="cartDelete" onClick={() => borrar(e.id)}>
                  {" "}
                  X{" "}
                </button>
              </li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: 20 }}>Total: ${total}</p>

        <button className="cartBtn" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>

        <button onClick={checkUser} className="cartBtn">Terminar Compra</button>
        <Modal
        estado={modal}
        onClose={handleClose}
        msj={msj}
        adicional={extra}
        />
      </MainStyle>
      <Footer />
    </>
  );
};

export default CartContainer;
