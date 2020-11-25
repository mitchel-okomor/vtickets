var express = require('express');
var router = express.Router();
const user = require("../controllers/user");
const { validate, ValidationError, Joi } = require('express-validation')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', validate(loginValidation, {}, {}), user.createUser);
router.post('/login', validate(loginValidation, {}, {}), user.login)
router.get('/user', user.getUser);
router.get('users', user.getAllUsers);
router.patch('/user', user.updateUser);
 
router.delete('/user', user.deleteUser);



module.exports = router;
