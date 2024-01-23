import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return(
    <> <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
    
    </>
  )
}

export default App;