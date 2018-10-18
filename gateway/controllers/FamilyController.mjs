import Controller from '../core/Controller';

import FamiliesModel from '../models/FamiliesModel';
import UsersModel from '../models/UsersModel';
import Cryptor from '../core/Cryptor';

export default class FamilyController extends Controller{
    constructor()
    {
        super();
        this.FamiliesModel = new FamiliesModel();
    }

    /**
     *
     * @returns {Promise<Responser>}
     */
    async register(data)
    {
        try{
            let password = await Cryptor.generatePassword(data.password);

            let family = await this.FamiliesModel.model.create({
                name: data.name,
                username: data.username,
                password: password,
            });

            this.Responser.setSuccess({
                token: Cryptor.generateFamilyToken(family.id),
                familyUsers: {}
            });

        }catch (e) {
            this.Responser.setError(1, e);
        }

        return this.Responser;
    }

    async login(data)
    {
        try{
            //Find family
            let family = await this.FamiliesModel.findByUsername(data.username);
            if (!family) {
                this.Responser.setError(2, 'Login error 2.');
                return this.Responser;
            }

            //Verify password hash
            let compare = Cryptor.comparePassword(data.password, family.password);
            if (!compare) {
                this.Responser.setError(3, 'Login error 3.');
                return this.Responser;
            }

            let usersModel = new UsersModel();
            let users = await usersModel.findByFamily(family.id);

            this.Responser.setSuccess({
                token: Cryptor.generateFamilyToken(family.id),
                users: users
            });
        }catch (e) {
            _debugger.error(e);
            this.Responser.setError(1, e);
        }

        return this.Responser;
    }
}