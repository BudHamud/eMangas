import React from "react";
import { MainStyle } from "../components/style";
import { Link } from "react-router-dom";
import GetMangas from "../hooks/getMangas";
import Releases from "../components/Releases";
import { Tweet } from "react-twitter-widgets";
import styled from "styled-components";
import Cargando from '../components/Cargando'

const Grid = styled.section`
  display: grid;
  grid-template-areas: "releases twitter" "best-seller twitter";
  min-height: 70vh;
  .releases {
    grid-area: releases;
    justify-self: center;
  }
  .bestSeller {
    grid-area: best-seller;
    justify-self: center;
  }
  .twitter {
    margin-left: 20px;
    grid-area: twitter;
    justify-self: center;
  }
  @media (width < 830px) {
    grid-template-areas: "releases" "best-seller" "twitter";
  }
  @media (width < 520px) {
    .bestSeller, .releases {
      width: 95%;
      overflow-x: scroll;
    }
  }
`;

const Inicio = () => {
  const [mangas, loading] = GetMangas();

  return (
    <>
      {loading ? (
        <MainStyle>
        <Cargando />
        </MainStyle>
      ) : (
        <MainStyle>
          <Grid>
            <article className="releases">
              <h2>Nuevos lanzamientos</h2>
              <Releases item={mangas} />
            </article>

            <article className="bestSeller">
              <h3>Los más vendidos</h3>
              <Releases
                item={mangas}
                filter={mangas.filter((e) => e.stock < 5 && e.stock >= 1)}
              />
            </article>

            <article className="twitter">
              <h3>Anuncios:</h3>
              <Tweet
                tweetId="1671091108607152128"
                options={{
                  height: "400",
                }}
              />
            </article>
          </Grid>

          <Link to={"/mangas"}>Ver Mangas</Link>
        </MainStyle>
      )}
    </>
  );
};

export default Inicio;
