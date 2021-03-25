FROM node:latest

WORKDIR /usr/usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "start"]