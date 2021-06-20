const sequelize = require('../db')
const {INTEGER, STRING, DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: STRING , unique: true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"},
})

const costsList = sequelize.define('costsList', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false}
})

const costsString = sequelize.define('costsString', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: STRING, unique: true},
    price: {type: INTEGER, allowNull: false},
    date: {type: DataTypes.DATE}

})

User.hasMany(costsList)
costsList.belongsTo(User)

costsList.hasMany(costsString)
costsString.belongsTo(costsList)

module.exports = {
    User, costsList, costsString
}

