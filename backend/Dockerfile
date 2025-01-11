FROM node:20-alpine 

WORKDIR /backend

COPY backend/package*.json .

RUN ls -la
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]