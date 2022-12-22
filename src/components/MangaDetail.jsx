import React from "react";
import { MangaDetailStyle } from "./style";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MangaDetail = ({ data }) => {
  const { agregarCarrito, buscarItem } = useCartContext();

  const notify = () => toast("Agregado al carrito");
  const excess = () =>
    toast.warn("No se pudo agregar, no hay suficiente stock");

  const onAdd = (cantidad) => {
    if (
      !!buscarItem(data.id) &&
      data.stock < buscarItem(data.id).cantidad + cantidad
    ) {
      excess();
    } else {
      agregarCarrito({ ...data, cantidad });
      notify();
    }
  };

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

  return (
    <MangaDetailStyle>
      <img src={data.img} />

      <div className="detalle">
        <p>{data.nombre}</p>
        <p>
          Genero: {data.categoria[0].toUpperCase() + data.categoria.slice(1)}
        </p>
        <p>${precio[formato.indexOf(data.formato)]}</p>
        {data.stock === 1 ? <strong>¡Último Disponible!</strong> : ""}
        <p>Stock: {data.stock}</p>

        {data.stock === 0 ? (
          <button disabled>Agregar al carrito</button>
        ) : (
          <ItemCount stock={data.stock} inintial={1} onAdd={onAdd} />
        )}
        <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          theme="dark"
          draggable={false}
          position="bottom-right"
        />
      </div>

    </MangaDetailStyle>
  );
};

export default MangaDetail;
