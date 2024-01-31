const express = require('express')
const router = express.Router()
const homeworkController = require('../controllers/homework-controller')
const authenticate = require('../middlewares/authenticate')

router.post('/', authenticate, homeworkController.createHomework)
router.get('/', authenticate, homeworkController.gelByTeacher )
router.put('/:id', authenticate, homeworkController.update)
router.delete('/:id', authenticate, homeworkController.delete)

module.exports = router