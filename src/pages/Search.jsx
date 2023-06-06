import { useState } from "react";
import { MainStyle, MangasContainer } from "../components/style";
import getMangas from "../hooks/getMangas";
import MangaComp from "../components/MangaComp";

const Search = () => {
  const [search, setSearch] = useState("");
  const [mangas, loading] = getMangas();
  const arr = [];

  mangas.map((e) => {
    e.nombre.toLowerCase().includes(search.toLowerCase()) ? "" : arr.push(e);
  });

  return (
    <>
      <MainStyle style={{ justifyContent: "inherit" }}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search"
          type="text"
        />

        {search === "" || search == " " ? (
          "Ningún resultado"
        ) : (
          <MangasContainer>
            {mangas.map((e) =>
              e.nombre.toLowerCase().includes(search.toLowerCase()) ? (
                <MangaComp data={e} />
              ) : (
                ""
              )
            )}
            {arr.length === mangas.length ? (
              <p style={{ margin: "0 auto" }}>Ningún resultado</p>
            ) : (
              ""
            )}
          </MangasContainer>
        )}
      </MainStyle>
    </>
  );
};

export default Search;
