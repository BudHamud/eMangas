import React from "react";
import { ModalStyle } from "./style";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

const Modal = ({ estado, onClose, msj, adicional }) => {

  return (
    <ModalStyle
      style={
        estado
          ? {
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
            }
          : {}
      }
    >
      <div
        className="modal"
        style={
          estado
            ? { display: "flex", opacity: "1" }
            : { display: "none", opacity: "0" }
        }
      >
        <button className="close" onClick={onClose}>
          X
        </button>
        <p>{msj}</p>
        {
          adicional === 'sign' ?
          <Link to={"/login"} className="sign">
          Acceso / Registro
          </Link> : ''
        }
        {
          adicional === 'buy' ?
          <Link className="sign" to={`/${auth.currentUser.uid}/compra`}>Ir a comprar</Link>
          : ''
        }
      </div>
    </ModalStyle>
  );
};

export default Modal;
