let contador = 0;
let leyenda = " Contador de Clicks : "
const controlador = (request , response) =>{
    response.status(200).send( `${leyenda} ${contador}`)
}

const incrementar = (request , response) =>{
    contador++
    response.status(200).send( `${leyenda} ${contador}`)
}

const disminuir = (request , response) =>{
    contador--
    response.status(200).send( `${leyenda} ${contador}`)
}

module.exports = {controlador , incrementar , disminuir}