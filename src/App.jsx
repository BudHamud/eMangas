import './App.css'
import React from 'react'
import Header from './components/NavBar'
import Inicio from './pages/Inicio'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index path='/' element={<Inicio />} />
      <Route path='/mangas' element={<ItemListContainer />} />
      <Route path='/categoria/:id' element={<ItemListContainer />} />
      <Route path='/mangas/:id' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
