import React from 'react';
import './styles/_clients.scss';
import { FaThumbsUp, FaRocket, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa'; // Importando ícones do react-icons

const ClientsSection: React.FC = () => {
  return (
    <section className="clients-section">
      <h2>CISOs e equipes de segurança cibernética em mais de 60 países confiam no senhasegura.</h2>
      <div className="clients-logos">
        <img src="src\assets\clientes\65b14a0adf214cf15593d8ec_1200px-Telefónica_Logo.svg.avif" alt="Telefónica" />
        <img src="src\assets\clientes\65b804b6010d2f267194c2ac_liberty-seguros-logo-142E921493-seeklogo.com.png" alt="Liberty Seguros" />
        <img src="https://cdn.prod.website-files.com/6531856af18f18cb20cfa436/661ecf1b9a6310ec5cb0eedc_santander-logo-gs.png" alt="Ativo 3" />
        <img src="src\assets\clientes\657a3ff0da2066f511ef4c54_Ativo 11.webp" alt="Ativo 11" />
        <img src="src\assets\clientes\657a3ff2ead5afc2bdf85642_Ativo 14.webp" alt="Ativo 14" />
        <img src="src\assets\clientes\657a3ff226570fedf3747d91_Ativo 13.webp" alt="Ativo 13" />
        <img src="https://cdn.prod.website-files.com/6531856af18f18cb20cfa436/661ece3d55717b82481b4933_pgim_center_global_navy.png" alt="PGIM" />
        <img src="https://cdn.prod.website-files.com/6531856af18f18cb20cfa436/661ecf7f44dd0fe14eb0ca3e_hotroy-logo.png" alt="Hotroy" />
        <img src="https://cdn.prod.website-files.com/6531856af18f18cb20cfa436/658429cb44cd786f2f340779_Logo_Grupo_Boticario_500x165.webp" alt="Grupo Boticário" />
      </div>

      {/* Seção de Estatísticas com Ícones */}
      <div className="stats-section">
        <div className="stat-item">
          <FaThumbsUp size={40} color="#035b5c" />
          <h3>99%</h3>
          <p><strong>Recomendação</strong> no Gartner Peer Insights com <strong>5/5</strong> em suporte ao cliente.</p>
        </div>

        <div className="stat-item">
          <FaRocket size={40} color="#035b5c" />
          <h3>90%</h3>
          <p><strong>Time to Value (TTV)</strong> com uma implantação rápida de <strong>7 minutos</strong>.</p>
        </div>

        <div className="stat-item">
          <FaMoneyBillWave size={40} color="#035b5c" />
          <h3>70%</h3>
          <p><strong>Custo total de propriedade</strong> (TCO) 70% menor comparado a outras soluções líderes.</p>
        </div>

        <div className="stat-item">
          <FaShieldAlt size={40} color="#035b5c" />
          <h3>100%</h3>
          <p><strong>Segurança e paz de espírito</strong> para que você possa focar no que é mais importante.</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
