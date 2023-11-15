var express = require("express");
var app = express();
var router = express.Router();
// app.use(express.static("contents"));
var path = require('path')


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

const patientData = require('./models/patient_schema.js');


// console.log(__dirname,"/models/Appoinment_schema.js")

var appointment = require(path.resolve('models/Appointment_schema.js'))

// var patientData = require(path.resolve('models/patient_schema.js'))

// router.post('/checkdata', function(req,res){
//     // console.log(req.body)
//     var data = new appointment({
//         name : req.body.Name,
//         mailID : req.body.mailID,
//         mobile : req.body.mobile,
//         speciality : req.body.speciality,
//         doctor : req.body.Doctor,
//         date : req.body.Date,
//         description : req.body.Description
//     })

//     data.save(function(err,result){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(result)
//             res.redirect('/patient/Present_Appointments')
//         }
//     })
// })

// ///patient appointment//////
// router.get('/activeAppointments', function(req,res){
//     appointment.find({},function(err,docs){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(docs)
//             res.send(docs)
//         }
//     })
// })

module.exports = router

