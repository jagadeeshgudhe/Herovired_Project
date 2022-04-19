const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        Doctor:{
            type:String,
            require:true
      
        },
        id:{
            type:String,
            require:true
        },
        specialist:{
            type:String,
            require:true,
        },
        CheckIn:{
            type:String,
            require:true,
        },
    });

module.exports = mongoose.model("DoctorData" , CustomerSchema);
