/* link you tube: 
*/ 
/* b1: tạo ra các router */ 
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.json('user route')
})



/* quy ước chức năng:
get: truy vấn data,
post: thêm mới data,
put: ghi đè data,
patch: update data (sửa một phần)
delete: xóa data
*/ 
/* quy ước đường dẫn
get: 
=> xem toàn bộ data: /tabe (tên bảng data)
=> xem data cụ thể: /tabe/:id
post:
=> thêm 1 data: /tabe
put:
=> chỉnh sửa 1 data: /tabe/:id
patch: 
=> chỉnh sửa 1 data: /tabe/:id
delete:
=> xóa 1 data: /tabe/:id
*/ 


module.exports = router


/*
routers: định tuyến, đường dẫn,
controler: sử lý logic, chức năng,
view: giao diện
*/ 
/*
async: khiến function trả về promise
await: khiến code bên dưới phải đợi code bên trên


*/ 