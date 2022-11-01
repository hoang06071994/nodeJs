const mongoose = require('mongoose')
const {DATABASE_LINK} = process.env

mongoose.connect(DATABASE_LINK)
    
/* User */ 
    const UserSchema = mongoose.Schema({
        username: {
            type: String,
            requied: true
        },
        age: Number,
        password: String,
        role: {
            type: String,
            default: 'user'
        },
        friend: [String],
        adress: {
            number: Number,
            stress: String,
            city: String
        },
        active: Boolean
    }, {collection: 'user'});

exports.UserModel = mongoose.model('user', UserSchema);

/* Product */ 
    const ProductSchema = mongoose.Schema({
        name: String,
        price: Number,
        amount: Number,
        color: String,
        status: String
    }, {collection: 'product'});

exports.ProductModel = mongoose.model('product', ProductSchema)

/* Cart */ 
    const CartSchema = mongoose.Schema({
        listProduct: [{
            productId: {
                type: String,
                ref: 'product'
            },
            quantily: Number
        }],
        userId: {
            type: String,
            ref: 'user',
            /* quan hệ với bảng */ 
        },
    }, {collection: 'cart'});

exports.CartModel = mongoose.model('cart', CartSchema)

/* Order */
    const OrderSchema = mongoose.Schema({
        listProduct: [],
        userId: {
            type: String,
            ref: 'user'
        }
    }, {collection: 'order'})

exports.OrderModel = mongoose.model('order', OrderSchema)
    
/* OrderItem */ 
    const OrderItemSchema = mongoose.Schema({
        orderId: {
            type: String,
            ref: 'order'
        },
        productId: {
            type: String,
            ref: 'product'
        },
        quantily: Number
    }, {collection: 'orderItem'})

exports.OrederItemModel = mongoose.model('orderItem', OrderItemSchema)


