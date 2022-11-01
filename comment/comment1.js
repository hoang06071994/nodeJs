/* link tham khảo : https://www.geeksforgeeks.org */ 
/* link tham khảo : https://nodejs.org/api/fs.html */ 
/* link tham khảo : https://nodejs.org/api/path.html */ 
/* link youtube : https://www.youtube.com/watch?v=lFz2GBzNNiY */ 

const path = require('path');
/* cung cấp công cụ làm việc với file và đường dẫn */ 
    /* Đường dẫn tuyệt đối :
        => Đường dẫn tuyệt đối là URL đầy đủ tới tệp trên internet:
    */ 
    /* Đường dẫn tương đối:
        => Đường dẫn tương đối trỏ đến một file liên quan trong trang hiện tại.
    */ 
    const link = path.join(__dirnme, 'name link');
    /* tạo ra link tuyệt đối dựa trên thông số đầu vào : 
        __dirname : địa chỉ thư mục đang làm việc
        name link : tên link để tạo đường dẫn
    */ 
    path.isAbsolute(link);
    /* path.isAbsolute(link) : Kiểm tra link có phải là link tuyệt đối hay không 
        => true OR false
    */ 
    path.parse(link);
    /* path.parse(link) : lấy thông tin chi tiết của file */ 

const fs  = require('fs');
/* module cung cấp các công cụ để can thiệp vào hệ thống file */ 
    fs.readFile('file', 'utf-8', (err) => {
        console.log(err)
    });
    /* fs.readFile :  hàm bất đồng bộ, dùng để đọc file
        'file' : tên file muốn đọc (đường dẫn)
        'utf-8' : giải mã đối tượng thành chuỗi , unicode
        callback : xử lý logic, tác vụ mong muốn

    */ 
    const text = fs.readFileSync('file', 'utf-8');
    /* fs.readFileSync : hàm đồng bộ dùng để đọc file
        'file' : tên file, đường dẫn
        'utf-8' : giải mã đối tượng thành chuỗi , unicode
    */ 
    fs.writeFile('file', 'mode', (err) => {
        console.log(err)
    });
    /* fs.writeFile : viết file , file đã tồn tại ? xóa nội dung cũ và đè nội dung mới : tạo file mới 
        'file' : tên file, đường dẫn
        'mode' : nội dung muốn ghi trong file (string)
        callback : thực hiện tác vụ mong muốn
        hàm bất đồng bộ 
    */ 
    fs.writeFileSync('file', 'mode');
    /* fs.writeFileSync : viết file , file đã tồn tại ? xóa nội dung cũ và đè nội dung mới : tạo file mới 
        'file' : tên file, đường dẫn
        'mode' : nội dung muốn ghi trong file
        là hàm đồng bộ 
    */ 
    fs.copyFile('file', 'dest', () => {});
    /*  fs.copyFile : copy file , file đã tồn tại ? ghi đè nội dung : tạo file mới 
        'file' : tên file, địa chỉ file muốn copy
        'dest' : tên file, địa chỉ file muốn page
        callback : thực hiện tác vụ mong muốn
        là hàm bất đồng bộ 
    */ 
    fs.copyFileSync('file', 'dest');
    /* fs.copyFileSync : copy file , file đã tồn tại ? ghi đè nội dung : tạo file mới
        'file' : tên file, địa chỉ file muốn copy
        'dest' : tên file, địa chỉ file muốn page
        là hàm đồng bộ 
    */ 
    fs.appendFile('file', 'mode', () => {});
    /* fs.appendFile : thêm nội dung vào cuối file
        'file' : tên file, địa chỉ file muốn thêm nội dung
        'mode' : nội dung muốn thêm 
        callback : thực hiện tác vụ mong muốn 
        là hàm bất đồng bộ
    */    
    fs.appendFileSync('file', 'mode');
    /* fs.appendFile : thêm nội dung vào cuối file
        'file' : tên file, địa chỉ file muốn thêm nội dung
        'mode' : nội dung muốn thêm 
        là hàm đồng bộ
    */    
    fs.unlink('file', (err) => {
        if (err) {
            console.log(err)
        }
    });
    /* fs.unlink : xóa file 
        'file' : tên file muốn xóa
        callback : thực hiện tác vụ mong muốn
        là hàm bất đồng bộ
    */ 
    fs.unlinkSync('file');
    /* fs.unlink : xóa file 
        'file' : tên file muốn xóa
        là hàm đồng bộ
    */
    fs.readdir('file', options, (err, file) => {
        err ? console.log(err) : console.log(file)
    });
    /* fs.readdir : trả về một mảng gồm tất cả các tên tệp trong thư mục
        'file' : Nó chứa đường dẫn của thư mục từ nơi nội dung phải được đọc. Nó có thể là một chuỗi, bộ đệm hoặc URL
        options :  Nó là một đối tượng có thể được sử dụng để chỉ định các tham số tùy chọn sẽ ảnh hưởng đến phương thức. Nó có hai tham số tùy chọn:
            - encoding: Nó là một giá trị chuỗi chỉ định mã hóa nào sẽ được sử dụng cho các tên tệp được cung cấp cho đối số gọi lại. Giá trị mặc định là 'utf8'.
            - withFileTypes: Đây là một giá trị boolean chỉ định liệu các tệp có được trả về dưới dạng đối tượng fs.Dirent hay không. Giá trị mặc định là 'false'.
        callback : Đây là hàm sẽ được gọi khi phương thức được thực thi.
            - err: Đó là một lỗi sẽ được ném ra nếu hoạt động không thành công.
            - files: Nó là một mảng các đối tượng String, Buffer hoặc fs.Dirent có chứa các tệp trong thư mục.
        là hàm bất đồng bộ
    */ 
    fs.readdirSync('file', options);
    /* fs.readdirSync : trả về một mảng gồm tất cả các tên tệp trong thư mục
        'file' : Nó chứa đường dẫn của thư mục từ nơi nội dung phải được đọc. Nó có thể là một chuỗi, bộ đệm hoặc URL
        options :  Nó là một đối tượng có thể được sử dụng để chỉ định các tham số tùy chọn sẽ ảnh hưởng đến phương thức. Nó có hai tham số tùy chọn:
            - encoding: Nó là một giá trị chuỗi chỉ định mã hóa nào sẽ được sử dụng cho các tên tệp được cung cấp cho đối số gọi lại. Giá trị mặc định là 'utf8'.
            - withFileTypes: Đây là một giá trị boolean chỉ định liệu các tệp có được trả về dưới dạng đối tượng fs.Dirent hay không. Giá trị mặc định là 'false'.
        là hàm đồng bộ
    */ 