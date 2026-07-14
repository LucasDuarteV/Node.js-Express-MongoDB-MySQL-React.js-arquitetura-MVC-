const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')


const Adress = db.define('Adress', {

    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})


// Relacionamento
Adress.belongsTo(User)


module.exports = Adress