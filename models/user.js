const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:  {type:String, required:true},
    lastName:  {type:String,required:true},
    phone: String,
    email:  {type:String, index:true, unique:true, required:true},
    password: {type:String, required:true},
    image_url: String
});

mongoose.model("user", userSchema);
