const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: String,
    date: String,
    time: String,
     image: String,
     isApproved: {type:String, default:false},
     isPublished: {type:String, default:false},
    userId: String,
}, { timestamps: true });

mongoose.model("event", eventSchema);
