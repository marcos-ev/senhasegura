import React from 'react';
import '../../styles/_comparisonSection.scss';

const ComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-content">
        <div className="comparison-text">
          <h2>Compare o senhasegura com outras plataformas líderes no mercado</h2>
          <blockquote>
            “O senhasegura agora tem uma proposta de PAM mais poderosa, com usabilidade aprimorada e visão de futuro sobre as necessidades dos desenvolvedores e como o PAM se encaixa nos ambientes de Infraestrutura como Código (IaC).”
            <cite>– KuppingerCole 2023 Leadership Compass: Privileged Access Management</cite>
          </blockquote>
          <div className="cta-buttons">
            <a href="#" className="cta-button primary">Explore a solução</a>
            <a href="#" className="cta-button secondary">Veja preços</a>
          </div>
        </div>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>senhasegura</th>
                <th>Outras Soluções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solução full stack</td>
                <td className="check">✔</td>
                <td className="cross">✘</td>
              </tr>
              <tr>
                <td>Sem licenças extras</td>
                <td className="check">✔</td>
                <td className="cross">✘</td>
              </tr>
              <tr>
                <td>Instalação em 7 minutos</td>
                <td className="check">✔</td>
                <td className="cross">✘</td>
              </tr>
              <tr>
                <td>Sem custos escondidos</td>
                <td className="check">✔</td>
                <td className="cross">✘</td>
              </tr>
              <tr>
                <td>Suporte 5 estrelas</td>
                <td className="check">✔</td>
                <td className="cross">✘</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
