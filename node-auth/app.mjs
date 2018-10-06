import restify from 'restify';
import colors from 'colors';

import dotenv from 'dotenv';
dotenv.config();

var server = restify.createServer();
server.use(restify.plugins.bodyParser()); //{ mapParams: true }
server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});

export default server;

import FamiliesModel from './models/FamiliesModel';
let familiesModel = new FamiliesModel();

import Routes from './routes';
new Routes();


// module.exports = server;