var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create');
router.get('/user');
router.patch('/user');
 
router.delete('/user');



module.exports = router;
