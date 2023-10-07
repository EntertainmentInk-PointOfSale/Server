FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3001
CMD [ "npm", "run", "start:dev"]