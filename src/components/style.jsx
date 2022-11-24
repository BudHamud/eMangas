import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    ul {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .mangaComp {
    text-align: center;
    img {
      width: 150px;
      height: 250px;
    }
    button {
        border: none;
        background-color: transparent;
        transition: ease-out .4s;
        &:hover {
            cursor: pointer;
            transform: translateX(5px)
        }
    }
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
`