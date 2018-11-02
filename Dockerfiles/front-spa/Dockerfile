FROM node:9

WORKDIR /squad/front-spa

RUN apt-get update && apt-get install nano -y

RUN npm install -g @angular/cli

COPY entrypoint.sh /entrypoints/squad/front-spa/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/front-spa/entrypoint.sh"]