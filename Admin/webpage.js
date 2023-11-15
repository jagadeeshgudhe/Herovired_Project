var express = require("express");
var app = express();
var router = express.Router();
// app.use(express.static("contents"));
// var path = require('path')
var path = require('path');

// app.use(express.json());


// app.use(express.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname, "public")));

// const mongoose = require("mongoose");
// const urlencoded = require("body-parser/lib/types/urlencoded");
// mongoose.connect("mongodb+srv://Medipudi_Hemachandu:hemachandu@cluster0.pv2z0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useUnifiedTopology : true,
//     useNewUrlParser : true,
// }).then(() =>{
//     console.log("successfully connected to mongodb database")
// }).catch((e) =>{
//     console.log("not connected to mongodb database");
// })

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))


var doctordata = require(path.resolve('models/doctor_schema.js'))
var patientData = require(path.resolve('models/patient_schema.js'))


////// patient/////////
router.post('/patientData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    console.log(req.body);
    // res.send(req.body);
    var obj = new patientData({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    })
    patientData.findOne({ $or: [{ name:req.body.name }, {email: req.body.email },{ number:req.body.number },{password:req.body.password}] }, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            obj.save(function(err, results) {
                if(results){
                   console.log("results"+ results);
                    res.send(results);
                }else{
                    console.log(err)
                    res.send(err);
                }
            })
        } 
        else{
            res.sendStatus(500);
        }
    })
   
});



// router.post('/logindata', function(req,res){
//     //res.sendFile(__dirname + '/template/signup.html');
//     console.log(req.body);
    
//     signupData.findOne({Email : req.body.email,Password:req.body.password}, function(err,docs){
//         if(err || docs==null){
//             //console.log(err)
//             res.sendStatus(500)
//         } 
//         else{
            
//             res.send(docs);
//         }
//     })
   
// });



//////// doctor //////////
router.post("/doctordata",function(req,res){
    console.log(req.body);
    doctordata.findOne({'email':req.body.email,'Password':req.body.password},function(err,docs){
        if(err || docs==null){
            console.log(err)
            res.sendStatus(500);
        }
        else{
            console.log(docs);
            res.send(docs);
            
        }

    });
});

////// patient //////
router.post("/patientData",function(req,res){
    console.log(req.body);
    patientData.findOne({'email':req.body.email,'password':req.body.password},function(err,docs){
        if(err || docs==null){
            console.log(err)
            res.sendStatus(500);
        }
        else{
            console.log(docs);
            res.send(docs);
            
        }

    });
});



router.get('/patientData',(req,res)=>{
    patientData.find(function(err,result){
            if(err || result==null)
            {
                
                console.log(err)
            }
            else if(result!=undefined)
            {
                
                console.log(result)
                res.send(result);
            }
        })
    });



module.exports = router


