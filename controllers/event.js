const mongoose = require('mongoose');
require('../models/event');

const Event = mongoose.model("event");

const event ={


  create: (req,res)=>{

    console.log("Creating event")
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
          res.json({message:"success",
      data});
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

  console.log("updating")
  const {title, 
    description,
    venue,
    date,
    time,
    userId,

} = req.body
    Event.findByIdAndUpdate(req.params.id, {
       title: title,
       description: description,
      venue:  venue,
      date:  date,
       time: time,
       userId: userId,
        _id:req.params.id
        },  {
          new: true
        }).
        then(data=>{
          console.log(data);
          res.send(data);
        }).catch(err=>{
          console.log(err);
        })
      },
}


module.exports = event;
