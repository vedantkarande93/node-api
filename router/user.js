// This is used for creating sub routes for the user
const router = require('express').Router();
// Main logic is written in the controller file
const userController = require('./../Controller/userController')

// endpoint: user/
// method: GET
router.get('/', userController.get)

// endpoint: user/
// method: POST
router.post('/', userController.create)

// endpoint: user/1
// id = 1
// method: PATCH
router.patch('/:id', userController.update)

// endpoint: user/1
// id = 1
// method: DELETE
router.delete('/:id', userController.delete)

module.exports = router