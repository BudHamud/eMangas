import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

export const LoginStyle = styled.main`
  width: 100%;
  background-color: #222;
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .leftImg {
    width: 50vw;
    background-color: #ff0068;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/emangas-1bb68.appspot.com/o/yofukashi.jpg?alt=media&token=ff4ba1c0-a4ed-4a13-bce9-a1e07fa9e679');
    height: 82vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .formSection {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .backBtn {
    text-decoration: none;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 10px;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
  form {
    input {
      color: #000;
      padding: 5px;
      border-radius: 5px;
      background-color: #666;
    }
    .formControl {
      margin-top: 15px;
      line-height: 1.8;
    }
    button {
      background-color: transparent;
      border: solid 2px #fff;
      border-radius: 5px;
      padding: 5px;
      &:hover {
        border: solid 2px #fff;
        background-color: #fff;
        color: #000;
      }
    }
    select {
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      background-color: #666;
    }
  }
  .userProfile {
    padding: 5px;
    background-color: #666;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    border-radius: 5px;
    .infoProfile {
      a {
        text-decoration: none;
        font-size: 14px;
        width: 100%;
        padding: 5px;
        margin-top: 5px;
        &:hover {
          background-color: #fff;
          color: #000;
          border-radius: 5px;
        }
      }
    }
    img {
      width: 100px;
    }
    button {
      padding: 5px;
      background-color: transparent;
      border: none;
      margin-top: 10px;
      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #000;
        border-radius: 5px;
      }
    }
  }
  @media (max-width: 768px) {
    .leftImg {
      display: none;
  }
  .formSection {
    width: auto;
  }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [online, setOnline] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setOnline(user);
      else setOnline(null);
    });
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      const name = await userName();
      setOnline(name);
      toast.success(`Acceso exitoso`);
      setError("");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta", "error");
      } else if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado", "error");
      } else {
        setError("Algo salió mal", "error");
      }
    }
  };

  const exit = (e) => {
    e.preventDefault();
    auth.signOut();
    setOnline(null);
    toast(`Nos vemos.`);
  };

  function userName() {
    return new Promise((resolve) => {
      if (auth.currentUser != null) {
        resolve(auth.currentUser);
      }
    });
  }

  return (
    <>
      <LoginStyle>
        {online != null ? (
          <section className="userProfile">
            <img
              src={online.photoURL ? online.photoURL : "/logo3.png"}
              alt="foto de perfil"
            />
            <div className="infoProfile">
              <p>Bienvenid@, {online.displayName}</p>
              <Link to={`/${online.uid}/perfil`}>Mi perfil</Link>
              <button onClick={exit}>Cerrar Sesión</button>
            </div>
          </section>
        ) : (
          <>
            <section className="leftImg" />
            <section className="formSection">
              <h2>Acceso</h2>
              <form action="/">
                <div className="formControl">
                  <p>Email:</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="formControl">
                  <p>Contraseña:</p>
                  <input
                    value={pass}
                    type={"password"}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                <div className="formControl">
                  {error === "" ? "" : <p>{error}</p>}
                  <button onClick={signIn}>Ingresar</button>
                </div>
              </form>
              <p style={{ marginTop: 20 }}>
                ¿No tenés cuenta? <Link to={"/signUp"}>Crear cuenta</Link>
              </p>
            </section>
          </>
        )}
        <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          theme="dark"
          draggable={false}
          position="bottom-right"
        />
      </LoginStyle>
    </>
  );
};

export default Login;
