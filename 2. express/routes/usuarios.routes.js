const { Router} = require ('express')
const {
    getAllUsers,
    getUseById,
    createUser,
    updateUser,
    deleteUser,
} = require ('../controllers/usuarios.controllers')

const router = Router()

router.get('/', getAllUsers)
router.get('/:id',getUseById)
router.post('/', createUser)
router.put('/:id' , updateUser)
router.delete('/:id',deleteUser)


module.exports = router