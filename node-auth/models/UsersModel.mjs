import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class FamiliesModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'families',
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
                // timestamps: false
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
        return this.model.findOne({
            where: {
                id: id
            }
        })
    }
}