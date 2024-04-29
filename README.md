## Backend do Mundo de Harry Potter
Este é um projeto de backend desenvolvido para gerenciar bruxos e varinhas no mundo mágico de Harry Potter. O projeto utiliza um banco de dados PostgreSQL e fornece operações CRUD completas para bruxos e varinhas, juntamente com uma rota específica para pesquisa de bruxos pelo nome.

## Tecnologias Utilizadas
- Node.js
- Express.js
- PostgreSQL
- Insomnia (para testes de API)

## Configuração
1. Clonando o repositório:
   
   - git clone https://github.com/giobasiliox/DesafioBackend-MundoHarryPotter.git
   - cd DesafioBackend-MundoHarryPotter

3. Instalando as dependências:

   - npm install


3. Iniciando o servidor:

   - npm run dev

## Rotas
A seguir estão as rotas disponíveis no servidor:

1. Bruxos:
   - GET /bruxo: Retorna todos os bruxos cadastrados.
   - GET /bruxo/:id: Retorna um bruxo específico pelo ID.
   - POST /bruxos: Cria um novo bruxo.
   - PUT /bruxos/:id: Atualiza as informações de um bruxo existente.
   - DELETE /bruxos/:id: Exclui um bruxo existente pelo ID.
   - GET /bruxo/nome/:nome: Pesquisa um bruxo pelo nome.

2. Varinhas:
   - GET /varinhas: Retorna todas as varinhas cadastradas.
   - GET /varinhas/:id: Retorna uma varinha específica pelo ID.
   - POST /varinhas: Cria uma nova varinha.
   - PUT /varinhas/:id: Atualiza as informações de uma varinha existente.
   - DELETE /varinhas/:id: Exclui uma varinha existente pelo ID.


## Autor

[Giovana Basílio](https://github.com/giobasiliox)

