import styled from "styled-components";
import { theme } from "../context/theme";

export const HeaderStyle = styled.header`
  background-color: ${theme.bg};
  padding: 10px;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .fa-bars {
      display: none;
    }
    .brand {
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        h3 {
          color: ${theme.color};
        }
        img {
          margin-right: 5px;
        }
      }
    }
    ul {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: ${theme.color};
        }
      }
    }
    .items {
      .categorias {
        position: relative;
        &:hover {
          cursor: pointer;
          color: #f00;
        }
        ul {
          display: none;
        }
        .show {
          display: block;
          padding: 5px 15px;
          position: absolute;
          background-color: #444;
        }
      }
      li {
        a {
          &:hover {
            color: #e33;
          }
        }
      }
    }
    .userConfig {
      li {
        a {
          i {
            color: ${theme.color};
            &:hover {
              color: #0aa;
            }
          }
        }
      }
      .cart {
        position: relative;
        p {
          background-color: #e33;
          padding: 2.5px;
          border-radius: 10px;
          position: absolute;
          top: 20px;
          width: 15px;
          display: flex;
          justify-content: center;
          &:hover {
            cursor: default;
          }
        }
      }
      .mode {
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 100px;
        position: relative;
      }
    }
  }
  @media (max-width: 520px) {
    padding: 10px 10px 20px 10px;
    nav {
      justify-content: space-between;
      flex-direction: column;
      .brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      ul {
        display: none;
        padding: 10px;
      }
      .fa-bars {
        display: block;
      }
      .show {
        display: flex;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 40px;
  background-color: white;
  border-radius: 100px;
  padding: 5px;
`;

export const CargandoStyle = styled.div`
  background-color: #fff;
  border-radius: 50px;
  padding: 15px;
  animation: load 1s ease-in-out infinite;
  .apple {
    background-color: ${theme.terColor};
    height: 100px;
    width: 100px;
    border-radius: 50px 50px 100px 100px;
    position: relative;
    &::after {
      content: "";
      background-color: ${theme.secColor};
      width: 20px;
      height: 10px;
      border-radius: 50px 10px 50px 10px;
      position: absolute;
      right: 30%;
      top: -5px;
    }
  }
  @keyframes load {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
  img {
    width: 150px;
  }
`;

export const MangasContainer = styled.section`
  display: grid;
  width: 75%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  gap: 20px;
  .mangaComp {
    text-align: center;
    .zoom {
      overflow: hidden;
      img {
        width: 150px;
        height: 220px;
        transition: ease-in-out 0.25s;
        &:hover {
          scale: 1.15;
        }
      }
    }
    a {
      text-decoration: none;
      transition: ease-out 0.4s;
      &:hover {
        border-bottom: solid #fff 1px;
      }
    }
  }
  @media (max-width: 500px) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    .mangaComp {
      p {
        font-size: 15px;
      }
    }
  }
`;

export const MainStyle = styled.main`
  width: 100%;
  background-color: #222;
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
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
  .notUserOrder {
    margin-top: 20px;
    border: solid 2px #fff;
    border-radius: 10px;
    padding: 15px;
    button {
      background-color: transparent;
      border: solid 2px #fff;
      border-radius: 5px;
      margin-top: 10px;
      padding: 5px;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
    input {
      color: #000;
    }
  }
  h2 {
    margin-bottom: 20px;
  }
  h4 {
    margin-top: 20px;
  }
  .search {
    padding: 3px;
    background-color: #444;
    border-radius: 5px;
    border: solid 1px #fff;
    margin-bottom: 20px;
  }
  .btnPagContainer {
    margin-top: 20px;
    display: flex;
    gap: 5px;
    .btnPag {
      width: 25px;
      border-radius: 10px;
      padding: 5px;
      color: black;
      transition: ease-in-out 0.15s;
      background-color: #222;
      color: #fff;
      border: none;
      display: flex;
      justify-content: center;
      &:hover {
        background-color: #fff;
        color: #000;
      }
      i {
        &:hover {
          color: #000;
        }
      }
    }
    .actual {
      background-color: #072;
    }
  }
  .btnCart {
    background-color: #222;
    border: solid 2px #444;
    padding: 5px;
  }
  .cartList {
    display: flex;
    flex-direction: column;
    width: 450px;
    max-height: 450px;
    scrollbar-color: #000;
    gap: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      background-color: #222;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff;
    }
    .itemsCart {
      width: 250px;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #444;
      padding: 5px;
      border-radius: 10px;
    }
    img {
      width: 50px;
    }
    .cartDelete {
      background-color: transparent;
      border: none;
      &:hover {
        color: #f00;
      }
    }
  }
  .cartBtn {
    background-color: #444;
    padding: 5px;
    border: none;
    margin-top: 20px;
    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 520px) {
    .cartList {
      width: 95%;
      .itemsCart {
        width: 250px;
        margin-left: 5px;
      }
    }
  }
`;

export const MangaDetailStyle = styled.section`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 400px;
    max-height: 400px;
  }
  .detalle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    height: 300px;
    button {
      color: #000;
      border: none;
      padding: 5px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 520px) {
    flex-direction: column;
    .detalle {
      margin-left: 0;
    }
  }
  @media (max-width: 320px) {
    img {
      width: 100%;
      height: auto;
    }
    .detalle {
      height: 150px;
    }
  }
`;

export const ModalStyle = styled.div`
  .modal {
    width: 300px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background-color: #545454;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    transition: ease-in-out 0.25s;
    z-index: 2;
    .sign {
      margin-top: 10px;
      border: none;
      background-color: transparent;
      padding: 5px;
      border-radius: 5px;
      text-decoration: none;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
    .close {
      background-color: transparent;
      padding: 5px;
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      &:hover {
        color: #f00;
      }
    }
  }
`;

export const ControlStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .ordenCompra {
    width: 200px;
    border: solid 2px #666;
    border-radius: 10px;
    padding: 5px;
    .itemCompra {
      margin-top: 5px;
    }
  }
  .pagoCompra {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    border: solid 2px #666;
    border-radius: 10px;
    padding: 5px;
    .pagoCard {
      margin: auto 0;
      button {
        margin-top: 10px;
        font-size: 15px;
        border: none;
        background-color: transparent;
        padding: 5px;
        border-radius: 5px;
        text-decoration: none;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
`;

export const FooterStyle = styled.footer`
  background-color: #333;
  height: 10vh;
  display: flex;
  justify-content: right;
  align-items: center;
  border-top: solid 2px #fff;
  img {
    width: 50px;
    background-color: #fff;
    padding: 5px;
    border-radius: 100px 20px 20px 100px;
    margin-right: 20px;
    transition: ease-in-out 0.3s;
    &:hover {
      border-radius: 100px;
    }
  }
`;
