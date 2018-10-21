import Controller from '../core/Controller'
import CategoriesModel from '../models/CategoriesModel';

export default class ReceivablesController extends Controller
{
    constructor(mainRouter, thisRouter)
    {
        super();
        this.setRoutes(mainRouter, thisRouter);
    }

    setRoutes(mainRouter, thisRouter)
    {
        let categoriesRouter = thisRouter;
        mainRouter.use('/api/categories', categoriesRouter);

        categoriesRouter.route('/')
            .put(this.create)
            .get(this.findAllByUser)
            .delete(this.deleteById);

        categoriesRouter.route('/:id')
            .get(this.findById);
    }

    create(req, res, next)
    {
        let categoriesModel = new CategoriesModel();

        categoriesModel.model.create({
            name: req.body.name,
            text_color: req.body.text_color,
            user_id: req.body.userId,
            family_id: req.body.familyId,
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
    }

    findAllByUser(req, res, next)
    {
        let categoriesModel = new CategoriesModel();
        categoriesModel.model.findAll({
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
        let categoriesModel = new CategoriesModel();

        categoriesModel.model.find({
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
        let categoriesModel = new CategoriesModel();
        categoriesModel.model.destroy({
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