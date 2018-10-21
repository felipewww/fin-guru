FROM node:9

WORKDIR /squad/front-end

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/front-end/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/front-end/entrypoint.sh"]