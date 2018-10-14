import * as app from '../app';

import CreditCardsService from '../services/creditCards.routes'
import Cryptor from '../core/Cryptor';

export default class Gateway {
    constructor()
    {
        this.Router = app.default.apiRouter;
        app.default.router.use('/api/', this.Router);

        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware()
    {
        this.Router.use( (req, res, next) => {

            if ( !req.body.token || req.body.token === '' ) {
                res.statusCode = 403;
                res.end(JSON.stringify({msg: 'Token is required.'}));
                return;
            }

            let validation = Cryptor.apiTokenValidation(req.body);

            if (!validation.status) {
                res.statusCode = 403;
                res.end(JSON.stringify({msg: 'Unauthorized.', code: validation.error }));
                return;
            }

            next();
        })
    }

    setRoutes()
    {
        new CreditCardsService(this.Router);
    }
}