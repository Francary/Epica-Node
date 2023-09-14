const {Sequelize} = require ("sequelize");

const sequelize = new Sequelize('base_datos_notas', 'root','',{
    host: "localhost",
    dialect: "mysql",
})


module.exports = {sequelize};