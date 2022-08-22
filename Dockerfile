FROM node:16.15.1-alpine
RUN apk add --no-cache python3 g++ make && apk add zsh
WORKDIR /nestjs-starter
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
