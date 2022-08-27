FROM node:18.8.0-alpine AS development
RUN apk add zsh
WORKDIR /apps/nestjs-starter
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
EXPOSE 3000
USER node

