import React from 'react';
import '../../styles/_pamRecognition.scss';

const PAMRecognitionSection: React.FC = () => {
  return (
    <>
      <section className="pam-recognition-wrapper">
        <div className="pam-recognition">
          <div className="recognition-content">
            <div className="recognition-text">
              <h2>The World's #1 All-In-One PAM Solution</h2>
              <div className="recognition-cards">
                <div className="card">
                  <p><strong>4.9 out of 5</strong> rating in Gartner’s Peer Insights Voice of the Customer for PAM</p>
                </div>
                <div className="card">
                  <p><strong>Info-Tech Research Group</strong> Software Reviews Gold Medal Winner & Top Choice</p>
                </div>
                <div className="card">
                  <p><strong>Gartner Magic Quadrant</strong> for Privileged Access Management <strong>Challenger</strong></p>
                </div>
                <div className="card">
                  <p><strong>Frost & Sullivan Best Practices</strong> Customer Value Leadership Award</p>
                </div>
                <div className="card">
                  <p><strong>KuppingerCole Analysts</strong> Overall Leader in PAM by KuppingerCole Leadership Compass Report for PAM</p>
                </div>
                <div className="card">
                  <p><strong>ISG Provider Lens</strong> Quadrant Report for Cybersecurity Solutions <strong>Leader</strong></p>
                </div>
              </div>
            </div>
            <div className="recognition-image">
              <img src="..\assets\panorama.png" alt="Recognition Chart" />
              <div className="cta-button-container">
                <a href="#" className="cta-button">See What Sets Us Apart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="platform-content">
          <div className="platform-text">
            <h2>Plataforma Privilege 360°</h2>
            <p>A nossa solução prioriza a efetividade da sua estratégia de segurança digital e gestão de identidades.</p>
            <p>Nosso portfólio traz módulos fáceis de integrar e pensados para aumentar a maturidade de cibersegurança da sua organização. Assim, você protege identidades humanas e de máquinas de forma eficiente.</p>
            <p>Tudo isso com o melhor suporte ao cliente. Tudo rápido, com custos mínimos e com foco no que sua organização precisa.</p>
            <div className="cta-buttons">
              <a href="#" className="cta-button primary">Veja uma demo</a>
              <a href="#" className="cta-button secondary">Fale com vendas</a>
            </div>
          </div>
          <div className="platform-image">
            <img src="https://cdn.prod.website-files.com/6531856af18f18cb20cfa436/65804e4f9f4f2f0db05ddad9_360%20platform%20senhasegura.webp" alt="Platform Diagram" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PAMRecognitionSection;
