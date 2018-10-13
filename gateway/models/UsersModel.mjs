import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class UsersModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'users',
            {
                name: {
                    type: Sequelize.STRING
                },
                lastname: {
                    type: Sequelize.STRING
                },
                nickname: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
                family_id: {
                    type: Sequelize.INTEGER
                }
            },
            {
                createdAt   : 'created_at',
                updatedAt   : 'updated_at',
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(UsersModel.settings());
    }

    findById(id, familyId)
    {
        return this.model.findOne({
            where: {
                id: id,
                family_id: familyId
            }
        })
    }

    findByFamily(familyId)
    {
        this.model.attributes.exclude = ['password'];

        return this.model.findAll({
            where: {
                family_id: familyId
            },
            attributes: ['id', 'name', 'lastname', 'nickname']
        })
    }
}