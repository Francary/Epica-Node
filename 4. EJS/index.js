const e = require("cors");
const cors = require("cors");
const express = require ("express");
const morgan = require ("morgan");

const app = express();
const puerto = 3850 ;
// middelewares 

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static("public"))

app.set("view engine", "ejs");

const notas = [
    { 
        titulo : "pirmer nota",
        contenido: "Contenido 1"
    },
    { 
        titulo : "segundo nota",
        contenido: "Contenido 2"
    },
    { 
        titulo : "tercero nota",
        contenido: "Contenido 3"
    },
    { 
        titulo : "cuarto nota",
        contenido: "Contenido 4"
    }
]

// routes

 app.get("/", (req , res) =>{
     res.render("index", );
 })

 app.get('/mis-notas',(req ,res) =>
 {
    res.render("mis-notas", {title : " Pagina Pincipal", notas:notas})
 })

//configuracion

app.listen( puerto, () => {
    console.log(`Servidor de Espress en Puerto ${puerto}`) });