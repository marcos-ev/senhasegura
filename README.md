# Senhasegura Landing Page

Este é um projeto de landing page para o **Senhasegura**, criado com [Astro](https://astro.build/), React e SCSS, com o objetivo de fornecer uma interface simples e eficaz.

DEPLOY:  https://senhasegura-git-main-marcosevs-projects.vercel.app/

## Tecnologias Utilizadas
- **Astro**: Framework para criação de sites estáticos e dinâmicos com componentes modernos.
- **React**: Utilizado em seções específicas para componentes interativos.
- **SCSS**: Pré-processador CSS para estilização flexível e organizada.
- **Git**: Controle de versão e deploy via GitHub.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina (versão 14.x ou superior).
- **npm**: Geralmente vem junto com o Node.js. Verifique a instalação com `npm -v`.
- **Git**: Necessário para controle de versão e deploy.

## Instalação do Projeto

### Passo 1: Clone o Repositório

Abra o terminal e clone o repositório na sua máquina local:


git clone https://github.com/seuusuario/senhasegura-landing-page.git

### Passo 2: Navegue para o Diretório do Projeto
bash
Copiar código
cd senhasegura-landing-page

### Passo 3: Instale as Dependências
Após entrar no diretório, instale todas as dependências necessárias usando o npm:

bash
Copiar código
npm install

### Passo 4: Inicie o Servidor de Desenvolvimento
Agora, você pode iniciar o servidor de desenvolvimento do Astro:

bash
Copiar código
npm run dev
Isso abrirá o projeto no navegador, normalmente na URL: http://localhost:3000

Estrutura do Projeto
src/components: Contém todos os componentes React utilizados na página.
src/assets: Diretório onde ficam as imagens e ícones.
src/styles: Estilos globais e específicos, organizados em arquivos SCSS.
public: Arquivos estáticos que não precisam de processamento.
astro.config.mjs: Arquivo de configuração do Astro.
package.json: Contém informações do projeto e os scripts disponíveis.

Como Adicionar Alterações
#### Passo 1: Faça Alterações no Código
Edite os arquivos que você precisa no diretório src/components ou src/styles.

#### Passo 2: Commit e Push
Após fazer as alterações, adicione e faça commit no Git:

bash
Copiar código
git add .
git commit -m "Descrição das alterações"
git push origin master
Build para Produção
Quando estiver pronto para fazer o deploy da página, rode o comando abaixo para gerar os arquivos otimizados:

bash
Copiar código
npm run build
Os arquivos otimizados para produção estarão na pasta dist.

Contribuições
Se desejar contribuir com o projeto, sinta-se à vontade para fazer um fork e enviar pull requests.

