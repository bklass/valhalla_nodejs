let router = require('express').Router();
var dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Contact = require('../app/models/contactModel');

dotenv.load();

mongoose.connect(process.env.DB,{ useNewUrlParser: true });

router.post('/', function(req, res, next) {
  if (!req.body.email || !req.body.password)
      res.sendStatus(401);
  else{
    Contact.findOne({'email':req.body.email}, function(error, contact) {
      if(error) 
        res.send(error);
      else if(!contact || contact==null)
        res.sendStatus(401);
      else if(contact.password==req.body.password){
        var token = jwt.sign({
            id: contact._id
          }, process.env.SECRET, { expiresIn: '1h' });
        res.status(201).send({"Token:":token});
      }
      else
        res.sendStatus(401);
    });
  }
});

function contactValidation(req, res, next){
  var token = req.get("x-auth-token");
  if(!token)
    res.status(403).send("No authentication Token found!");
  else{
    jwt.verify(token,process.env.SECRET,function(err, contactId){
      if(err) 
        res.status(401).send(err);
      else {
        console.log(contactId);
        next();
      }   
    });
  }
}
  
module.exports = {router, contactValidation};