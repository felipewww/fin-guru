import request from 'request';

class reqData {
    constructor()
    {
        this.uri = 'http://node-lb-creditcards';
        this.method = 'post';
        this.headers= [
            {
                name: 'content-type',
                value: 'application/json'
            }
        ];

        this.form = {}
    }
}

export default class CreditCards
{
    constructor(Router)
    {
        this.Router = Router;

        this.getRoutes();
        this.postRoutes();
    }

    postRoutes()
    {
        this.Router.route('/creditCards')
            .post(async (req, res, next) => {
                console.log("posting".bgYellow.white.bold)
                let result = await this.execute(req)
                    .then(result => {
                        res.statusCode = 200;
                        next({ status: true });
                    })
                    .catch(error => {
                        res.statusCode = 500;
                        next({ status: false });
                    })

            })
            .get((req, res, next) => {
                res.statusCode = 200;
                console.log("getting".bgYellow.white.bold)
                next({ status: true });
            });
    }

    getRoutes()
    {

    }

    async execute(req)
    {
        this.reqData = new reqData();
        this.reqData.uri += req.originalUrl;

        //Use the same method used on gateway request
        this.reqData.method = req.method;


        return new Promise((resolve, reject) => {
            request(this.reqData, function (error, response, body) {

                if (error) {
                    reject({
                        statusCode: 500,
                        error:error
                    });

                    return;
                }

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
}