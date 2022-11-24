import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #333;
  color: white;
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
          padding: 1px;
          border-radius: 50px;
          position: absolute;
          top: -16px;
          right: -5px;
        }
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
    button {
      border: none;
      background-color: transparent;
      transition: ease-out 0.4s;
      &:hover {
        cursor: pointer;
        transform: translateX(5px);
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
