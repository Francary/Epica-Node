const { sequelize} = require ('../database')
const { DataTypes } = require ('sequelize')

const tasksModel = sequelize.define('tasks',{
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
})

module.exports =  {
    tasksModel
}