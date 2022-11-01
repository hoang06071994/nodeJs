require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const cartRoute  = require('./routers/cartRoute')
const userRoute = require('./routers/userRoute')
const productRoute = require('./routers/productRoute')
const orderRoute = require('./routers/orderRoute')
const indexRoute = require('./routers/index')
const cookeiParser = require('cookie-parser')
// cài đặt cookie-parser để lấy cookie


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(cookeiParser())
app.use(express.json())

app.use('/view', express.static(path.join(__dirname, './view')));
app.use('/user', userRoute)
app.use('/cart', cartRoute)
app.use('/order', orderRoute)
app.use('/product', productRoute)
app.use('/', indexRoute)

app.listen(4000)


