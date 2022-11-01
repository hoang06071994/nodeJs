/* mã hóa password:
    b1: npm i bcrypt
    b1: const bcrypt = require('bcrypt')
    b3: const password = bcrypt.hash(rea.body.password)
    => mã hóa password 
    b4: const checkPassword = await bcrypt.compare(req.body.passwprd, password )
    => so sánh password đã mã hóa được lưu trong data với password user nhập


*/ 
/* cookies: lưu trữ data đến một thời điểm nhất định.
    res.cookie('appuser', checkUser._id, { expires: new Date(Date.now() + 900000), httpOnly: true })


*/ 
/* session Storage: chỉ lưu data trong phiên làm việc , khi thoat trang hoặc tắt trình duyệt
    => clear data
*/ 
/* local Storage : lưu trữ vĩnh viễn , chỉ khi nào xóa mới mất
*/ 
/* role: phân quyền 
    type: String || Number
    default: giá trị mặc định nếu không sét lại giá trị 
    b1: sửa data base (thêm role)
    b2: 
*/ 
/* jsonwebtoken: mã hóa 
    b1: npm i jsonwebtoken
*/ 
/* link : https://www.npmjs.com/package/dotenv
*/ 