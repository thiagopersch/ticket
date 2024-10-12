#!/bin/sh

# Aguarda o banco de dados estar pronto
until npx sequelize db:migrate; do
  echo "Waiting for the database to be ready..."
  sleep 2
done

npx sequelize db:seed:all

# Inicia a aplicação
yarn start
