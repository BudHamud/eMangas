import './App.css'
import React from 'react'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>

    <Header />
    <ItemListContainer greeting={'Este es un saludo por props'} />
    <Inicio />
    <Footer />

    </>
  )
}

export default App
