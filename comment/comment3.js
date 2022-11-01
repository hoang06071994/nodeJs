/* link youtube : https://www.youtube.com/watch?v=De9EjsVJ2rU */ 
/* link tham khảo : https://www.mongodb.com/docs/manual/reference/operator/query-comparison/ */ 
const UserModel = mongoose.model('user', UserSchema);

/* Tìm kiếm */ 
    UserModel.find({age: {$eq: 23}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $eq (equal) :  so sánh bằng giá trị được chỉ định => array chứa kết quả bằng giá trị được so sánh */ 
    UserModel.find({age: {$gt: 23}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $gt (greater) : so sánh hơn => array chứa kết quả lớn hơn giá trị được so sánh */ 
    UserModel.find({age: {$gte: 23}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $gte (greater than or equal) : so sánh hơn hoặc bằng => array chứa kết quả lớn hơn hoặc bằng giá trị được so sánh */
    UserModel.find({age: {$lt : 12}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $lt (less than) : so sánh kém => array chứa kết quả nhỏ hơn giá trị được so sánh */ 
    UserModel.find({age: {$lte: 23}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $lte (less than or equal) : so sánh nhỏ hơn hoặc bằng => array chứa kết quả nhỏ hơn hoặc bằng giá trị được so sánh */
    UserModel.find({age: {$ne: 23}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $ne (not equal) :  khác => array chứa kết quả khác giá trị được so sánh */ 
    UserModel.find({friend: {$in: ['key1', 'key2']}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $in : => array chứa kết quả khớp với bất kỳ giá trị nào có mặt trong mảng */ 
    UserModel.find({age: {$nin: ['key1', 'key2', 'key3']}})
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* $nin : => array chứa kết quả không khớp với giá trị nào trong mảng */ 
    UserModel.find({age: {$lte: 15, $gt: 12, $ne: 13}})
    /* có thể kết hợp nhiều điều kiện tìm kiếm ( nhỏ hơn 15 lớn hơn 12 và khác 13) */ 

    /* Tìm kiếm và */ 
    UserModel.find({ age: {$in: [12,23]}, usename: 'thai' })
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* => array  chứa các giá trị thỏa mãn điều kiện 1 (age: {$in: [12,23]}) và điều kiện 2 (usename: 'thai') */ 

    /* Tìm kiếm hoặc */ 
    UserModel.find({
        $or: [
            {age: {$eq: 12}},
            {usename: 'hoang'}
        ]
    })
    .then (data => console.log(data))
    .catch (err => console.log(err))
    /* { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }  
    => array chứa các giá trị thỏa mãn 1 trong các trường hợp của điều kiện tìm kiếm */ 

    /* Truy vấn array */  
    /* { <field>: { $all: [ <value1> , <value2> ... ] } } */ 
    UserModel.find({
        age: {$all: ['huy', 'thai', 'vinh']}
    })
    /* $all : tìm kiếm nhiều giá trị trong array, không quan tâm đến  vị trí */ 

    /* Truy vấn Object */ 
    UserModel.find( {'adress.number': 30} )

    /* $elemMatch  */
    UserModel.find({'assets': {$elemMatch: {
        'assetName': 'laptop',
        value: {$gt: 20}
    }}}) 
    /* 
    toán tử so khớp các tài liệu chứa trường mảng với ít nhất một phần tử khớp với tất cả các tiêu chí truy vấn đã chỉ định,
    (truy vấn áp dụng điều kiện cho từng phần tử trong array)
    */ 

/* sắp xếp */ 
    UserModel.find().sort({age: 1, username: 1})
    .then (data => console.log(data))
    .catch (err => console.log(err))
    /*
    1: sắp xếp tăng dần
    -1: sắp xếp giảm dần
    độ ưu tiên từ trái qua phải, nếu điều kiện 1 thỏa mãn sẽ đối chiếu điều kiện 2 (nếu có)
    vd: sắp xếp theo tuổi tăng dần và tên tăng dần : 
    => nếu không cùng tuổi => chỉ xét điệu tuổi, không xét đến tên
    => nếu cùng tuổi thì mới xét đến điều kiện tên tăng dần
    */ 

/* giới hạn data trả về */ 
    UserModel.find().sort({age: 1}).limit(n)
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* limit(n) => trả về tối đa 'n' data theo điều kiện tìm kiếm (lần lượt từ đầu)*/ 

/* bỏ qua N data */ 
    UserModel.find().sort({age: 1}).skip(n)
    .then (data => console.log(data))
    .catch (err => console.log(err));
    /* 
    skip(n) => trả về kết quả bỏ qua 'n' data 
    vd: tổng có 10 data thỏa mãn điều kiện tìm kiếm => skip(7) => bỏ qua 7 data đầu, trả về 3 data cuối 
    */ 