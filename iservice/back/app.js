const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const loggedUser = require('./models/userLogin');
const bodyParser = require("body-parser");
const cors = require("cors"); 
const multer = require('multer'); 
const path = require('path');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const Detail = require('./models/details');

app.use(require('express-session')({
  secret:'Im phirmware',
  resave:false,
  saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(loggedUser.authenticate()));
passport.serializeUser(loggedUser.serializeUser());
passport.deserializeUser(loggedUser.deserializeUser());


//Connect to database
var mongoUrl = "mongodb://localhost/iservice";
//var mongoUrl =  "mongodb://phirmware:itachi1@ds237120.mlab.com:37120/iservice";
mongoose.connect(mongoUrl);
//mongoose.connect("mongodb://phirmware:itachi1@ds237120.mlab.com:37120/iservice");
mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Routes


// Get all users
app.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// Create a new user
app.post("/", function(req, res) {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
    });
});

// Find a user
app.post('/showuser',(req,res)=>{
  User.find({email:req.body.username}).then((user)=>{
    res.json(user);
  }).catch((err)=>{
    res.json('Error Ocurred!!');
  })
});

// Find users under a specific category
app.get('/category/:id',(req,res)=>{
  User.find({category:req.params.id}).then((users)=>{
    res.json(users);
  }).catch((err)=>{
    console.log(err);
  })
});

// Get token
app.post('/jwt',(req,res)=>{
  jwt.sign(req.body,'secret key',(err,token)=>{
    res.send({token:token});
 });
});

// Successful login
app.get('/success',(req,res)=>{
  res.json({message:'success'});
});

// Failed login
app.get('/jwtfailure',(req,res)=>{
  res.json({message:'Failed to login'});
});

// Signup a new user and get token
app.post('/signup',(req,res)=>{
  loggedUser.register(new loggedUser({username:req.body.username}),req.body.password,(err,user)=>{
    if(err){
      res.send(err);
    }else{
      passport.authenticate('local')(req,res,function(){
        jwt.sign(req.body,'secret key',(err,token)=>{
           res.send({token:token});
        });
      })
    }
  })
});

// Login
app.post('/login',passport.authenticate('local',{
  successRedirect:'/success',
  failureRedirect:'/jwtfailure'
}),(req,res)=>{});

// Find specific user
app.get('/user/:id',(req,res)=>{
  User.find({company:req.params.id}).then((user)=>{
    res.json(user);
  }).catch((err)=>{
    console.log(err);
  });
});


// Create user details
app.post('/user/:id',(req,res)=>{
  User.findOneAndUpdate({company:req.params.id},{details:req.body.details},{new:true}).then((detail)=>{
    res.json(detail); 
  }).catch((err)=>{
    console.log(err);
  })
});

// Find user detail
app.get('/user/:id/detail',(req,res)=>{
  User.find({company:req.params.id}).then((detail)=>{
    res.json(detail);
  }).catch((err)=>{
    console.log(err);
  })
});

var port = process.env.PORT || 3000;

// app.listen(process.env.PORT,process.env.IP,()=>{
//   console.log('started!!!');
// });

app.listen(port, () => {
  console.log("Listening at port 3000");
});
