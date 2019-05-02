// productController.js
// Import product model
let Product = require('../models/productModel');
// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "erro",
                message: err,
            });
        }
        res.json({
            status: "successo",
            message: "Listagem executada com sucesso!",
            data: products
        });
    });
};
// Handle create product actions
exports.new = function (req, res) {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.band = req.body.band;
    product.image = req.body.image;
    product.stock = req.body.stock;
    product.price = req.body.price;
// save the contact and check for errors
    product.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'Produto cadastrado',
            data: product
        });
    });
};

// Handle view product info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes',
            data: product
        });
    });
};

// Handle update product info
exports.update = function (req, res) {
Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
product.name = req.body.name ? req.body.name : product.name;
    product.band = req.body.band;
    product.image = req.body.image;
    product.stock = req.body.stock;
    product.price = req.body.price;
// save the product and check for errors
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Dados atualizados.',
                data: product
            });
        });
    });
};

// Handle delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "successo",
            message: 'Deletado.'
        });
    });
};