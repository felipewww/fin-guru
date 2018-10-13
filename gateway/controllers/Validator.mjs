import Controller from '../core/Controller';

import jwt from "jsonwebtoken";
import Cryptor from '../core/Cryptor';

export default class Validator extends Controller{
    constructor()
    {
        super();
    }

    validate(data)
    {
        try{
            let decoded = jwt.verify(data.token, process.env.APP_SECRET_HASH);
            let decodedIDS = Cryptor.decrypt(decoded.data);

            let resdata = {
                userId: decodedIDS[0],
                familyId: decodedIDS[1],
            };

            this.Responser.setSuccess(resdata, 'Token is valid');

        }catch (e) {
            this.Responser.setError(1000, e);
        }

        return this.Responser;
    }
}