import Task from "../models/Task.mjs";


export default class TaskController{
    static createTask(req, res) {
        res.render('tasks/create')
    }

    // Criando tarefa [POST]
    static async createTaskSave(req, res) {
        const task = {
            // pegando dados do HTML
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        // Salvando tarefa
        await Task.create(task)

        res.redirect('/tasks')
    }

    // Resgatando tarefas do DB [GET] 
    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }
}
