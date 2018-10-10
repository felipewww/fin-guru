FROM node:9

WORKDIR /squad/node-auth

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/node-auth/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/node-auth/entrypoint.sh"]

#EXPOSE 3000