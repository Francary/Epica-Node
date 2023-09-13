const {tasksModel} = require ('../models/Task')

async function createTask ( req , res) {
    const { title , done} = req.body
    await tasksModel.create({title, done})

    res.send('created task')
}

async function listTask ( req , res) {
    const allTasks = await tasksModel.findAll()
    res.json(allTasks)
}

async function findTask ( req , res) {
    const id = req.params.id
    const task = await tasksModel.findByPk(id)

    if (task == null) {
        return res.send ('no se encontro tarea con esa id')
    }

    res.json(task)

}

async function updateTask ( req , res) {
    const id = req.params.id
    const { title , done} = req.body

    await tasksModel.update({ title , done} ,{
        where: {
            id: id
         }
    })
    res.send('update task')
}

async function deleteTask ( req , res) {
    const id = req.params.id
    await tasksModel.destroy({
         where: {
            id: id
         }
    })
    res.send('delete task')
}

module.exports={
    createTask,
    listTask,
    findTask,
    updateTask,
    deleteTask,

}