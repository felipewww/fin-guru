import restify from 'restify';

import dotenv from 'dotenv';
dotenv.config();

var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});

server.post('/api/creditCards/', function(req, res, next){
    res.send(200, {status: 'SERVICE -> New route ok!'})
});

// server.get('/api/creditCards', function(req, res, next){
//     res.send(200, {status: 'SERVICE -> New route GET ok!'})
// });


server.get('/:id', function (req, res, next) {
    res.send(200, { msg: 'Finding by ID serviço ok!' });
});
// export default {server};

// import Routes from './routes';
// new Routes();