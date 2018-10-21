FROM node:9

WORKDIR /squad/basics

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/basics/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/basics/entrypoint.sh"]

#EXPOSE 3000
