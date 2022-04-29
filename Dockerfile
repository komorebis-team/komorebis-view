FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
RUN npm install -g serve

COPY ./src ./src
COPY ./server ./server
COPY ./public ./public

RUN npm run build

ENTRYPOINT ["serve", "-s", "-d", "-u", "build"]
