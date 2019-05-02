let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let logger = require('morgan');
var dotenv = require('dotenv');

let app = express();

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
dotenv.load();

mongoose.connect('mongodb://localhost/valhalla');
var db = mongoose.connection;

var port = process.env.PORT || 8080;

var indexRouter = require('./config/indexRouter');
var contactsRouter = require('./config/contactsRouter');
var productsRouter = require('./config/productsRouter');
var authRouter = require('./config/authRouter');

app.use('/products', authRouter.contactValidation);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/contacts', contactsRouter);
app.use('/auth', authRouter.router);

app.listen(port, function () {
    console.log("Running on port " + port);
});

