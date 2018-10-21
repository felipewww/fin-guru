import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class ReceivablesModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'receivables',
            {
                description: {
                    type: Sequelize.STRING
                },
                day: {
                    type: Sequelize.INTEGER
                },
                amount: {
                    type: Sequelize.DECIMAL
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
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
        this.model = this.Definer(ReceivablesModel.settings());
    }
}