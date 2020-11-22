var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('./../Employee');

const Employee = mongoose.model("employee");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',(req,res)=>{
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position
  })
  employee.save()
  .then(data=>{
    console.log(data);
    res.send("success");
  }).catch(err=>{
    console.log(err);
  })
})

router.post('/delete', (req,res)=>{
  Employee.findByIdAndRemove(req.body.id).
  then(data=>{
    console.log(data);
    res.send("deleted");
  }).catch(err=>{
    console.log(err);
  })
})

router.post('/update', (req, res)=>{
  console.log(req.body.id);
  Employee.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position
  }).
  then(data=>{
    console.log(data);
    res.send("Updated");
  }).catch(err=>{
    console.log(err);
  })
});

router.get("/employees", (req, res)=>{
  Employee.find({}).then(
    data=>{
      res.send(data);
    }
  ).catch(err=>{
    console.log(err);
  })
})


module.exports = router;
