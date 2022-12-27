import { useEffect, useState } from "react";
import { ControlStyle } from "./style";
import { auth } from "../firebase/config";
import { useCartContext } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import getUser from "../hooks/getUser";
import { getFirestore, updateDoc, doc, arrayUnion } from "firebase/firestore";

const ControlCompra = ({ data }) => {
  const { cartList, vaciarCarrito } = useCartContext();

  const [user, saldo, fecha, loading] = getUser();
  const [saldoActual, setActual] = useState(0)

  useEffect(() => {
    setActual(saldo)
  }, [saldo])

  const formato = [
    "kanzenX",
    "kanzenM",
    "kanzenS",
    "kanzenP",
    "kanzenD",
    "tankoX",
    "tankoM",
    "tankoS",
    "tankoP",
    "bunko",
  ];

  const precio = [4900, 3400, 2300, 2300, 3900, 3600, 2500, 1500, 1300, 1250];

  let total = 0;

  const db = getFirestore();

  const onBuy = async () => {
    if (total === 0) {
      toast.error('Sin mangas en el carrito')
    } else if (saldo < total) {
      toast.error("Sin saldo suficiente para realizar esta compra");
    } else {
      await updateDoc(doc(db, "user", user.id), {
        saldo: saldo - total,
        compra: arrayUnion(...cartList)
      });
      toast.success("Operación exitosa");
      setActual(saldoActual - total)
      vaciarCarrito();
    }
    
  };

  console.log(cartList);

  return (
    <ControlStyle>
      <section className="pagoCompra">
        <h4>Pago</h4>
        <div className="pagoCard">
          <p>Saldo en la cuenta: ${loading ? 0 : saldoActual}</p>
          <button onClick={onBuy}>Finalizar Compra</button>
        </div>
      </section>

      <section className="ordenCompra">
        <h4 style={{ marginBottom: 15 }}>Orden de compra</h4>
        {data.map((e, i) => (
          <div key={e.id} className="itemCompra">
            <p>x{e.cantidad} {e.nombre}</p>
            <p>${precio[formato.indexOf(e.formato)]}</p>
          </div>
        ))}
        {data.map((e) => {
          total += precio[formato.indexOf(e.formato)] * e.cantidad;
        })}
        <p style={{ marginTop: 20 }}>Total: ${total}</p>
      </section>

      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme="dark"
        draggable={false}
        position="bottom-right"
      />
    </ControlStyle>
  );
};

export default ControlCompra;
