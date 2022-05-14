const {User, Notes} = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const userId = req.query.id
            if(!userId){
                res.status(403).send({
                    error: `Missing 'id' query parameter`
                })
            } 
            const notes = await Notes.findAll({where: { UserId:userId }, limit: 1000 })
            res.send(notes)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `Error Getting notes!`
            })
        }
    },
    async post (req, res) {
        try {
            const id = req.query.id
            if(!id){
                res.status(403).send({
                    error: `Missing 'id' query parameter`
                })
            } 
            const note = await Notes.create({UserId:id, ...req.body})
            res.status(200).send(note)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `Error Setting note!`
            })
        }
    },
    async get (req, res) {
        try {
            const note = Notes.create(req.body)
            res.send(note)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `Error Getting note!`
            })
        }
    },
    async delete (req, res) {
        try {
            const note = Notes.delete(req.body)
            res.send(note)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `Error Deleting note!`
            })
        }
    },
}