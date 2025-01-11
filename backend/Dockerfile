FROM node:20-alpine 

WORKDIR /backend

COPY backend/package*.json .

RUN npm install

COPY /backend .
RUN ls -la

EXPOSE 8080

CMD [ "node", "/backend/index.js" ]