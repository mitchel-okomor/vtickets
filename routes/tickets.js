var express = require('express');
var router = express.Router();
const ticket = require("../controllers/ticket");




router.post('/ticket',  ticket.create);
router.get('/tickets', ticket.getAll);
router.get('/ticket', ticket.get);
router.patch('/ticket', ticket.update);
 
router.delete('/ticket', ticket.delete);



module.exports = router;
