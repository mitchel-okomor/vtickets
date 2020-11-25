const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userId: String,
    eventId: String,
    token: {type:String, index:true, unique:true, required:true},
}, { timestamps: true });

mongoose.model("ticket", ticketSchema);
