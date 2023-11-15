var express = require("express");
var app = express();
var router = express.Router();
//app.path = require("path");
//app.use(express.static("pages"));
var path = require('path')


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

// calling schemas
// var appointment = require(path.resolve('./models/doctor_schema.js'))
const doctordata = require('./models/doctor_schema.js');




app.post("/dashboardmyschedule", function(req,res){
 console.log(req.body);
//  res.send(req.body);
//  var obj=new timeData({
//    date:req.body.date,
//    start:req.body.startTime,
//    end:req.body.endTime
//  })
})



module.exports = router