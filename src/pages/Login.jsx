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

  const notify = () => toast.success(`Acceso exitoso`);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setOnline(auth.currentUser);
      notify()
      setError('')
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

  console.log(online);

  const exit = (e) => {
    e.preventDefault();
    auth.signOut();
    setOnline(null);
    toast(`Nos vemos.`)
  };

  return (
    <>
      <MainStyle>
      {
        online != null 
        ?
        <section className="userProfile">
        <p>Bienvenido {online.email}</p>
        <p>{online.displayName}</p>
        <button onClick={exit}>Cerrar Sesión</button>
        </section> 
        :
        <>
        <h2>Acceso</h2>
        <form>
          <div className="formControl">
            <p>Email:</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
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
          <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          theme="dark"
          draggable={false}
          position="bottom-right"
        />
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
      }
      </MainStyle>

      <Footer />
    </>
  );
};

export default Login;
