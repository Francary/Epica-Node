const express = require ('express')
const cors = require ('cors')
const morgan = require ('morgan')
const app = express()
const puerto = 4000 


// middleware son funciones que se ejecutan antes de llegar al controlador
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use((require,response, next) =>{
    console.log("Middelware personalizado" , require.url)
    next()
})

// Routes
app.use('/contador' ,require ('./routes/contador.routes'))
app.use('/usuarios' , require('./routes/usuarios.routes'))

app.use((require,response) =>{
    response.send("Error 404 - No Existe la Pagina")
})

// Configuraciones
app.listen( puerto, () => {
    console.log(`Servidor de Espress en Puerto ${puerto}`) });

