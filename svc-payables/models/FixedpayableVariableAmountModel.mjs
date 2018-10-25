import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class FixedpayableVariableAmountModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'fixedpayable_variable_amount',
            {
                description: {
                    type: Sequelize.STRING
                },
                due_date: {
                    type: Sequelize.INTEGER
                },
                amount_planned: {
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
                }
            },
            {
                createdAt   : 'created_at',
                updatedAt   : 'updated_at',
                tableName: 'fixedpayable_variable_amount',
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(FixedpayableVariableAmountModel.settings());
    }
}