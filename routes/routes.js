const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/os', controller.os_details)
router.get('/cpu', controller.cpu_details)
router.get('/memory', controller.memory_details)

router.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})

module.exports = router