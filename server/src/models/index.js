'use strict';

const fs = require('fs')
const path = require('path')
const {Sequelize, DataTypes} = require('sequelize')
const config = require('../config/config')
const db = {}

// const sequelize = new Sequelize(
//     config.db.database,
//     config.db.user,
//     config.db.password,
//     config.db.options,
// )

const sequelize = new Sequelize(config.db.url)
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        console.log(path.join(__dirname, file))
        const model = require(path.join(__dirname, file))(sequelize, DataTypes)
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db