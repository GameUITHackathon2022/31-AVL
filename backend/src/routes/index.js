const authRouter = require("./auth")
const usersRouter = require("./users")

function route(app) {
    // app.use(app.router);
    app.use('/api/auth', authRouter)
    app.use('/api/users', usersRouter)
}

module.exports = route 