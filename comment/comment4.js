/*
Quan hệ :
1, quan hệ 1-1: 1 user chỉ có 1 giỏ hàng <=> 1 giỏ hàng chỉ thuộc về một user.
    B1: tạo quan hệ trong Schema ( ref )
    B2: truy vấn dựa trên quan hệ ( populate() )
    Chú Ý : cần cấp cho Model để có thể truy vấn được
2, quan hệ 1-nhiều : 1 user có  nhiều order
3, quan hệ nhiều-nhiều : 
    Tạo bảng trung gian 
*/
const { CartModel } = require("../model/model");

 
/* truy vấn theo quan hệ */ 
    CartModel.find().populate('userId')
    .then (data => console.log(data))
    .catch (err => console.log(err))
    /* populate() : cho phép bạn tham khảo các tài liệu trong các bộ sưu tập khác.
    Muốn tìm kiếm theo mục nào thì populate theo mục đó : 
    VD: populate('productId') , populate('orderId')
        OrederItemModel.find( {orderId: '6324a856df8558a532461ded'} ).populate('productId')
    có thể populate() nhiều mục một lúc 
    VD: 
        OrederItemModel.find( {orderId: '6324a856df8558a532461ded'} )
        .populate('productId')
        .populate('orderId')
    có thể populate() nhiều tầng 
    VD: 
        OrederItemModel.find( {orderId: '6324a856df8558a532461ded'} )
        .populate('productId')
        .populate({path: 'orderId', populate: {path: 'userId'}})
    */
