const AuthenticationController = require('./controllers/AuthenticationController')
const StorageController = require('./controllers/StorageController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: 'Healthy'
        })
    })

    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.authenticate)
    app.get('/notes', StorageController.getAll)
    app.get('/note', StorageController.get)
    app.post('/note', StorageController.post)
    // app.put('/note', AuthenticationController.authenticate)
}

