# Minha Cloud V1
Base de uma hospedagem de bots: site, API, bot Discord e estrutura Docker.

## Requisitos
- Node.js 20+
- PostgreSQL
- Docker (para executar aplicações)
- Credenciais de uma aplicação Discord

## Estrutura
- website: frontend do painel
- api: backend REST
- bot: bot administrativo
- worker: base para execução futura dos containers
- database: schema SQL
- docker: arquivos auxiliares

## Rodar
1. Copie `.env.example` para `.env` e configure.
2. Instale as dependências em api e bot.
3. Crie o banco usando `database/schema.sql`.
4. Inicie a API e o bot.
5. Abra `website/index.html`.

Esta V1 é uma base funcional de painel/API; o executor Docker deve ser configurado em um VPS Linux antes de oferecer hospedagem pública.
