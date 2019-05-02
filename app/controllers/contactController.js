// contactController.js
// Import contact model
let Contact = require('../models/contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "erro",
                message: err,
            });
        }
        res.json({
            status: "successo",
            message: "Listagem executada com sucesso!",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.password = req.body.password;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'Conta criada.',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.password = req.body.password;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Dados atualizados.',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "successo",
            message: 'Deletado.'
        });
    });
};