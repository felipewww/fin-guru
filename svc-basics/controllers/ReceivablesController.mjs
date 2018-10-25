import Controller from '../core/Controller'
import ReceivablesModel from '../models/ReceivablesModel';

export default class ReceivablesController extends Controller
{
    constructor(mainRouter, thisRouter)
    {
        super();
        this.setRoutes(mainRouter, thisRouter);
    }

    setRoutes(mainRouter, thisRouter)
    {
        let receivablesRouter = thisRouter;
        mainRouter.use('/api/receivables', receivablesRouter);

        receivablesRouter.route('/')
            .post(this.create)
            .get(this.findAllByUser)
            .delete(this.deleteById);

        receivablesRouter.route('/:id')
            .get(this.findById);
    }

    create(req, res, next)
    {
        let receivablesModel = new ReceivablesModel();
        receivablesModel.model.create({
            description: req.body.description,
            day: req.body.day,
            amount: req.body.amount,
            user_id: req.body.userId,
        })
        .then(result => {
            res.statusCode = 200;
            next({
                status: true,
                id: result.id
            })
        })
        .catch(err => {
            res.statusCode = 500;
            next({
                status: false,
                error: true,
                msg: 'query error'
            })
        });
    }

    findAllByUser(req, res, next)
    {
        let receivablesModel = new ReceivablesModel();
        receivablesModel.model.findAll({
            where: {
                user_id: req.body.userId
            }
        })
            .then(result => {
                res.statusCode = 200;
                next({
                    status: true,
                    result: result
                })
            })
            .catch(err => {
                res.statusCode = 500;
                next({
                    status: false,
                    error: true,
                    msg: 'query error'
                })
            });
    }

    findById(req, res, next)
    {
        let receivablesModel = new ReceivablesModel();

        receivablesModel.model.find({
            where: {
                id: parseInt(req.params.id),
                user_id: parseInt(req.body.userId)
            }
        })
            .then(result => {
                res.statusCode = 200;
                next({
                    status: true,
                    result: result
                })
            })
            .catch(err => {
                res.statusCode = 500;
                next({
                    status: false,
                    error: true,
                    msg: 'query error'
                })
            });
    }

    deleteById(req, res, next)
    {
        let receivablesModel = new ReceivablesModel();
        receivablesModel.model.destroy({
            where: {
                id: req.body.ids,
                user_id: req.body.userId
            }
        })
            .then(result => {
                res.statusCode = 200;
                next({
                    status: true,
                    result: result
                })
            })
            .catch(err => {
                res.statusCode = 500;
                next({
                    status: false,
                    error: true,
                    msg: 'query error'
                })
            });
    }
}