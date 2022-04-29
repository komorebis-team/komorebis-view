FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./


RUN npm install
RUN npm install -g webpack-cli webpack-dev-server
#RUN npm install -g serve

COPY ./src ./src
COPY ./server ./server
COPY ./public ./public
COPY ./.babelrc ./
COPY ./webpack.config.js ./
COPY ./.env.development ./

#RUN npm run build
#ENTRYPOINT ["serve", "-s", "-d", "-u", "build"]

EXPOSE 8080
CMD ["webpack-dev-server", "--mode", "development"]