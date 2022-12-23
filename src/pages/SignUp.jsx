import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { MainStyle } from "../components/style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const sign = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass).then((e) => {
      e.user.displayName = user;
    });
    setEmail("");
    setPass("");
    setUser("");
  };

  return (
    <>
      <MainStyle>
        <h2>Registro</h2>
        <form>
          <div className="formControl">
            <p>Usuario:</p>
            <input
              value={user}
              type={"email"}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="formControl">
            <p>Email:</p>
            <input
              value={email}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
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
            <p>Contraseña:</p>
            <input
              value={pass}
              type={"password"}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="formControl">
            <button onClick={sign}>Registrarse</button>
          </div>
        </form>
      </MainStyle>

      <Footer />
    </>
  );
};

export default SignUp;
