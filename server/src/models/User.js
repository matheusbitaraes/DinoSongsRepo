'use strict';
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

async function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
    }
    const hash = await bcrypt.hash(user.password, SALT_FACTOR)
    return user.setDataValue('password', hash)
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: hashPassword,
        }
    }
    )

    User.prototype.comparePassword = function (candidatePwd) {
        // console.log(`pwd: ${candidatePwd}--, hash: ${this.password}--`)
        return bcrypt.compare(candidatePwd, this.password)
    }

    return User
}