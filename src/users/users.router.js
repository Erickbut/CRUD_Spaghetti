const router = require('express').Router()

const userServices = require('./users.services')

//localhost:9000/api/v1/users
// localhost:9000/api/v1/users/:id

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postUser)

router.get('/users/:id', userServices.getUserById)
router.patch('/users/:id', userServices.patchUser)
router.delete('/users/:id', userServices.deleteUser)


module.exports = router