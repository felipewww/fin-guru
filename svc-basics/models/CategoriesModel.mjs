import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class CategoriesModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'categories',
            {
                name: {
                    type: Sequelize.STRING
                },
                text_color: {
                    type: Sequelize.STRING
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
                family_id: {
                    type: Sequelize.INTEGER
                },
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
        this.model = this.Definer(CategoriesModel.settings());
    }
}