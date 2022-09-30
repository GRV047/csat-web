FROM node:current-alpine
WORKDIR /src/App

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm","start"]