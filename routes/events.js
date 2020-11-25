var express = require('express');
var router = express.Router();
const event = require("../controllers/event");




router.post('/event',  event.create);
router.get('/events', event.getAll);
router.get('/event', event.get);
router.patch('/event', event.update);
 
router.delete('/event', event.delete);



module.exports = router;
