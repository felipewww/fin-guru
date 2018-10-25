import Manager from './Manager'

export default class Payables extends Manager
{
    constructor(Router)
    {
        super('http://svc-payables');

        Router.route('/payables/fixed/*').all(async (req, res, next) => {
            await this.execute(req)
                .then(result => {
                    res.statusCode = 200;
                    next(result);
                })
                .catch(error => {
                    res.statusCode = error.statusCode;
                    next(error);
                })
        });

        Router.route('/payables/variable/*').all(async (req, res, next) => {
            await this.execute(req)
                .then(result => {
                    res.statusCode = 200;
                    next(result);
                })
                .catch(error => {
                    res.statusCode = error.statusCode;
                    next(error);
                })
        });
    }
}