import PayableVariableAmountModel from '../../models/PayableVariableAmountModel';

export default class VariableAmountController
{
    constructor(mainRouter, thisRouter)
    {
        this.Router = thisRouter;
        mainRouter.use('/api/payables/variable/variableAmount', this.Router);

        this.setRoutes();
    }

    setRoutes()
    {
        //-[ ] Os serviços de VariablePayable (contas variáveis ) não terá rotas comuns, pois esses valores são gerados após importação de fatura ou fechamento de período
    }
}