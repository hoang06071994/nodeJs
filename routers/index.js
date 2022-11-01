const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const path = require('path');
const { checkLogin, checkAdmin } = require('../middleWare/auth');
const { UserModel } = require('../model/model');
router.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/home.html'));
});

router.get('/sing-up', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/singUp/singUp.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/login/login.html'));
});
router.get('/change-password', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/changePass/changepass.html'));
});

router.get('/cart', (req, res) => {
   res.sendFile(path.join(__dirname, '../view/cart/cart.html')); 
});

router.get('/userPage', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/user/user.html'));
});
router.use(checkLogin);
/* router.use(checkLogin);
    dùng cho toàn bộ những code bên dưới middleware ,
*/ 
router.get('/private', (req, res) => {
    // dùng cho một code có middleware
    res.sendFile(path.join(__dirname, '../view/private/private.html'));
});

router.use(checkAdmin);

router.get('/daskboard', (req, res) => { 
    res.sendFile(path.join(__dirname, '../view/daskboard/daskboard.html'))
})
module.exports = router