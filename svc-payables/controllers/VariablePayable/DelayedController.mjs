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
        this.Router.route('/')
            .put(this.create)
            .get(this.findAllByUser)
            .delete(this.deleteById);

        this.Router.route('/:id')
            .get(this.findById);
    }

    create(req, res, next)
    {
        try{
            let Model = new PayableDelayedModel();

            Model.model.create({
                final_numbers: req.body.final_numbers,
                due_date: req.body.due_date,
                user_id: req.body.userId,
                card_flag_id: req.body.card_flag_id,
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
        let Model = new PayableDelayedModel();
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
        let Model = new PayableDelayedModel();

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
        let Model = new PayableDelayedModel();
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