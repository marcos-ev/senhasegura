import React from 'react';
import '../../styles/_hero.scss';


const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <img className='marcas' src="src\assets\institutes-logos-light (1).png" alt="" />
        </div>
        <h1>Número #1 em Gestão de Acesso Privilegiado, de novo!</h1>
        <p>Solução PAM incomparável. <strong>Reconhecimento internacional</strong>. Fabricação brasileira.</p>
        <div className="cta-buttons">
          <a href="#" className="cta-button">Fale com Vendas</a>
          <a href="#" className="cta-button secondary">Explore Produtos</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="src\assets\pam.png" alt="PAM 2024" />
      </div>
    </section>
  );
};

export default HeroSection;
