import React from 'react';
import '../../styles/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna Fale Conosco */}
        <div className="footer-column cta-box">
          <h4>FALE CONOSCO!</h4>
          <p>Nossa equipe está pronta para atender a todas as necessidades de sua empresa. Entre em contato conosco agora!</p>
          <a href="#" className="cta-button">Contate agora</a>
        </div>

        {/* Coluna Serviços */}
        <div className="footer-column">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#">Documentação</a></li>
            <li><a href="#">Centro de soluções</a></li>
            <li><a href="#">Sugestões</a></li>
            <li><a href="#">Treinamento e Certificação</a></li>
            <li><a href="#">Implantação</a></li>
            <li><a href="#">Política de Suporte</a></li>
          </ul>
        </div>

        {/* Coluna Recursos */}
        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">Materiais Ricos</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Documentos Técnicos</a></li>
            <li><a href="#">Folhas de dados</a></li>
            <li><a href="#">PAM Maturity</a></li>
            <li><a href="#">Estudos de Caso</a></li>
          </ul>
        </div>

        {/* Coluna Produtos */}
        <div className="footer-column">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#">Soluções</a></li>
            <li><a href="#">Torne-se um parceiro</a></li>
            <li><a href="#">Casos de Uso</a></li>
            <li><a href="#">Demonstração</a></li>
            <li><a href="#">Academy | Certificação</a></li>
          </ul>
        </div>

        {/* Coluna Senhasegura */}
        <div className="footer-column">
          <h4>senhasegura</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Conquistas</a></li>
            <li><a href="#">Por que senhasegura?</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade e Cookies</a></li>
            <li><a href="#">Política de Segurança da Informação</a></li>
          </ul>
        </div>

        {/* Coluna Endereço */}
        <div className="footer-column">
          <h4>Endereço</h4>
          <p className="footer-contact">
            Rua Joaquim Antunes, 767<br />
            São Paulo — SP — Brasil<br />
            <p className='number'>11 3069 3910</p>
            
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Direitos autorais © senhasegura 2024 MT4 Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
