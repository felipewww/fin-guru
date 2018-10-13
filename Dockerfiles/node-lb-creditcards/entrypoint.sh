#!/bin/bash

npm install

nodemon --experimental-modules app.mjs

#Keep container alive after end this script
/bin/bash