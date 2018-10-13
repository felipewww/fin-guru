import * as app from '../app';

import FamilyController from '../controllers/FamilyController';
import UserController from '../controllers/UserController';
import Validator from '../controllers/Validator';

import Debugger from '../core/Debugger';
import Router from "router";


// import JWT from "jsonwebtoken";
// const jwt = JWT;

// const _debugger = new Debugger();
global._debugger = new Debugger();
// global.Debugger = new Debugger();

export default class Routes {
    constructor()
    {
        // this.setRoutes();
        this._setRoutes();
    }

    setRoutes()
    {
        let Router = app.default.server;

        Router.put('/user', async(req, res, next) => {
            let responser = await new UserController().register(req.body);
            // console.log(responser);
            res.send(responser.status, responser.getResponse());
        });

        Router.post('/user', async(req, res, next) => {
            let responser = await new UserController().login(req.body);
            res.send(responser.status, responser.getResponse());
        });

        Router.put('/family', async(req, res, next) => {
            // return await new FamilyController().register();
            let responser = await new FamilyController().register(req.body);
            res.send(responser.status, responser.getResponse())
        });

        Router.post('/family', async(req, res, next) => {
            // return await new FamilyController().register();
            let responser = await new FamilyController().login(req.body);
            res.send(responser.status, responser.getResponse())
        });

        Router.post('/validate',  (req, res, next) => {
            console.log("AUTH >>>".bgYellow.black);
            console.log(req.body);
            console.log("\n");
            console.log("req.body.token");
            console.log(req.body);
            console.log("\n");
            console.log(req.params);

            let responser = new Validator().validate(req.body);
            res.send(responser.status, responser.getResponse())
            // return this.validate(req, res, next)
        });
    }

    _setRoutes()
    {
        let authRouter = app.default.authRouter;
        app.default.router.use('/auth/', authRouter);

        authRouter.route('/user')
            .post(function (req, res, next) {
                res.statusCode = 200;
                next({
                    msg: 'login user!'
                });
            })
            .put(async function (req, res, next) {
                let responser = await new UserController().register(req.body);
                res.statusCode = responser.status;

                next(responser.getResponse());
            });

        authRouter.route('/family')
            .post(function (req, res, next) {

                res.statusCode = 200;
                next({
                    msg: 'login family!'
                });
            })
            .put(async function (req, res, next) {
                let responser = await new FamilyController().register(req.body);
                res.statusCode = responser.status;
                next(responser.getResponse());
            });

        authRouter.route('/validate')
            .post(function (req, res, next) {
                res.statusCode = 200;
                next({
                    msg: 'validate token!'
                });
            });
    }
}