FROM node:18.12.0

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /styled-landingpage

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN yarn install

COPY . .