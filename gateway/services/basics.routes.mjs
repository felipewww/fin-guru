import Manager from './Manager'

export default class Basics extends Manager
{
    constructor(Router)
    {
        super('http://svc-basics');

        Router.route('/receivables/*').all(async (req, res, next) => {
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

        Router.route('/categories/*').all(async (req, res, next) => {
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