FROM node:20-alpine 

WORKDIR /backend

COPY package*.json ./

RUN ls
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]