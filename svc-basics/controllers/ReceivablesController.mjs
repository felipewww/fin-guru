import Controller from '../core/Controller'

export default class ReceivablesController extends Controller
{
    constructor(mainRouter)
    {
        super();
        this.setRoutes(mainRouter);
    }

    setRoutes(mainRouter)
    {
        let receivablesRouter = mainRouter;
        mainRouter.use('/api/receivables', receivablesRouter);

        receivablesRouter.route('/')
            .put(function (req, res, next) {
                // console.log(req.headers);
                console.log("req.body".bgGreen);
                console.log("Criar um recebível para: ");
                console.log(req.body.userId);
                console.log(req.body.familyId);
                res.statusCode = 200;
                next({
                    status: 'receivables ok!'
                })
            })
            .get(function (req, res, next) {
                console.log("req.body".bgGreen);
                console.log("Pegar todos os recebíveis de: ");
                console.log(req.body.userId);
                console.log(req.body.familyId);
                res.statusCode = 200;
                next({
                    status: 'Listar os recebiveis'
                })
            });

        receivablesRouter.route('/:id')
            .get(function (req, res, next) {
                res.statusCode = 200;
                next({
                    status: 'find by id'
                })
            });
    }
}