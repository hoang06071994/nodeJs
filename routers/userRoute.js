const express = require('express');
const { creteaNewUser, changeUserAge, changePassword, getUser, login } = require('../controllers/userControler');
const router = express.Router()
const {UserModel} = require('../model/model')
router.get('/', (req, res) => {
    res.json('user route')
})

router.get('/getUser', getUser)

router.post('/create-user', creteaNewUser)

router.patch('/change-age', changeUserAge)

router.post('/change-password', changePassword)

router.post('/login', login)

module.exports = router