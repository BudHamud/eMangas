import { MainStyle } from "../components/style";
import { useCartContext } from "../context/CartContext";
import Purchase from "../components/Purchase";

const Compra = () => {
  const { cartList } = useCartContext();

  return (
    <>
      <MainStyle>
        <Purchase data={cartList} />
      </MainStyle>
    </>
  );
};

export default Compra;
