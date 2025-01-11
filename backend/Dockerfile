FROM node:20-alpine 

WORKDIR /backend

COPY ./package*.json .

RUN ls -la /backend
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]