FROM node:16.15.1-alpine AS development
RUN apk add zsh
WORKDIR /projects/nestjs-starter
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
