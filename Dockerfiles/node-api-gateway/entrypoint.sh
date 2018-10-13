#!/bin/bash

npm install
npm install nodemon -g

# nodemon run dev
nodemon --experimental-modules app.mjs

#Keep container alive after end this script
/bin/bash
