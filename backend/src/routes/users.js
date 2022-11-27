const express = require("express")

const router = express.Router();

const usersController = require('../app/controllers/UserController');
const VerifyToken = require("../utils/verifyToken");

//UPDATE
// router.put("/:id", usersController.update)
//DELETE



//SCORE
router.get("/scores", usersController.showScore)
router.put("/scores", usersController.updateScore)


//STORAGE
router.put("/tasks", usersController.updateTask)
router.get("/tasks", usersController.showTask)




module.exports = router