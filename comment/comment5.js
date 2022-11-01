/* link youtube : */ 
/* link : https://www.npmjs.com/package/express */ 

/* khởi tạo dự án : npm init

*/ 
/*  b1: cài đặt framework : npm i express ,
    b2: gọi framework : const express = require('express')
    b3: tạo biến hứng : const app = express()
        Expressjs là một framework được xây dựng trên nền tảng của Nodejs.
        Nó cung cấp các tính năng mạnh mẽ để phát triển web hoặc mobile. 
        Expressjs hỗ trợ các method HTTP và midleware tạo ra API vô cùng mạnh mẽ và dễ sử dụng.
*/ 
const express = require('express')
    const app = express()
    app.get('/', (req, res) => {
        res.send('text')
        /* gửi data về client */ 
        res.json({object})
        /* gửi data đi dạng Json */
        res.sendFile(path.json(__dirname, './package.json')) 
        /* public file ra client : đường dẫn phải là đường dẫn tuyệt đối*/ 
        app.use('/view', express.static(path.join(__dirname, './view')))
        /* public thư mục (folder) ra clien */ 

        app.use((req, res, next) => {
            // logic ....
            next()
        })
        /*  middleware : phần mềm trung gian, được áp dụng cho tất cả những phần ở dưới, phải có next(), 
            nếu không sẽ không chạy được code ở dưới middleware. next() => kết thúc middleware hiện tại,
            chuyển sang middleware tiếp theo.
            middleware : là đoạn mã trung gian nằm giữa các request và response. Nó nhận các request,
            thi hành các lệnh tương ứng trên request đó. Sau khi hoàn thành nó response(trả về) hoặc 
            chuyển tiếp kết quả ủy thác cho một middleware khác trong hàm đợi  
        */ 
     
    })
    /* Thêm chức năng cho app
        app.get(link, (req, res) => {
            ....
        })
        link: đường dẫn để liên lạc,
        req: yêu cầu nhận về,
        res : phản hồi gửi đi
    */ 
    app.listen(4000)
    /* tạo cổng (địa chỉ): thường > 3000 */ 

    /* query: data truyền trên đường dẫn
        => ?key1=value1&key2=value2
        client: client có toàn quyền chủ động key, value
        server: req.query
    */ 
    /* params : data truyền trên đường dẫn
        => /:key1/:key2
        server: quy định trước về key => req.params
        client: client chủ động value, client buộc phải truyền đủ params theo yêu cầu của server
        truyền nhiều params : /page/:id/:page/:group
    */  







