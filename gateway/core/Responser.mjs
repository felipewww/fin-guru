export default class Responser {
    constructor()
    {
        this.status = null;
        this.message = null;
        this.data = {};
    }

    getResponse()
    {
        return {
            status: this.status,
            message: this.message,
            data: this.data
        }
    }

    setError(errorCoode, err)
    {
        let errors = {
            1: { message: 'Something went wrong.', httpCode: 400 },

            2: { message: 'Family not found.', httpCode: 403 },
            3: { message: 'Invalid Password.', httpCode: 403 },

            13: { message: "Danger error. This shouldn't have happened!", httpCode: 403 },

            1000: { message: 'Invalid Token.', httpCode: 403 }
        };

        let selectedError = errors[errorCoode];

        let message = {};
        message.text = selectedError.message;

        //Show error only in development mode.
        if (process.env.APP_ENV === 'dev') {
            message.err = err;
            message.errMessage = err.message;
            this.logger(err);
        } else {
            this.logger(err);
        }

        //Default is badRequest
        this.status = (selectedError.httpCode ) ? selectedError.httpCode : 400;
        this.error = errorCoode;
        this.message = message;
    }

    setSuccess(data, msg = '')
    {
        this.status = 200;
        this.data = data;
        this.message = msg;
    }

    //This method should save messages on server log
    logger(err)
    {
        let tag = process.env.APP_ENV.yellow+ " " +"Error".bgRed.white;
        console.log(tag);
        console.log(err.message);
    }
}