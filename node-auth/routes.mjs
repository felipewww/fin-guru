import * as app from './app';

import FamilyController from './controllers/FamilyController';
import UserController from './controllers/UserController';
import Validator from './controllers/Validator';

import Debugger from './core/Debugger';


// import JWT from "jsonwebtoken";
// const jwt = JWT;

// const _debugger = new Debugger();
global._debugger = new Debugger();
// global.Debugger = new Debugger();

export default class Routes {
    constructor()
    {
        this.setRoutes();
    }

    setRoutes()
    {
        let Router = app.default.server;

        Router.put('/user', async(req, res, next) => {
            let responser = await new UserController().register(req.body);
            console.log(responser);
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
            let responser = new Validator().validate(req.body);
            res.send(responser.status, responser.getResponse())
            // return this.validate(req, res, next)
        });
    }

    executer(method)
    {

    }
}