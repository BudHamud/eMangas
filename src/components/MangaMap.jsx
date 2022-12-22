import React from "react";
import { Link } from "react-router-dom";

const MangaMap = ({arr}) => {
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

  console.log(arr);
  const precio = [4900, 3400, 2300, 2300, 3900, 3600, 2500, 1500, 1300, 1250];

  return (
    <>
      {arr.map((e) => {
        <div className="mangaComp">
          <div className="zoom">
            <img src={e.img} />
          </div>
          <p>{e.nombre}</p>
          <p>${precio[formato.indexOf(e.formato)]}</p>
          <Link to={`/mangas/${e.id}`}>Ver detalles →</Link>
        </div>;
      })}
    </>
  );
};

export default MangaMap;
