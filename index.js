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

mongoose.connect('mongodb://localhost/valhalla',{ useNewUrlParser: true });
var db = mongoose.connection;

var port = process.env.PORT || 8080;

var indexRouter = require('./config/indexRouter');
var contactsRouter = require('./config/contactsRouter');
var productsRouter = require('./config/productsRouter');
var authRouter = require('./config/authRouter');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
    next();
})

app.use('/products', authRouter.contactValidation);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/contacts', contactsRouter);
app.use('/auth', authRouter.router);

app.listen(port, function () {
    console.log("Running on port " + port);
});

