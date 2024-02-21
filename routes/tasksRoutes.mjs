import express from 'express';
import TaskController from '../controllers/TaskController.mjs';


const router = express.Router()

//Rotas
router.get('/', TaskController.showTasks)
router.get('/add', TaskController.createTask)

export default router;