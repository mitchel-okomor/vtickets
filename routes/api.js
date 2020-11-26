var express = require('express');
var router = express.Router();
const user = require("../controllers/user");
const event = require("../controllers/event");
const ticket = require("../controllers/ticket");
const auth = require('../middleware/auth');
const { validate, ValidationError, Joi } = require('express-validation');
const validation = require('../middleware/validation')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//user routes
router.post('/signup', auth.register);
router.post('/login',  auth.login)
router.get('/user', auth.jwt, user.getUser);
router.get('users', auth.jwt, user.getAllUsers);
router.patch('/user', auth.jwt, user.updateUser);
router.delete('/user', auth.jwt, user.deleteUser);


//event routes
router.post('/event', auth.jwt, event.create);
router.get('/events', event.getAll);
router.get('/event', event.get);
router.patch('/event', auth.jwt, event.update);
 
router.delete('/event', auth.jwt, event.delete);


//ticket routes
router.post('/ticket', auth.jwt,  ticket.create);
router.get('/tickets', auth.jwt, ticket.getAll);
router.get('/ticket', auth.jwt, ticket.get);
router.patch('/ticket', auth.jwt, ticket.update);
 
router.delete('/ticket', auth.jwt, ticket.delete);



module.exports = router;
