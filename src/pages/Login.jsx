import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { MainStyle } from "../components/style";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [online, setOnline] = useState(auth.currentUser);
  const [error, setError] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      const name = await userName()
      setOnline(name)
      toast.success(`Acceso exitoso`)
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

  console.log(auth.currentUser);

  const exit = (e) => {
    e.preventDefault();
    auth.signOut();
    setOnline(null);
    toast(`Nos vemos.`);
  };

  function userName() {
    return new Promise(resolve => {
      if (auth.currentUser != null) {
        resolve(auth.currentUser)
      }
    });
  }

  return (
    <>
      <MainStyle>
        {online != null ? (
          <section className="userProfile">
            <img
              src={online.photoURL ? online.photoURL : "/logo3.png"}
              alt="foto de perfil"
            />
            <div className="infoProfile">
              <p>Bienvenid@, {online.displayName}</p>
              <button onClick={exit}>Cerrar Sesión</button>
            </div>
          </section>
        ) : (
          <>
            <h2>Acceso</h2>
            <form>
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
                {online != null ? (
                  <button onClick={exit}>Cerrar Sesión</button>
                ) : (
                  <button onClick={signIn}>Ingresar</button>
                )}
              </div>
            </form>
            <p style={{ marginTop: 20 }}>
              ¿No tenés cuenta? <Link to={"/signUp"}>Crear cuenta</Link>
            </p>
          </>
        )}
        <ToastContainer
                  autoClose={1000}
                  hideProgressBar={true}
                  theme="dark"
                  draggable={false}
                  position="bottom-right"
                />
      </MainStyle>

      <Footer />
    </>
  );
};

export default Login;
