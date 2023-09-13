let usuarios = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
    },
    {
        id: 2,
        username: 'root',
        password: 'root',
    }
]

const generarId = ()=>{
    const ids = usuarios.map((e)=> e.id)
    return Math.max(... ids) + 1    
}


const getAllUsers = (req , res) =>{
    res.json(usuarios)

}

const getUseById = (req , res) =>{
    const  id = req.params.id
    const usuario = usuarios.find((elemento)=>elemento.id == id)
    res.json(usuario)
}

const createUser = (req , res) =>{
    const { username , password} = req.body
    const nuevaId = generarId()

    const nuevoUsuario = {
        id: nuevaId,
        username: username,
        password: password,
    }
    usuarios.push(nuevoUsuario)

   res.send("Usuario creado correctamente")
}


const updateUser = (req , res) =>{

}

const deleteUser = (req , res) =>{

}


module.exports = {
    getAllUsers,
    getUseById,
    createUser,
    updateUser,
    deleteUser,
}


