FROM node:9

WORKDIR /squad/svc-payables

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/squad/svc-payables/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/squad/svc-payables/entrypoint.sh"]