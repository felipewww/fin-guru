import FixedpayableVariableAmountModel from '../../models/FixedpayableVariableAmountModel';

export default class VariableAmountController
{
    constructor(mainRouter, thisRouter)
    {
        this.Router = thisRouter;
        mainRouter.use('/api/payables/fixed/variableAmount', this.Router);

        this.setRoutes();
    }

    setRoutes()
    {
        this.Router.route('/')
            .post(this.create)
            .get(this.findAllByUser)
            .delete(this.deleteById);

        this.Router.route('/:id')
            .get(this.findById);
    }

    create(req, res, next)
    {
        try{
            let Model = new FixedpayableVariableAmountModel();

            Model.model.create({
                description: req.body.description,
                due_date: req.body.due_date,
                amount_planned: req.body.amount_planned,
                amount_paid: req.body.amount_paid,
                category_id: req.body.category_id,
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
                        msg: err
                    })
                });
        }catch (e) {
            res.statusCode = 200;
            next({
                status: false,
                error: true,
                msg: e
            })
        }
    }

    findAllByUser(req, res, next)
    {
        let Model = new FixedpayableVariableAmountModel();
        Model.model.findAll({
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
        let Model = new FixedpayableVariableAmountModel();

        Model.model.find({
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
        let Model = new FixedpayableVariableAmountModel();
        Model.model.destroy({
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