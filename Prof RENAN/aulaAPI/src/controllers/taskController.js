const taskService = require('../services/taskService')

const getAll = (req, res) =>{
    const task = taskService.getAll()
    res.json(task)
}

const getById = (req, res, next) => {
    try{
        const id = passeInt(req.params.id)
        const task = taskService.getById(id)
        res.json(task)
    } catch(error){
        next(error)
    }
}

module.exposrt = {getAll, getById}