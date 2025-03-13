# API de Delivery - RocketLog

Esta API foi criada para um aplicativo de delivery. O objetivo é gerenciar entregas, autenticação de usuários e interações com o banco de dados de forma eficiente. A API foi construída com **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**. Além disso, utilizamos o **Zod** para validação de dados, garantindo a integridade das informações trocadas entre o cliente e o servidor.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para rodar o backend da API.
- **Express.js**: Framework para construção da API RESTful.
- **Prisma ORM**: ORM para facilitar a interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações.
- **Zod**: Biblioteca para validação de dados.
- **Docker**: Utilizado para containerizar a aplicação e garantir consistência nos ambientes de desenvolvimento e produção.
- **JWT (JSON Web Token)**: Para autenticação e autorização de usuários.
- **dotenv**: Para gerenciar variáveis de ambiente e configurações sensíveis.

## Funcionalidades

- **Cadastro e Autenticação de Usuários**: Endpoints para registrar novos usuários e autenticar com JWT.
- **Gestão de Entregas**: CRUD completo para o gerenciamento das entregas.
- **Validação de Dados**: Validação de dados usando Zod para garantir a qualidade das informações.
- **Controle de Acesso**: Implementação de middleware de autenticação para proteger rotas sensíveis.

## Como Rodar Localmente

### 1. Clone o Repositório

Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/pedrohfreitas01/rocketlog-delivery-api.git
cd rocketlog-delivery-api
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configuração do Banco de Dados
-Crie o arquivo .env na raiz do projeto e adicione suas credenciais de banco de dados:

```bash
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
PORT=3333
```

### 4. Rodando o Banco de Dados com Docker
- Você pode usar o Docker para rodar o banco de dados PostgreSQL localmente. Aqui está um exemplo de como configurar um contêiner para o PostgreSQL:

```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

### 5. Rodando as Migrações
- Utilize o Prisma para rodar as migrações e criar as tabelas no banco de dados:
``` bash
npx prisma migrate deploy
```

### 5. Rodando as Migrações
- Utilize o Prisma para rodar as migrações e criar as tabelas no banco de dados:

```bash
npx prisma migrate deploy

```

### 6. Inicie o Servidor

```bash
npm start

```
