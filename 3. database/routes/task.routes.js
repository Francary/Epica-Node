const {Router } = require ('express')
const {
    createTask,
    listTask,
    findTask,
    updateTask,
    deleteTask,

} = require ('../controllers/task.controllers')

const router = Router()

router.get('/', listTask)
router.get('/:id',findTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router