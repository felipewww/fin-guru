// global.DatabaseSettings = require('./DatabaseSettings');
import Sequelize from 'sequelize';

export default class Model {

    constructor(){
        const Op = Sequelize.Op;
        const operatorsAliases = {
            $eq: Op.eq,
            $ne: Op.ne,
            $gte: Op.gte,
            $gt: Op.gt,
            $lte: Op.lte,
            $lt: Op.lt,
            $not: Op.not,
            $in: Op.in,
            $notIn: Op.notIn,
            $is: Op.is,
            $like: Op.like,
            $notLike: Op.notLike,
            $iLike: Op.iLike,
            $notILike: Op.notILike,
            $regexp: Op.regexp,
            $notRegexp: Op.notRegexp,
            $iRegexp: Op.iRegexp,
            $notIRegexp: Op.notIRegexp,
            $between: Op.between,
            $notBetween: Op.notBetween,
            $overlap: Op.overlap,
            $contains: Op.contains,
            $contained: Op.contained,
            $adjacent: Op.adjacent,
            $strictLeft: Op.strictLeft,
            $strictRight: Op.strictRight,
            $noExtendRight: Op.noExtendRight,
            $noExtendLeft: Op.noExtendLeft,
            $and: Op.and,
            $or: Op.or,
            $any: Op.any,
            $all: Op.all,
            $values: Op.values,
            $col: Op.col
        };

        let options = {

            host: process.env.DB_HOST,
            dialect: 'mysql',
            operatorsAliases: operatorsAliases,
            // logging: true,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        };

        if (process.env.DB_DEBUG_QUERY === 'false') {
            options.logging = false;
        }


        this.DB = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASS,
            options
        );

        // this.testConnection();
    }

    Definer(obj)
    {
        return this.DB.define( obj.name, obj.attributes, obj.options );
    }

    testConnection()
    {
        this.DB.authenticate()
            .then(() => {
                this.DB.close();
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}