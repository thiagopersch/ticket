FROM node:20 AS node-builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 8080

CMD ["./wait-and-run.sh"]
