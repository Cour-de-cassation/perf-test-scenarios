FROM node:18-alpine

COPY package*.json ./
COPY src ./src

RUN npm ci
