const express = require('express');
const { createNewProduct, getProduct, deleteProduct, paginateProduct } = require('../controllers/productControler');
const { ProductModel } = require('../model/model');
const router = express.Router();

router.get('/get-all-product', getProduct);
router.post('/create-new-product', createNewProduct);
router.delete('/delete-product/:id', deleteProduct);
router.get('/paginate', paginateProduct);

module.exports = router