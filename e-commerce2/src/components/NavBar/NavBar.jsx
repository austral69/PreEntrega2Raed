import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">Logo de la Página</div>
      <div className="search">Barra de Búsqueda</div>
      <Link to="/cart">Carrito</Link>
    </nav>
  );
}

export default Navbar;