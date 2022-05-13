const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Error! This email accout is already in use'
            })
        }
    },
    async authenticate (req, res) {
        try {
            console.log(req.body)
            const user = await User.findOne({where: req.body})
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Error! User not found'
            })
        }
    }
}