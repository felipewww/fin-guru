import http from 'http';
import Router from 'router';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth';
import gateway from './routes/gateway';

let router = Router();

router.use(bodyParser.json());

router.route('*').all(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;

    next();
});

let server = http.createServer(function(req, res) {

    //The final response
    router(req, res, (responseData) => {

        //When reach some service, response data never will be null, if is null, not reached any service and stopped here (on gateway)
        if ( res.statusCode === 404 && !responseData ) {
            responseData = { status: 404, msg: 'Route not registered on Gateway' }
        }

        return res.end(JSON.stringify(responseData));
    });

});

server.listen(85);

router.route('/auth');

export default {
    router: router,
    authRouter: Router(),
    apiRouter: Router(),
}

new authRoutes();
new gateway();