FROM node:9

WORKDIR /squad/node-api-gateway

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/node-api-gateway/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/node-api-gateway/entrypoint.sh"]

#EXPOSE 3000
