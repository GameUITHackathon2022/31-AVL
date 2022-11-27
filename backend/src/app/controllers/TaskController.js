const Task = require('../models/Task')
class TasksController {
    //UPDATE
    getAll(req,res,next) {
        Task.find({})
            .then(data => {
                res.status(200).json(data)           
            })
            .catch(next)
    } 
    updateTask(req,res,next) {
        const data = req.body
        const task = new Task(data)
        task.save()
            .then(() => res.status(200).json(data))
            .catch(next)  
    }
    

}
module.exports = new TasksController()