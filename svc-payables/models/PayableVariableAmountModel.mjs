import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class PayableVariableAmountModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'payable_variable_amount',
            {
                description: {
                    type: Sequelize.STRING
                },
                due_date: {
                    type: Sequelize.INTEGER
                },
                amount: {
                    type: Sequelize.DECIMAL
                },
                category_id: {
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
                installments_total: {
                    type: Sequelize.INTEGER
                },
                installments_current: {
                    type: Sequelize.INTEGER
                },
                status: {
                    type: Sequelize.STRING
                },
                //planned, unplanned
                type: {
                    type: Sequelize.STRING
                },
            },
            {
                createdAt   : 'created_at',
                updatedAt   : 'updated_at',
                tableName: 'payable_variable_amount',
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(PayableVariableAmountModel.settings());
    }
}