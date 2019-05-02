let router = require('express').Router();
var contactController = require('../app/controllers/contactController');

router.route('/')
    .get(contactController.index)
    .post(contactController.new);
router.route('/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
module.exports = router;