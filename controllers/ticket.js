const mongoose = require('mongoose');
require('../models/ticket');

const Ticket = mongoose.model("ticket");

const ticket ={


  create: (req,res)=>{
    console.log(req.body);
        // const ticket = new Ticket({
        //   userId: req.body.id,
        //   eventId: req.body.id,
        //   quanity: req.body.quantity,
        //   token:token,
        //   verified:false
        // })
        // ticket.save()
        // .then(data=>{
        //   console.log(data);
        //   res.send("success");
        // }).catch(err=>{
        //   console.log(err);
        // })
      },
      

     get: (req, res, id)=>{
        Ticket.findById(req.params.id).then(
          data=>{
            res.send(data);
          }
        ).catch(err=>{
          console.log(err);
        })
      },


      getAll: (req, res)=>{
        Ticket.find({}).then(
          data=>{
            res.send(data);
          }
        ).catch(err=>{
          console.log(err);
        })
      },

    delete: (req,res)=>{
        Ticket.findByIdAndRemove(req.params.id).
        then(data=>{
          console.log(data);
          res.send("deleted");
        }).catch(err=>{
          console.log(err);
        })
      },
      
update: (req, res)=>{
    Ticket.findByIdAndUpdate(req.params.id, {
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


module.exports = ticket;
