import React from "react";
import { ControlStyle } from "./style";

const ControlCompra = ({ data }) => {
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

  let total =+ Number(precio[formato.indexOf(data.formato)]) * Number(data.cantidad)
  console.log(total);

  return (
    <ControlStyle>
      <p>{data.nombre}</p>
      <p>${precio[formato.indexOf(data.formato)]}</p>
    </ControlStyle>
  );
};

export default ControlCompra;
