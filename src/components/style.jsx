import styled from "styled-components";
import { theme } from '../context/theme'

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
          padding: 0 5px;
          border-radius: 30% 70% 50% 50% / 0% 0% 100% 100%;
          position: absolute;
          top: 20px;
          right: -1.5px;
        }
      }
      .mode {
        height: 20px;
        width: 20px;
        background-color: #FFF;
        border-radius: 100px;
        position: relative;
      }
    }
  }
  @media (max-width: 520px) {
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

export const MangasContainer = styled.section`
  display: grid;
  width: 500px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  gap: 20px;
  .mangaComp {
    text-align: center;
    img {
      width: 150px;
      height: 220px;
    }
    a {
      text-decoration: none;
      transition: ease-out 0.4s;
      &:hover {
        border-bottom: solid #FFF 1px;
      }
    }
  }
  @media (max-width: 500px) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const MainStyle = styled.main`
  background-color: #222;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  h2 {
    margin-bottom: 20px;
  }
`;

export const FooterStyle = styled.footer`
  background-color: #333;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    }
  }
  @media (max-width: 520px) {
    flex-direction: column;
    .detalle {
      margin-left: 0
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
`