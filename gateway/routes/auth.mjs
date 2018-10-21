import * as app from '../app';

import FamilyController from '../controllers/FamilyController';
import UserController from '../controllers/UserController';

export default class Routes {
    constructor()
    {
        this.setRoutes();
    }

    setRoutes()
    {
        let authRouter = app.default.authRouter;
        app.default.router.use('/auth/', authRouter);

        authRouter.use('/', function(req, res, next){
            req.body.token = req.headers.authorization;
            next();
        });

        authRouter.route('/user')
            .post(async function (req, res, next) {
                let responser = await new UserController().login(req.body);
                res.statusCode = responser.status;

                next(responser.getResponse());
            })
            .put(async function (req, res, next) {
                let responser = await new UserController().register(req.body);
                res.statusCode = responser.status;

                next(responser.getResponse());
            });

        authRouter.route('/family')
            .post(async function (req, res, next) {
                let responser = await new FamilyController().login(req.body);
                res.statusCode = responser.status;

                next(responser.getResponse());
            })
            .put(async function (req, res, next) {
                let responser = await new FamilyController().register(req.body);
                res.statusCode = responser.status;

                next(responser.getResponse());
            });
    }
}