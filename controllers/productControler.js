const { ProductModel } = require("../model/model");

exports.createNewProduct = async (req, res) => {
   try {
        const newProduct = await ProductModel.findOne({name: req.body.name})
        if (newProduct) {
            await ProductModel.updateOne(
                {name: req.body.name},
                {
                    price: req.body.price,
                    amount: req.body.amount,
                    color: req.body.color,
                    status: req.body.status
                }
            )
        } else {
            await ProductModel.create({
                name: req.body.name,
                price: req.body.price,
                amount: req.body.amount,
                color: req.body.color,
                status: req.body.status
            })
        }
        res.status(200).json({mess: 'success'})
   } catch (error) {
        res.status(500).json({mess: 'server error'}, error)
   }
}
exports.getProduct = async (req, res) => {
    try {
        const product = await ProductModel.find()
        res.status(200).json({mess: 'success', product})
    } catch (error) {
        res.status(500).json({mess: 'server error', error})
    }
}
exports.deleteProduct = async (req, res) => {
    try {

        await ProductModel.deleteOne({id: req.params._id})
        res.status(200).json({mess: 'delete ok'})
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}
exports.paginateProduct = async (req, res) => {
    let {page, pageSize } = req.query
    page = page ? page : 1;
    pageSize = pageSize ? pageSize : 5
    try {
        const total = await ProductModel.count()
        const totalPage = Math.ceil(total/pageSize)
        const listProduct = await ProductModel.find().skip((page - 1) * pageSize).limit(pageSize * 1)
        res.status(200).json({mess: 'ok',  total, totalPage, page, pageSize, listProduct})
    } catch (error) {
        res.status(500).json({mess: 'server error'})
    }
}