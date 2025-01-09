FROM node:20.18-alpine3.21

WORKDIR /backend

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]