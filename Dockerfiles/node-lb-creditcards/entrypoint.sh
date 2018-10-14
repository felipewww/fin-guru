#!/bin/bash

npm install
npm install nodemon -g

#nodemon --experimental-modules app.mjs
npm run dev

#Keep container alive after end this script
/bin/bash