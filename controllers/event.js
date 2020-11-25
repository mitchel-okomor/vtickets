const mongoose = require('mongoose');
require('../models/ticket');

const Event = mongoose.model("ticket");

const event ={


  create: (req,res)=>{
        const event = new Event({
          userId: req.body.id,
          eventId: req.body.id,
          quanity: req.body.quantity,
          token:token,
          verified:false
        })
        event.save()
        .then(data=>{
          console.log(data);
          res.send("success");
        }).catch(err=>{
          console.log(err);
        })
      },
      

     get: (req, res, id)=>{
        Event.findById(req.params.id).then(
          data=>{
            res.send(data);
          }
        ).catch(err=>{
          console.log(err);
        })
      },


      getAll: (req, res)=>{
        Event.find({}).then(
          data=>{
            res.send(data);
          }
        ).catch(err=>{
          console.log(err);
        })
      },

    delete: (req,res)=>{
        Event.findByIdAndRemove(req.params.id).
        then(data=>{
          console.log(data);
          res.send("deleted");
        }).catch(err=>{
          console.log(err);
        })
      },
      
update: (req, res)=>{
    Event.findByIdAndUpdate(req.params.id, {
        quanity: req.body.quantity,
        verified:false
        }).
        then(data=>{
          console.log(data);
          res.send("Updated");
        }).catch(err=>{
          console.log(err);
        })
      },
}


module.exports = event;
