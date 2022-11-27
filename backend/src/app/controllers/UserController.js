const User = require('../models/User')
class UsersController {
    //UPDATE
    async update(req,res,next) {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body }, { new: true})
            res.status(200).json(updateUser)
        } catch(err) {
            next(err)
        }
    }
    //DELETE
    async delete(req,res,next) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User deteted")
        } catch(err) {
            next(err)
        }
    }
    async createSubject(req,res,next) {        
        try {
            const updateUser = await User.findOneAndUpdate({ email :req.query.email }, { subjects: req.body }, { new: true })
            res.status(200).json(updateUser)
        } catch(err) {
            next(err)
        }
    }
   
    async showSubjects(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.subjects)
        } catch(err) {
            next(err)
        }
    }
     //Update favourite
    async updateFavourite(req,res,next) {        
        try {
            const updateFavourite = await User.findOneAndUpdate({ email :req.query.email }, { favourite: req.body }, { new: true})
            res.status(200).json(updateFavourite)
        } catch(err) {
            next(err)
        }
    }
    async showTask(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.tasks)
        } catch(err) {
            next(err)
        }
    }

    

    async updateTask(req,res,next) {        
        try {
            const updateTask = await User.findOneAndUpdate({ email :req.query.email }, { $push: { tasks: req.body }}, { new: true })
            res.status(200).json(updateTask)
        } catch(err) {
            next(err)
        }
    }
    
    async updateNotifyAll(req,res,next) {        
        try {
            const updateNotify = await User.updateMany({}, { $push: { notification: req.body }}, { new: true })
            res.status(200).json(updateNotify)
        } catch(err) {
            next(err)
        }
    }

    async updateScore(req,res,next) {        
        try {
            const updateScore = await User.findOneAndUpdate({ email: req.query.email }, { $push: { scores: req.body }}, { new: true })
            res.status(200).json(updateScore)
        } catch(err) {
            next(err)
        }
    }

    async showScore(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.scores)
        } catch(err) {
            next(err)
        }
    }
    async deleteNotifyAll(req, res, next) {
        try {
            const userData = await User.updateMany({ email : req.query.email },{ $unset: { notification: "" } })
            res.status(200).json("Deleted Notify")
        } catch(err) {
            next(err)
        }
    }

    async deleteSubjects(req,res,next) {
        try {
            await User.findOneAndDelete(req.params.id)
            res.status(200).json("User deteted")
        } catch(err) {
            next(err)
        }
    }
    
    show(req, res, next) {
        User.findById(req.body.id)
            .then(User => {
                res.status(200).json(User)             
            })
            .catch(next)
    }
}
module.exports = new UsersController()