const express = require('express')
const taskController = ('./controllers/taskController')

const router = express.Router()

// Rotas de Crud
router.get('/task', taskController.getAll)
router.get('/task/:id', taskController.getById)
// router.post('/task', taskController.create)
// router.put('/task/:id', taskController.update)
// router.delete('/task/:id', taskController.remove)

module.exports = router