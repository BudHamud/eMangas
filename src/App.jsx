import "./App.css";
import React, { createContext } from "react";
import Header from "./components/NavBar";
import Inicio from "./pages/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Buscar from "./pages/Buscar";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./container/CartContainer";
import Login from "./pages/Login";

export const ContextApp = createContext();

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
            <Route path="/buscar" element={<Buscar />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
