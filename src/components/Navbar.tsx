import React from 'react';
import '../../styles/_navbar.scss';  // Certifique-se de que o caminho está correto

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./src/assets/logo.png" alt="Senhasegura Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Plataforma</a>
          <div className="dropdown-content">
            <a href="#">Opção 1</a>
            <a href="#">Opção 2</a>
            <a href="#">Opção 3</a>
          </div>
        </li>
        <li>
          <a href="#">Soluções</a>
          <div className="dropdown-content">
            <a href="#">Opção A</a>
            <a href="#">Opção B</a>
            <a href="#">Opção C</a>
          </div>
        </li>
        <li>
          <a href="#">Serviços</a>
          <div className="dropdown-content">
            <a href="#">Serviço 1</a>
            <a href="#">Serviço 2</a>
          </div>
        </li>
        <li>
          <a href="#">Parceiros</a>
        </li>
        <li>
          <a href="#">Empresa</a>
        </li>
        <li>
          <a href="#">Recursos</a>
        </li>
      </ul>
      <div className="cta-button">
        <a href="#">Demo</a>
      </div>
    </nav>
  );
};

export default Navbar;
