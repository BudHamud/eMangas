import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { MainStyle, MangasContainer } from "../components/style";
import { auth } from "../firebase/config";
import getUser from "../hooks/getUser";
import styled from "styled-components";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const PerfilStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 15px;
    padding: 5px;
    color: #000;
  }
`;

const HistorialStyle = styled.section`
  background-color: #444;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  width: 500px;
  h3 {
    margin-bottom: 20px;
  }
  .mangas {
    gap: 5px;
    overflow-x: scroll;
    border-radius: 5px;
    ::-webkit-scrollbar {
      background-color: #444;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #333;
    }
    display: flex;
    img {
      height: 150px;
    }
  }
`;

const Perfil = () => {
  const [user, saldo, loading] = getUser();
  const [online, setOnline] = useState(null);
  const [estado, setEstado] = useState(true);
  const [saldoActual, setActual] = useState(null);

  const db = getFirestore();

  const agregarSaldo = async () => {
    await updateDoc(doc(db, "user", user.id), {
      saldo: 1000 + saldo,
      fecha: new Date(),
    });
    setActual(saldo + 1000);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setOnline(user);
      } else setOnline(null);
    });
    setActual(saldo);
  }, [saldo]);

  const fecha = new Date();
  const manana = new Date(fecha.getTime() + 24 * 60 * 60 * 1000);

  return (
    <>
      <MainStyle>
        <PerfilStyle>
          <p>Saldo: ${saldo != null ? saldoActual : "0"}</p>
          <button onClick={agregarSaldo}>Agregar Saldo</button>
          {fecha ? "Disponible" : fecha}

          <HistorialStyle>
            <h3>Historial:</h3>
            <section className="mangas">
              {user != null
                ? user.compra.map((e) => (
                    <div key={e.id} className="historialCard">
                      <img src={e.img} />
                      <p>
                        x{e.cantidad}{" "}
                        {e.nombre.length > 8
                          ? `${e.nombre.slice(0, 7)}...${
                              e.nombre.split(" ")[
                                e.nombre.split(" ").length - 1
                              ]
                            }`
                          : e.nombre}
                      </p>
                    </div>
                  ))
                : ""}
            </section>
          </HistorialStyle>
        </PerfilStyle>
      </MainStyle>
    </>
  );
};

export default Perfil;
