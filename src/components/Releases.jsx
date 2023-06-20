import { Link } from "react-router-dom";
import styled from "styled-components";

const ReleasesStyle = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
  a {
    text-align: center;
    text-decoration: none;
    img {
      width: 150px;
    }
  }
  
`;

const Releases = ({ item, filter }) => {
  const arr = filter ?
  filter :
  item.filter((e) => e.id.includes("monster"));
  return (
    <ReleasesStyle>
      {arr.map((e, i) => (
        <Link key={e.id} to={`/mangas/${e.id}`}>
        <img src={e.img} />
        <p>{e.nombre}</p>
        </Link>
      ))}
    </ReleasesStyle>
  );
};

export default Releases;
