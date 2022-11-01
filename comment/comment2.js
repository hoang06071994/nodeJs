/* link youtube : https://www.youtube.com/watch?v=-UK6Ua6BL4w */ 
/* cài đặt mongoose : npm i mongoose */  

const mongoose = require('mongoose');
    /* Gọi mongoose để dùng */ 
    mongoose.connect('mongodb://localhost/my_database');
    /* Liên kết với mongodb */ 
    const UserSchema = mongoose.Schema({
        Username: {
            type: String,
            required: true
            /* Khi thêm 'required: true' =>  Bắt buộc phải có trường này */ 
        },
        age: Number,
        friend: [String],
        adress: {
            number: Number,
            stress: String,
            city: String
        },
        active: Boolean

    }, {collection: 'user'});
    /* link tham khảo : https://mongoosejs.com/docs/guide.html#collection */ 
    /* Tạo kiểu dữ liệu đầu vào ( tạo mẫu bảng)
        id: theo mặc định id sẽ được tự động thêm vào, type: ObjectId (có thể thêm Id riêng)
        Các kiểu dữ liệu : 
            String,
            Number,
            Date,
            Buffer,
            Boolean,
            Array,
            Object,
        collection: tên của bảng (nếu chưa có sẽ tạo mới)    
    */ 
   const UserModel = mongoose.model('user', UserSchema);
    /* Tạo công cụ làm việc với bảng
        user: tên bảng
        UserSchema: mẫu bảng
    */ 
   UserModel.create('nội dung theo mẫu bảng: UserSchema')
   .then(data => console.log(data))
   .catch(err => console.log(err));
    /* UserModel.create: Thêm mới nội dung vào bảng (nếu chưa có bảng => tạo mới) */    
    UserModel.find('điều kiện tìm kiếm')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    /*  UserModel.find : tìm kiếm theo điều kiện => array chứa kết quả
        UserModel.find({}) => toàn bộ data trong bảng
        UserModel.find({điều kiện tìm kiếm}) => data thỏa mãn điều kiện
    */ 
   UserModel.findOne('Điều kiện tìm kiếm')
   .then(data => console.log(data))
   .catch(err => console.log(err));
    /* UserModel.findOne : tìm kiếm theo điều kiện => Object chứa kết quả
       Nếu có nhiều kết quả thỏa mãn điều kiện => kết quả đầu tiên 
       Nếu không tìm được => null
    */    
   UserModel.updateOne(filter, data)
   .then(data => console.log(data))
   .catch(err => console.log(err));
    /* UserModel.updateOne : sửa 1 data đầu tiên thỏa mãn điều kiện tìm kiếm
        filter : điều kiện tìm kiếm giá trị muốn thay đổi
        data : dữ liệu muốn thay đổi
        => {
            acknowledged: true,
            modifiedCount: 1, => Số lượng data  thay đổi
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1 => số lượng data khớp điều kiện tìm kiếm
        }
    */    
   UserModel.updateMany(filter, data)
   .then(data => console.log(data))
   .catch(err => console.log(err));
    /* UserModel.updateMany : thay đổi tất cả data thỏa mãn điều kiện tìm kiếm
        filter : điều kiện tìm kiếm
        data : giá trị muốn thay đổi
        => {
            acknowledged: true,
            modifiedCount: 2, => số lượng data thay đổi
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 3 => số lượng data thỏa mãn điều kiện tìm kiếm
        }
    */    
   UserModel.deleteOne('điều kiện tìm kiếm')
   .then(data => console.log(data))
   .catch(err => console.log(err))
    /* UserModel.deleteOne : xóa data đầu tiên thỏa mãn điều kiện tìm kiếm
        => { acknowledged: true, deletedCount: 1 }
    */    
    UserModel.deleteMany('điều kiện tìm kiếm')
    .then(data => console.log(data))
    .catch(err => console.log(err))
        /* UserModel.deleteOne : xóa tất cả data thỏa mãn điều kiện tìm kiếm
            => { acknowledged: true, deletedCount: Number }
        */    
        