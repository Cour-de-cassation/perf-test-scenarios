FROM node:18-alpine

COPY package*.json ./
COPY testDbsderApi.js ./

RUN npm ci

CMD npm run start:test:dbsder-api