FROM node:18-alpine

COPY package*.json ./
COPY src ./

RUN npm ci
