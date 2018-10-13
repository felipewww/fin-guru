import * as app from './app';
import request from 'request';

import CreditCars from './routes/creditCards.routes';

export default class Routes{

    constructor()
    {
        this.Router = app.default.server;

        this.Router.use((req, res, next) => {
            return this.middleware(req, res, next);
        });

        this.setRoutes();
    }

    async middleware(req, res, next)
    {
        res.header("Access-Control-Allow-Origin", "*");

        return await this.Auth()
            .then(res => {
                req.middlewareData = res;
                return next();
            })
            .catch(e => {
                return res.send(e.statusCode, e.error)
            })
    }

    /**
     * Middleware that validate token sent
     * @returns {Promise}
     * @constructor
     */
    async Auth()
    {
        return new Promise((resolve, reject) => {
            let reqData = {
                uri: 'http://node-auth:81/validate',
                method: 'post',
                headers: [
                    {
                        name: 'content-type',
                        value: 'application/x-www-form-urlencoded'
                    }
                ],
                form: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNzFjYTBmNDA1OTQ4YWNhOGMwZjlmM2NkNTk5M2RhYWIiLCJpYXQiOjE1Mzg5MjY5MzJ9.X6rDESokucD2xUG-zR_vb-4a4ZvdJlaYIwERytxMkEw'
                    // token: 'wrongToken'
                }

            };

            request.post(reqData, function (error, response, body) {
                // console.log('error:', error); // Print the error if one occurred
                // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                // console.log('body:', body); // Print the HTML for the Google homepage.

                if (response.statusCode === 200) {
                    resolve(body);
                } else {
                    reject({
                        statusCode: response.statusCode,
                        error: JSON.parse(body)
                    })
                }
            });

        });
    }

    setRoutes()
    {
        console.log("isntancing new!".bgGreen.white);
        new CreditCars(this.Router);
    }
}

