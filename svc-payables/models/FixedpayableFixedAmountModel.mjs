import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class FixedpayableFixedAmountModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'fixedpayable_fixed_amount',
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
                status: {
                    type: Sequelize.STRING
                },
            },
            {
                createdAt   : 'created_at',
                updatedAt   : 'updated_at',
                tableName: 'fixedpayable_fixed_amount',
            }
        );
    };

    constructor()
    {
        super();
        this.model = this.Definer(FixedpayableFixedAmountModel.settings());
    }
}