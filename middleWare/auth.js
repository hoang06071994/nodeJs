const { UserModel } = require("../model/model");
const jwt = require('jsonwebtoken')
const {JWT_PASSWORD} = process.env
exports.checkLogin = async (req, res, next) => {
    const userCookie = req.cookies['appuser'];
    try {
        if (!userCookie) return res.redirect('/login');
    
        let data = jwt.verify(userCookie, JWT_PASSWORD);    
        // dịch từ token => data chứa thông tin user
        if (!data) return res.redirect('/login');
    
        req.use = data.checkUser;
        next ();
    } catch (error) {
        res.redirect('/login');
        // nếu không tìm được cookies => login
    }
};
/* kiểm tra cookies : 
    nếu không có => login
    có cookies => kiểm tra cookies 
        => đúng : cho next() : thực hiện chức năng tiếp theo
        => sai: về trang login
*/ 
exports.checkAdmin =  (req, res, next) => {
    console.log(req.use.role)
    if (req.use.role !== 'admin') return res.redirect('/login');
    next();
};
/* phân quyền
    => admin :  có thể vào trang admin
    => user: về trang home

*/