import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class FamiliesModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'families',
            {
                username: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
            },
            {
                timestamps: false
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(FamiliesModel.settings());
    }

    findById(id)
    {
        return this.model.findAll({
            where: {
                id: id
            }
        })
    }
}