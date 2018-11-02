FROM node:9

WORKDIR /squad/gateway

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/gateway/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/gateway/entrypoint.sh"]
