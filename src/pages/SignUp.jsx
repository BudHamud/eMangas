import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { LoginStyle } from "./Login";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const db = getFirestore();

  const sign = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(auth.currentUser, { displayName: user });
      await addDoc(collection(db, "user"), {
        userId: auth.currentUser.uid,
        saldo: 0,
        compra: [],
      });
      setEmail("");
      setPass("");
      setUser("");
      toast.success("Registro y acceso exitoso");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email en uso", "error");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Email inválido", "error");
      } else if (error.code === "auth/weak-password") {
        toast.error("Contraseña debe ser mayor a 5 dígitos", "error");
      } else if (error.code) {
        toast.error("Algo salió mal", "error");
      }
    }
  };

  return (
    <>
      <LoginStyle>
        <section className="leftImg" />
        <section className="formSection">
          <Link className="backBtn" to={"/login"}>
            Volver
          </Link>
          <h2>Registro</h2>
          {auth.currentUser !== null ? (
            "Ya te encontrás registrado, vuelve atrás"
          ) : (
            <form>
              <div className="formControl">
                <p>Usuario:</p>
                <input
                  value={user}
                  type={"text"}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>

              <div className="formControl">
                <p>Email:</p>
                <input
                  value={email}
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="formControl">
                <p>Contraseña:</p>
                <input
                  value={pass}
                  type={"password"}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>

              <div className="formControl">
                <button onClick={sign}>Registrarse</button>
                <ToastContainer
                  autoClose={1000}
                  hideProgressBar={true}
                  theme="dark"
                  draggable={false}
                  position="bottom-right"
                />
              </div>
            </form>
          )}
        </section>
      </LoginStyle>
    </>
  );
};

export default SignUp;
