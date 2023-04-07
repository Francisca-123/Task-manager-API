const taskRouter = require('express').Router()
const {getAllTasks, getTask, createTask, updateTask,deleteTask} = require('../controllers/task')

taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', getTask)
taskRouter.post('/', createTask)
taskRouter.patch('/:id', updateTask)
taskRouter.delete('/:id', deleteTask)

module.exports = taskRouter