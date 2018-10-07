import restify from 'restify';
import colors from 'colors';

import dotenv from 'dotenv';
dotenv.config();

// import * as jwt from "jsonwebtoken";

// export default jwt;

var server = restify.createServer();
server.use(restify.plugins.bodyParser()); //{ mapParams: true }
server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});

// exports.default = { server: server }
// export global jwt;
export default {server};
// export default jwt;

import FamiliesModel from './models/FamiliesModel';
let familiesModel = new FamiliesModel();

import Routes from './routes';
new Routes();


// module.exports = server;