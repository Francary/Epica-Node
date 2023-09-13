const express = require('express')
const cors = require ('cors')
const morgan = require ('morgan')

const {sequelize} =  require ('./database')
const app = express()
const puerto = 3000 

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/task',require ('./routes/task.routes'))

// Configuracion 
app.listen( puerto, () => {
    sequelize.sync()
        .then(()=> console.log("Conectado a la Base de Datos"))
        .catch(err => console.log(err))
    console.log(`Servidor de Espress en Puerto ${puerto}`) 
});