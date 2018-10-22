import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class PayableDelayedModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'payable_delayed',
            {
                description: {
                    type: Sequelize.STRING
                },
                due_date: {
                    type: Sequelize.INTEGER
                },
                due_month: {
                    type: Sequelize.INTEGER
                },
                amount: {
                    type: Sequelize.DECIMAL
                },
                amount_paid: {
                    type: Sequelize.DECIMAL
                },
                category_id: {
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
                status: {
                    type: Sequelize.STRING
                }
            },
            {
                createdAt   : 'created_at',
                updatedAt   : 'updated_at',
                tableName: 'payable_delayed',
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(PayableDelayedModel.settings());
    }
}