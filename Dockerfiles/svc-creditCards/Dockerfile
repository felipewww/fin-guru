FROM node:9

WORKDIR /squad/svc-creditCards

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/svc-creditCards/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/svc-creditCards/entrypoint.sh"]