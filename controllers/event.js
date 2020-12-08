const mongoose = require('mongoose');
require('../models/event');

const Event = mongoose.model("event");

const event ={


  create: (req,res)=>{
    const {title, 
            description,
            venue,
            date,
            time,
            userId
    
    } = req.body
        const event = new Event({
         title,
         description,
         venue,
         date,
         time,
         userId,
         image: req.file.filename
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
            res.json(data);
          }
        ).catch(err=>{
          console.log(err);
        })
      },

      getUserEvents:(req, res)=>{
        Event.find({"userId": req.params.id}, {}).then(
          data=>{
            console.log(data)
            res.json(data)
          }
        ).catch(err=>{
          console.log(err);
        }) 
      },

      getAll: (req, res)=>{
        Event.find({}).then(
          data=>{
            res.json(data);
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
