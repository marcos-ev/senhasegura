import React from 'react';
import '../../styles/_demo.scss';

const DemoSection: React.FC = () => {
  return (
    <section className="demo-section">
      <div className="demo-container">
        {/* Seção de Texto à Esquerda */}
        <div className="demo-text">
          <h2>Agende uma Demonstração</h2>
          <p>
            Descubra o poder da segurança de identidade e veja como ela pode aprimorar a segurança e a resiliência cibernética da sua organização.
          </p>
          <p>Agende uma demonstração ou uma reunião com nossos especialistas hoje mesmo.</p>
          
          {/* Bloco de destaques dentro de um quadrado */}
          <div className="highlight-box">
            <div className="highlight">
              <span className="icon">
                <img src="..\assets\shield.png" alt="Ícone 1" width="20" height="20" />
              </span>
              <p>Custo total de propriedade (TCO) 70% menor em comparação com os concorrentes.</p>
            </div>
            <div className="highlight">
              <span className="icon">
                <img src="..\assets\shield.png" alt="Ícone 2" width="20" height="20" />
              </span>
              <p>Tempo de valorização (TTV) 90% maior com uma implantação rápida de 7 minutos.</p>
            </div>
            <div className="highlight">
              <span className="icon">
                <img src="..\assets\shield.png" alt="Ícone 3" width="20" height="20" />
              </span>
              <p>A única solução PAM disponível no mercado que cobre todo o ciclo de vida do acesso privilegiado.</p>
            </div>
          </div>
        </div>

        {/* Formulário à Direita */}
        <div className="demo-form">
          <form>
            <div className="form-group">
              <label>Email Corporativo*</label>
              <input type="email" placeholder="Insira seu email" required />
            </div>

            <div className="form-group-inline">
              <div className="form-group">
                <label>Nome*</label>
                <input type="text" placeholder="Insira seu nome" required />
              </div>
              <div className="form-group">
                <label>Sobrenome*</label>
                <input type="text" placeholder="Insira seu sobrenome" required />
              </div>
            </div>

            <div className="form-group">
              <label>Cargo*</label>
              <select required>
                <option value="">Selecione</option>
                <option value="CEO">CEO</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nome da Empresa*</label>
              <input type="text" placeholder="Nome da Empresa" required />
            </div>

            <div className="form-group-inline">
              <div className="form-group">
                <label>Número de Telefone*</label>
                <input type="tel" placeholder="Número de telefone" required />
              </div>
              <div className="form-group">
                <label>País/Região*</label>
                <select required>
                  <option value="">Selecione</option>
                  <option value="BR">Brazil</option>
                  <option value="US">United States</option>
                  {/* Outros países */}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Nos dê mais detalhes sobre a sua solicitação (opcional)</label>
              <textarea placeholder="Deixe sua mensagem"></textarea>
            </div>

            {/* Botão de Enviar */}
            <button type="submit" className="submit-btn">Enviar</button>

            {/* Recaptcha (Somente um marcador, sem funcionalidade real) */}
            <div className="recaptcha">
              <span>reCAPTCHA</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
