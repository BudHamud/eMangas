import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import { MainStyle, MangasContainer } from "./style";
import Footer from "./Footer";
import MangaComp from "./MangaComp";
import getMangas from "../hooks/getMangas";
import Pagination from "./Pagination";

const ItemListContainer = () => {
  const { categoria } = useParams();
  
  const btnCount = [];

  useEffect(() => {
    setFin(15);
    setInicio(0);
    setPosicion(0);
  }, [categoria]);

  const [mangas, loading] = getMangas();

  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(15);
  const [posicion, setPosicion] = useState(0);

  let current = [];

  if (loading != true) {
    mangas.map((e, i) => {
      if (i >= inicio && i <= fin) {
        current.push(e);
      } else {
      }
    });
  }

  const cambio = (e) => {
    if (e.target.value === "next" && posicion != btnCount.length - 1) {
      setPosicion(posicion + 1);
      setInicio(btnCount[posicion + 1] - 15);
      setFin(btnCount[posicion + 1]);
    } else if (e.target.value === "prev" && posicion != 0) {
      setPosicion(posicion - 1);
      setInicio(btnCount[posicion - 1] - 15);
      setFin(btnCount[posicion - 1]);
    } 

    if (!isNaN(e.target.value)) {
      setInicio(e.target.value - 15);
      setFin(e.target.value);
      setPosicion(e.target.innerText - 1);
    }
  };

  return (
    <>
      <MainStyle>
        {loading ? "" : <h2>Mangas</h2>}

        {loading ? (
          <Cargando />
        ) : (
          <MangasContainer className="mangasContainer">
            {current.map((e, i) => (
              <MangaComp key={i} data={e} />
            ))}
          </MangasContainer>
        )}

        {loading ? (
          ""
        ) : (
          <Pagination
            func={cambio}
            item={mangas}
            posicion={posicion}
            btnCount={btnCount}
          />
        )}
      </MainStyle>
    </>
  );
};

export default ItemListContainer;
