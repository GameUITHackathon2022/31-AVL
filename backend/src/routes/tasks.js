const express = require("express")

const router = express.Router();

const tasksController = require('../app/controllers/taskController');

router.get("/", tasksController.getAll)
router.put("/", tasksController.updateTask)



module.exports = router