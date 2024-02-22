import TaskController from '../controllers/TaskController.mjs';
import express from 'express';


const router = express.Router()

//Rotas
router.get('/', TaskController.showTasks)

//Rota add
router.post('/add', TaskController.createTaskSave)
router.get('/add', TaskController.createTask)

// Rota delete
router.post('/remove', TaskController.removeTask)

export default router;