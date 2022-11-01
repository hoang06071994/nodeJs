const express = require('express');
const { createCart, updateCart, deleteCart, getCart } = require('../controllers/cartControler');
const router = express.Router()

router.get('/', (req, res) => {
    res.json('cart route')
})
router.get('/getAllCart', getCart)

router.post('/createCart', createCart)

router.patch('/updateCart', updateCart)

router.delete('/deleteCart', deleteCart)

module.exports = router