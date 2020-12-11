const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: String,
    date: String,
    time: String,
     userId: String, 
     image: String,
     isApproved: {type:String, default:false},
     isPublished: {type:String, default:false},
}, { timestamps: true });

mongoose.model("event", eventSchema);
