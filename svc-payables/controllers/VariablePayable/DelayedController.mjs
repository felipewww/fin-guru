import PayableDelayedModel from '../../models/PayableDelayedModel';

export default class DelayedController
{
    constructor(mainRouter, thisRouter)
    {
        this.Router = thisRouter;
        mainRouter.use('/api/payables/variable/delayed', this.Router);

        this.setRoutes();
    }

    setRoutes()
    {
        //-[ ] Os serviços de VariablePayable (contas variáveis ) não terá rotas comuns, pois esses valores são gerados após importação de fatura ou fechamento de período
    }
}