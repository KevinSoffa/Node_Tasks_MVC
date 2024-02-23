import { where } from "sequelize";
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

    // Deletando tarefa [DELETE]
    static async removeTask(req, res) {
        // capturando id
        const id = req.body.id
        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')
    }

    // Atualizando tarefa [UPDATE]
    static async updateTask(req, res) {
        const id = req.params.id

        // Resgantando Task do DB
        const task = await Task.findOne({ where: {id: id}, raw: true })

        res.render('tasks/edit', { task })
    }

    static async updateTaskPost(req, res) {
        const id = req.body.id

        // Criando obj para salvar no banco de dados
        const task = {
            title: req.body.title,
            description: req.body.description,
        }

        await Task.update(task, { where: { id:id } })
        res.redirect('/tasks')
    }

    // Atualizando status da tarefa [UPDATE]
    static async toggleTaskStatus(req, res) {
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, { where: {id : id} })
        res.redirect('/tasks')
    }
}
