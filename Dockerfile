FROM node:18.2.0

ENV PATH /app/node_modules/.bin:$PATH
ENV DEV_PORT=8090

RUN apt-get update -y

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

COPY . .

RUN npm run build
RUN rm -Rf src

EXPOSE 8090

CMD ["node", "./build/server/main.js"]