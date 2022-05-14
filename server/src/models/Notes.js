'use strict';

module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('Notes', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        url: DataTypes.TEXT,
    })
    return Notes
}