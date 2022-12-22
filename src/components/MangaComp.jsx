import React from "react";
import { Link } from "react-router-dom";

const MangaComp = ({ data }) => {

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

  return (
    <div className="mangaComp">
      <div className="zoom">
        <img src={data.img} />
      </div>
      <p>{data.nombre}</p>
      <p>${precio[formato.indexOf(data.formato)]}</p>
      <Link to={`/mangas/${data.id}`}>Ver detalles →</Link>
    </div>
  );
};

export default MangaComp;
