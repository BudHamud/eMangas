import React, { useState } from "react";
import Footer from "../components/Footer";
import { MainStyle } from "../components/style";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const sign = (e) => {
    e.preventDefault();
    setPass("");
    setUser("");
  };

  return (
    <>
      <MainStyle>
        <form>
          <div className="formControl">
            <p>Usuario:</p>
            <input value={user} onChange={(e) => setUser(e.target.value)} />
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
            <button onClick={sign}>Ingresar</button>
          </div>
        </form>
      </MainStyle>

      <Footer />
    </>
  );
};

export default Login;
