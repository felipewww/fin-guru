FROM node:9

WORKDIR /squad/node-lb-creditcards

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/node-lb-creditcards/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/node-lb-creditcards/entrypoint.sh"]