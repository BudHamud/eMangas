import Header from "./components/NavBar";
import Inicio from "./pages/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./container/CartContainer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Buy from "./pages/Buy";
import Perfil from "./pages/Perfil";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route index path="/" element={<Inicio />} />
            <Route path="/mangas" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/mangas/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/buscar" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/:userId/compra" element={<Buy />} />
            <Route path="/:userId/perfil" element={<Perfil />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
