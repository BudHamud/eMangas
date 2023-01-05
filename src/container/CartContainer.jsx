import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MainStyle } from "../components/style";
import { useCartContext } from "../context/CartContext";
import { auth } from "../firebase/config";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import GetOrder from "../hooks/getOrder";

const CartContainer = () => {
  const { cartList, vaciarCarrito, borrar } = useCartContext();
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeat] = useState("");
  const [isGenerated, setGenerate] = useState(false);
  const [order, load, setActu] = GetOrder();

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

  const [modal, setModal] = useState(false);
  const [msj, setMsj] = useState("");
  const [extra, setExtra] = useState("");
  const db = getFirestore();

  const getOrder = async (e) => {
    e.preventDefault();
    const today = new Date()
    if (names === "") {
      toast.error("Nombre requerido");
    } else if (phone === "") {
      toast.error("Telefono requerido");
    } else if (email === "") {
      toast.error("Email requerido");
    } else if (repeatEmail !== email) {
      toast.error("Los emails no coinciden");
    } else {
      await addDoc(collection(db, "order"), {
        order: cartList,
        nombre: names,
        telefono: phone,
        email: email,
        fecha: today
      })
      .then((ref) => {
        setMsj(`Id generado ${ref.id}`)
      })
      setGenerate(true);
      vaciarCarrito();
      setNames("");
      setPhone("");
      setEmail("");
      setRepeat("");
      setModal(true);
    }
  };

  const checkUser = () => {
    if (cartList.length === 0) {
      setModal(true);
      setMsj("Carrito Vacío");
    } else if (auth.currentUser === null) {
      setModal(true);
      setMsj("No estás registrado");
      setExtra("sign");
    } else {
      setModal(true);
      setMsj("Ya está todo listo");
      setExtra("buy");
    }
  };

  const handleClose = () => {
    setModal(false);
    setMsj("");
    setExtra("");
  };

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
        {cartList.length === 0 ? (
          <Link style={{ marginTop: 20 }} to={"/mangas"}>
            Ver Mangas
          </Link>
        ) : (
          <>
            <p style={{ marginTop: 20 }}>Total: ${total}</p>

            <button className="cartBtn" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>

            <button onClick={checkUser} className="cartBtn">
              Terminar Compra
            </button>

            <section className="notUserOrder">
              {isGenerated ? (
                ""
              ) : (
                <form>
                  <p>Nombre y Apellido:</p>
                  <input
                    onChange={(e) => setNames(e.target.value)}
                    value={names}
                  />

                  <p>Telefono:</p>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type={"number"}
                    value={phone}
                  />

                  <p>Email: </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                    value={email}
                  />

                  <p>Repetir email: </p>
                  <input
                    onChange={(e) => setRepeat(e.target.value)}
                    type={"email"}
                    value={repeatEmail}
                  />
                  <div>
                    <button type={"submit"} onClick={getOrder}>
                      Generar Pedido
                    </button>
                  </div>
                </form>
              )}
            </section>
          </>
        )}
        <ToastContainer
                autoClose={1000}
                hideProgressBar={true}
                theme="dark"
                draggable={false}
                position="bottom-right"
              />
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
