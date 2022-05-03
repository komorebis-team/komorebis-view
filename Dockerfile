FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
RUN npm install -g webpack-cli webpack-dev-server

COPY ./src ./src
COPY ./server ./server
COPY ./public ./public
COPY ./.babelrc ./
COPY ./webpack.config.js ./
COPY ./.env.development ./

EXPOSE 8080

CMD ["webpack-dev-server", "--mode", "development"]