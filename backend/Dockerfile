FROM node:14-alpine

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY server.js .
COPY files/ ./files

EXPOSE 3002

CMD ["node", "server.js"]
