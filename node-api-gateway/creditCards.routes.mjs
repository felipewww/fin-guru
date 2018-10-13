import request from 'request';

class reqData {
    constructor()
    {
        this.uri = 'http://node-lb-creditcards';
        this.method = 'post';
        this.headers= [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
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
        this.prefix = '/api/v1/creditCards';

        this.getRoutes();
        this.postRoutes();
    }

    postRoutes()
    {
        this.Router.post(this.prefix, async(req, res, next) => {

            // this.reqData.method = 'post';

            return await this.execute(req)
                .then(result => {
                    return res.send(200, result);
                })
                .catch(error => {
                    return res.send(error.statusCode, error);
                })

        });
    }

    getRoutes()
    {

        this.Router.get( this.prefix+'/:id', async(req, res, next) => {

            // this.reqData.method = 'get';

            return await this.execute(req)
                .then(result => {
                    return res.send(200, result);
                })
                .catch(error => {
                    return res.send(error.statusCode, error);
                })
        });
    }

    /**
     * use the same data sent to apiGateway to resend to the final request (the service)
     * ignoring gateway prefix
     *
     * replace '/api/v1/creditCards/:param1/:param2' -> http://node-lb-creditcards/:param1/:param2
     * @param fullURI
     */
    setURI(fullURI)
    {
        this.reqData.uri += fullURI.substring(this.prefix.length, fullURI.length);
    }

    async execute(req)
    {
        this.reqData = new reqData();
        this.setURI(req._url.pathname);

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