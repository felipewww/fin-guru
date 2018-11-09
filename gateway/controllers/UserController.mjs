import Controller from '../core/Controller';

import jwt from "jsonwebtoken";
import Cryptor from '../core/Cryptor';

import UsersModel from '../models/UsersModel';

export default class UserController extends Controller{
    constructor()
    {
        super();
    }

    async register(data)
    {
        try{

            if ( !data.token ) {
                this.Responser.setError(1000, 'Token is required');
                return this.Responser;
            }

            //This throw error if decode wrong
            let decoded = jwt.verify(data.token, process.env.APP_SECRET_HASH);
            let familyId = Cryptor.decrypt(decoded.data);

            let password = ( data.password ) ? await Cryptor.generatePassword(data.password).catch(e => { console.log(e) }) : null;

            let usersModel = new UsersModel();

            let user = await usersModel.model.create({
                name: data.name,
                lastname: data.lastname,
                nickname: data.nickname,
                password: password,
                family_id: familyId
            });

            this.Responser.setSuccess({ token: Cryptor.generateUserToken(user.id, familyId) }, 'User created');
        }catch (e) {
            this.Responser.setError(1, e);
        }

        return this.Responser;
    }

    async login(data)
    {
        try{
            let decoded = jwt.verify(data.token, process.env.APP_SECRET_HASH);
            let familyId = Cryptor.decrypt(decoded.data);

            let usersModel = new UsersModel();
            let user = await usersModel.findById(data.userId, familyId);

            if ( !user ) {
                this.Responser.setError(13, 'Nice try');
                return this.Responser;
            }

            console.log("DATASENT".bgRed);
            // console.log(user);
            let pass = await Cryptor.generatePassword(data.password)
            console.log(pass);

            // let validatePassword = await Cryptor.comparePassword(data.password, user.password);
            if ( !await Cryptor.comparePassword(data.password, user.password) ) {
                this.Responser.setError(3, 'Login error');
                return this.Responser;
            }

            this.Responser.setSuccess({ token: Cryptor.generateUserToken(user.id, familyId) }, 'Logged in');
        }catch (e) {
            this.Responser.setError(1, e);
        }

        return this.Responser;
    }

    validate(data)
    {
        let token = data.token;

        try {
            let decoded = jwt.verify(token, process.env.APP_SECRET_HASH);

            var decrypt = crypto.createDecipher('aes-128-cbc', process.env.APP_SECRET_RAW);
            // var decrypt = crypto.createDecipher('aes-128-cbc', 'wrong');
            decrypt.update(decoded.data, 'hex', 'utf8');
            let decryptData = decrypt.final('utf8').split("|");

            let userId = parseInt(decryptData[0]);
            let familyId = parseInt(decryptData[1]);

            this.Responser.setSuccess([userId, familyId]);

        } catch(err) {
            this.Responser.setError(1000, err);
        }

        return this.Responser;
    }
}