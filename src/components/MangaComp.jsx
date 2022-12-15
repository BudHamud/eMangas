import React from "react";
import { Link } from "react-router-dom";
import { MangasContainer } from "./style";

const MangaComp = (props) => {
  const mangas = props.data;

  return (
    <MangasContainer className="mangasContainer">

      {mangas.map((e, i) => (
        <div key={i} className="mangaComp">
          <img src={e.img} />
          <p>{e.nombre}</p>
          <p>${ e.precio }</p>
          <Link to={`/mangas/${e.id}`}>Ver detalles →</Link>
        </div>
    ))}

    </MangasContainer>
  );
};

export default MangaComp;
