# COST
 COST é uma aplicação web para planejamento de custos de projetos. Com ele, você pode criar e gerenciar projetos, inserir o custo total e adicionar serviços que impactam o custo total do projeto. O projeto se comunica com um backend simples utilizando db.json para armazenar todos os dados inseridos.

Índice
Instalação
Uso
Recursos
Contribuição
Licença
Instalação
Pré-requisitos
Node.js instalado (versão recomendada: 14.x ou superior)
npm ou yarn (gerenciador de pacotes)
Passos
# Clone o repositório:

sh
Copy code
git clone https://github.com/seu-usuario/cost.git
cd cost
Instale as dependências:

sh
Copy code
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

sh
Copy code
npm start
# ou
yarn start
Em outra aba do terminal, inicie o servidor JSON:

sh
Copy code
npx json-server --watch db.json --port 5000
Isso iniciará o servidor JSON em http://localhost:5000.

# Uso
Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

# Na página principal, você pode:

Criar novos projetos
Adicionar serviços a projetos existentes
Visualizar e editar custos totais e de serviços
# Recursos
Criar Projetos: Crie novos projetos e defina o custo total.
Gerenciar Serviços: Adicione serviços aos projetos e veja o impacto no custo total.
Persistência de Dados: Todos os dados são salvos em um backend simples (db.json).
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

# Faça um fork do projeto
Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
Faça commit das suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Envie para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request
# Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.


