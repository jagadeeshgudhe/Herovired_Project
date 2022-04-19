const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            require:true
      
        },
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true,
        },
        
    });

module.exports = mongoose.model("RegisterationData" , CustomerSchema);
