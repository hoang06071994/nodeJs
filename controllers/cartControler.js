const { CartModel } = require("../model/model");

exports.createCart = async (req, res) => {
    try {
        const newCart = await CartModel.findOne({userId})
        if (newCart) {
            await CartModel.updateOne({userId}, {
                listProduct: [{
                    productId: req.body.productId,
                    ref: 'product'
                }]
            })
        } else {
            await CartModel.create({
                listProduct: [{
                    productId: req.body.productId,
                    quantily: req.body.quantily
                }],
                userId: req.body.userId
            })
        }
        res.status(200).json({mess: 'success'})
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}

exports.getCart = async (req, res) => {
    try {
        const cartData = await CartModel.find()
        res.status(200).json({mess: 'seccess', cartData})
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}

exports.updateCart = async (req, res) => {
    try {
        const cartData = await CartModel.updateOne({userId}, {
            listProduct: [{
                productId: req.body,productId,
                quantily: req.body.quantily
            }]
        })
        console.log(cartData)
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const cartData = await CartModel.deleteOne({userId})
        console.log(cartData)
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}