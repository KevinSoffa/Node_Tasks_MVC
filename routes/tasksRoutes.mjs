import TaskController from '../controllers/TaskController.mjs';
import express from 'express';


const router = express.Router()

//Rota get
router.get('/', TaskController.showTasks)

//Rota add
router.post('/add', TaskController.createTaskSave)
router.get('/add', TaskController.createTask)

// Rota delete
router.post('/remove', TaskController.removeTask)

// Rota update
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)


export default router;