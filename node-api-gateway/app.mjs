import restify from 'restify';
import colors from 'colors';

import dotenv from 'dotenv';
dotenv.config();

var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});

export default { server };

import Routes from './routes';
new Routes();