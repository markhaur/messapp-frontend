FROM node:16.15.1 AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY public/ public
COPY src/ src
COPY .env .
RUN npm run build

RUN npm install -g serve

ENV NODE_ENV production

EXPOSE 3000
CMD [ "serve", "-s", "build" ]