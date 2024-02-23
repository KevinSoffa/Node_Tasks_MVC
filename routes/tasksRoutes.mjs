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

// Rota update
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)


export default router;