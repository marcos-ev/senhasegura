import React from 'react';
import './styles/_advantages.scss';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      title: 'Acesso Privilegiado Seguro',
      description:
        'Gestão de acessos privilegiados completa, com auditoria, relatórios, monitoramento de sessões, Threat Analysis e muito mais.',
    },
    {
      title: 'Trabalho Remoto Seguro',
      description:
        'Conceda acessos seguros a fornecedores, funcionários e terceiros, com total rastreabilidade das ações e sem VPN.',
    },
    {
      title: 'Gerenciamento de Segredos DevOps',
      description:
        'Proteção desde o desenvolvimento até o controle da operação DevSecOps, garantindo a agilidade.',
    },
    {
      title: 'Gestão de Certificados',
      description:
        'Facilite a gestão de certificados digitais com renovação automática a conexões com autoridades certificadoras.',
    },
    {
      title: 'Proteção de Endpoint & Dispositivos',
      description:
        'Gerencie facilmente privilégios e acessos em dispositivos Windows e Linux da sua organização.',
    },
    {
      title: 'Gerenciador de Senhas Pessoais',
      description:
        'O cofre de senhas definitivo para sua organização! Armazene senhas e usuários, compartilhe de forma segura e gere senhas fortes.',
    },
    {
      title: 'Cloud Identity and Access Management',
      description:
        'Gerencie identidades privilegiadas em ambientes cloud de forma integrada ao PAM.',
    },
    {
      title: 'Cloud Entitlements and Infrastructure Management',
      description:
        'Proteja acessos e gerencie privilégios na sua infraestrutura em nuvem de forma centralizada e integrada.',
    },
  ];

  return (
    <section className="advantages-section">
      <div className="advantages-container">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-box">
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
            <a href="#" className="advantage-button">
              Tour pela Solução
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
