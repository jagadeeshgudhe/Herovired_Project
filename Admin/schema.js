const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true
      
        },
        userid:{
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

module.exports = mongoose.model("RegisterationData" , CustomerSchema);
