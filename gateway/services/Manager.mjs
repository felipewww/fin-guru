import request from "request";

export default class Manager {
    constructor(uri)
    {
        this.serviceURI = uri;
    }

    async execute(req)
    {
        //Forward data
        let data = {
            uri: this.serviceURI+req.originalUrl,
            method: req.method,
            json: req.body
        };

        console.log("REqDATA");
        console.log(data);

        return new Promise((resolve, reject) => {
            request(data, function (error, response, body) {

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
                        error: body,
                        route: data.uri,
                        method: data.method.toUpperCase(),
                    })
                }
            });
        });
    }
}

