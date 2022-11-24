import React from "react";
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
          <button>Ver detalles →</button>
        </div>
    ))}

    </MangasContainer>
  );
};

export default MangaComp;
