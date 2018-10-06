import crypto from 'crypto';
import server from './app';
import jwt from "jsonwebtoken";

import Responser from './Responser';

export default class Routes {
    constructor()
    {
        this.Responser = new Responser();
        this.setRoutes();
    }

    setRoutes()
    {
        // console.log(SS)
        server.get('/teste', function (req, res) {
            res.send('Opa!');
        });

        server.post('/login', this.login);

        server.post('/validate',  (req, res, next) => {
            return this.validate(req, res, next)
        })
        // server.post('/validate',  this.validate);
    }

    login(req, res, next)
    {
        let encrypt = crypto.createCipher('aes-128-cbc', process.env.APP_SECRET_RAW);
        encrypt.update(req.body.id, 'utf8', 'hex');
        encrypt.update('|'+req.body.familyId, 'utf8', 'hex');
        let cryptStr = encrypt.final('hex');

        let token = jwt.sign({
            data: cryptStr
        }, process.env.APP_SECRET_HASH);


        res.send({ token: token });
    }

    validate(req, res, next)
    {
        let token = req.body.token;

        try {
            let decoded = jwt.verify(token, process.env.APP_SECRET_HASH);

            // var decrypt = crypto.createDecipher('aes-128-cbc', process.env.APP_SECRET_RAW);
            var decrypt = crypto.createDecipher('aes-128-cbc', 'wrong');
            decrypt.update(decoded.data, 'hex', 'utf8');
            let decryptData = decrypt.final('utf8').split("|");


            let userId = parseInt(decryptData[0]);
            let familyId = parseInt(decryptData[1]);

            this.Responser.setSuccess([userId, familyId]);

        } catch(err) {
            this.Responser.setError(1000, err);
        }

        return res.send(this.Responser.status, this.Responser.getResponse());
    }
}