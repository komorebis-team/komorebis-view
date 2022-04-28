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

EXPOSE "3000"

CMD ["serve", "-s", "build"]
