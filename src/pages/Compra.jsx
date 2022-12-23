import Footer from '../components/Footer';
import { MainStyle } from '../components/style'
import { useCartContext } from '../context/CartContext';
import ControlCompra from '../components/ControlCompra'

const Compra = () => {

    const {cartList} = useCartContext()

    return (
        <>
         <MainStyle>
            {
                cartList.map((e, i) => (
                    <ControlCompra key={i} data={e} />
                ))
            }
         </MainStyle>
         
         <Footer />
        </>
    );
}

export default Compra;
