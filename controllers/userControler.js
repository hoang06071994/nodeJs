const { UserModel } = require("../model/model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_PASSWORD, JWT_EXPRIED_IN} = process.env;

/* chức năng */ 
exports.creteaNewUser = async (req, res) => {
    try {
        const user = await UserModel.findOne( {username: req.body.username} )
        if (user) {
            res.status(200).json( {mess: 'username allready'} )
        } else {
            const password = await bcrypt.hash(req.body.password, 10)
            const data = await UserModel.create( {username: req.body.username, age: req.body.age, password: password} )
            res.status(200).json( {mess: 'success', data} )
            console.log(data)
        }
    } catch (error) {
        res.status(500).json( {mess: 'server err', error} )
        console.log(error)
    }
};

exports.changeUserAge = async (req, res) => {
    try {
        const user = await UserModel.findOne( {username: req.body.username} ) 
        if (user) {
            const data = await UserModel.updateOne( {username: req.body.username}, {age: req.body.age} )
            res.status(200).json( {mess: 'success', data} )
        } else {
            res.status(200).json( {mess: 'username undefined'} )
        }
    } catch (error) {
        res.status(500).json( {mess: 'sserver err', error} )
    }
};

exports.changePassword = async (req, res) => {
    try {
        const data = await UserModel.updateOne(
            {username: req.body.username, password: req.body.password},
            {password: req.body.newPassword}
        )
        if (data.modifiedCount == 0) {
            res.status(200).json( {mess: 'check agian'} )
        } else {
            res.status(200).json({mess: 'seccess', data})
        }
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
};

exports.getUser = async (req, res) => {
    try {
        const userData = await UserModel.find()
        res.status(200).json({mess: 'seccess', userData})
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}
exports.login = async (req, res) => {
    try {
        const checkUser = await UserModel.findOne({username: req.body.username});
        if (!checkUser) return res.status(400).json({mess: 'check user'});

        const checkPassword = await bcrypt.compare(req.body.password, checkUser.password);
        if (!checkPassword) return res.status(400).json({mess: 'check password'});
        delete checkUser._doc.password
        // xóa mật khẩu khỏi checkUser
        const token = jwt.sign({checkUser}, JWT_PASSWORD, {expiresIn: JWT_EXPRIED_IN})
        // tạo cookie : 
        res.cookie('appuser', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
        // lưu token vào cookies
        res.status(200).json({mess: 'seccess'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mess: 'server error'})
    }
}