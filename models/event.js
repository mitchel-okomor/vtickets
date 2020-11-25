const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    venue: String,
    time: String,
    userId: String,
}, { timestamps: true });

mongoose.model("event", eventSchema);
