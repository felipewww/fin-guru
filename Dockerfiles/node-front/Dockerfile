FROM node:9

WORKDIR /squad/node-front

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/node-front/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/node-front/entrypoint.sh"]