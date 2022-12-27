import React, { useEffect, useState } from "react";
import { HeaderStyle, Logo } from "./style";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const { cartList } = useCartContext();

  useEffect(() => {
    let num = 0;
    cartList.map((e) => {
      num = num + e.cantidad;
    });
    setCount(num);
    onAuthStateChanged(auth, (user) => {
      if (user) setOnline(user);
      else setOnline(null);
    });
  }, [cartList]);

  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(false);
  const [show, setShow] = useState(false);
  const [online, setOnline] = useState("");

  const showNav = () => {
    setCurrent(!current);
  };

  return (
    <HeaderStyle>
      <nav>
        <div className="brand">
          <Link to={"/"}>
            <Logo src="/logo3.png" />
            <h3>eMangas</h3>
          </Link>
          <i onClick={showNav} className="fa-solid fa-bars"></i>
        </div>
        <ul className={current ? "items show" : "items"}>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/mangas"}>Mangas</Link>
          </li>
          <li className="categorias" onClick={() => setShow(!show)}>
            Categorias <i className="fa-solid fa-caret-down" />
            <ul className={show ? "show" : ""}>
              <li>
                <Link to={"/categoria/seinen"}>Seinen</Link>
              </li>
              <li>
                <Link to={"/categoria/shonen"}>Shonen</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={current ? "userConfig show" : "userConfig"}>
          <li>
            <Link to={"/buscar"}>
              <i className="fa-solid fa-magnifying-glass" />
            </Link>
          </li>
          <CartWidget count={count} />
          {online ? (
            <li>
              <Link to={online ? `/${online.uid}/perfil` : "/login"}>
                <i className="fa-solid fa-user" />
              </Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to={"/login"}>
              <i
                className={
                  online
                    ? "fa-solid fa-right-from-bracket"
                    : "fa-solid fa-right-to-bracket"
                }
              />
            </Link>
          </li>
          {/*<li><div className='mode'></div></li>*/}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
