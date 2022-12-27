import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { MainStyle, MangasContainer } from "../components/style";
import { auth } from "../firebase/config";
import getUser from "../hooks/getUser";
import Footer from "../components/Footer";
import styled from "styled-components";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import MangaComp from '../components/MangaComp'

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

const Perfil = () => {
  const [user, saldo, loading] = getUser();
  const [online, setOnline] = useState(null);
  const [estado, setEstado] = useState(true);
  const [saldoActual, setActual] = useState(null);

  const db = getFirestore();

  if (user != null) {
    user.compra.map(e => {
        console.log(e);
    })
  }

  const agregarSaldo = async () => {
    await updateDoc(doc(db, "user", user.id), {
      saldo: 1000 + saldo,
      fecha: new Date()
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

  const fecha = new Date()
  const manana = new Date(fecha.getTime() + (24 * 60 * 60 * 1000));

  return (
    <>
      <MainStyle>
        <PerfilStyle>
          <p>Saldo: ${saldo != null ? saldoActual : "0"}</p>
          <button onClick={agregarSaldo}>Agregar Saldo</button>
          {fecha ? "Disponible" : fecha}

          <section style={{textAlign: 'center', marginTop: 20}} className="historial">
          <h3>Historial:</h3>
            {
                user != null 
                ? user.compra.map(e => (
                    <div key={e.id} className="historialCard">
                    <p>x{e.cantidad} {e.nombre}</p>
                    </div>
                ))
                : ''
            }
          </section>
        </PerfilStyle>
      </MainStyle>
      <Footer />
    </>
  );
};

export default Perfil;
