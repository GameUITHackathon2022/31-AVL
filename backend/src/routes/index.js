const authRouter = require("./auth")
const usersRouter = require("./users")
const tasksRouter = require("./tasks")


function route(app) {
    // app.use(app.router);
    app.use('/api/auth', authRouter)
    app.use('/api/users', usersRouter)
    app.use('/api/tasks', tasksRouter)
}

module.exports = route 