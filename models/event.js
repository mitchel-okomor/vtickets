const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: String,
    date: String,
    time: String,
     image: String,
    userId: String,
}, { timestamps: true });

mongoose.model("event", eventSchema);
