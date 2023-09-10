const respuesta = document.getElementById('respuesta')
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')

fetch('http://localhost:4000/contador')
    .then(res => res.text())
    .then(data => {
        respuesta.innerHTML = data 
    })


sumar.addEventListener('click', () => {
    fetch('http://localhost:4000/contador/incrementar')
        .then(res => res.text())
        .then(data => {
            respuesta.innerHTML = data 
        })

})

restar.addEventListener('click', () => {
    fetch('http://localhost:4000/contador/disminuir')
        .then(res => res.text())
        .then(data => {
            respuesta.innerHTML = data 
        })

})