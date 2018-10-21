import http from 'http';
import Router from 'router';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import bodyParser from 'body-parser';

import CreditCardsController from './controllers/CreditCardsController';

let router = Router();

router.use(bodyParser.json());

router.route('*').all(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
        // console.log("heeeeeeeeeeere?".bgRed.white.bold);
    next();
});

let server = http.createServer(function(req, res) {

    router(req, res, (responseData) => {

        if (res.statusCode === 404) {
            responseData = { error: 'Not found.' };
        }
        return res.end(JSON.stringify(responseData));
    });

});

// router.route('/api/creditCards').all(function (req, res, next) {
//     console.log("PQP");
// });

router.route('/api/creditCards', function (req, res, next) {
    console.log("PQP");
});

server.listen(80);

new CreditCardsController(router, Router());