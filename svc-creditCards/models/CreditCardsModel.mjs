import DatabaseSettings from '../core/db/DatabaseSettings';
import Model from '../core/db/Model';
import Sequelize from 'sequelize';

export default class CreditCardsModel extends Model {
    static settings(){
        return new DatabaseSettings(
            'credit_cards',
            {
                final_numbers: {
                    type: Sequelize.STRING
                },
                due_date: {
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
                card_flag_id: {
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
        this.model = this.Definer(CreditCardsModel.settings());
    }
}