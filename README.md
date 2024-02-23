# Aplicação de Gerenciamento de Tarefas <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/> <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/> <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg"/>

Esta é uma aplicação web simples de gerenciamento de tarefas desenvolvida usando Node.js, Express e Sequelize.

## Visão Geral

Este projeto é uma aplicação de gerenciamento de tarefas que permite aos usuários criar, visualizar, atualizar e excluir tarefas. A aplicação segue uma arquitetura MVC (Model-View-Controller), onde:

- **Model**: Define a estrutura de dados para as tarefas e interage com o banco de dados.
- **View**: Utiliza o mecanismo de visualização Handlebars para renderizar as páginas HTML.
- **Controller**: Contém a lógica do lado do servidor para manipular as requisições HTTP relacionadas às tarefas.

## Funcionalidades

- Criar uma nova tarefa.
- Visualizar todas as tarefas.
- Atualizar uma tarefa existente.
- Excluir uma tarefa.

## Requisitos do Sistema

- Node.js
- MySQL
- NPM (Node Package Manager)

## Configuração

1. Clone o repositório:
`git clone https://github.com/KevinSoffa/Node_Tasks_MVC`

2. Instale as dependências:
`npm install`

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
DB_HOST=host-do-seu-banco-de-dados
DB_USER=usuario-do-banco
DB_PASS=senha-do-banco
DB_NAME=nome-do-banco-de-dados

4. Execute o aplicativo:
`npm start`

## Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:
1. Faça um fork do repositório clicando no botão "Fork" no canto superior direito desta página.
2. Clone o seu fork do repositório para a sua máquina local:

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).



