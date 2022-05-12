const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        })

        const {error, value} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failes to match the following rules:
                        1. It must contain ONLY the following characters: lower case, upper case, numerics
                        2. It must be from 8 to 32 characters`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                    break

            }

        } else {
            next()
        }
    }
}