import Manager from './Manager'

export default class CreditCards extends Manager
{
    constructor(Router)
    {
        super('http://svc-creditcards');

        Router.route('/creditCards/*').all(async (req, res, next) => {
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