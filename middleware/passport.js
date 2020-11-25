const bcrypt = require ('bcrypt-nodejs');
const jwt = require ('jsonwebtoken');
const mongoose = require('mongoose');
require('../models/user');
const dotenv = require('dotenv');
dotenv.config();  

require('../models/user');

const User = mongoose.model("user");


const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy,
JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;



  //register a user
passport.use('register', new LocalStrategy({usernameField:'email',
passwordField:'password',
passReqToCallback : true},
(req, done)=> {

   //hash password with bcrypt-nodejs
   let salt = bcrypt.genSaltSync(10);
   bcrypt.hash(req.body.password, salt, null, (error, hash) => {
        if (error) {
         console.log(error);
        }
      
    //get all user information, password has already been declared in function parameters and will be hashed below
    const firstName = req.body.firstName.trim();
    const lastName = req.body.lastName.trim();
    const number = req.body.number.trim();
    const email = req.body.email.trim();
    let newPassword = hash;

//create new user
try{
  const newUser = new User({firstName, lastName, number, email, newPassword});
  newUser.save((user)=> {
    if (!user) {
      return done(null, false, { message: 'user not registered' });
    }
    if (user) {
      console.log("passport strategy "+user);
      return done(null, user, { message: 'user successfully created',
  data: user});
    }
    return done(null, user);
  });
}
catch(err){
if(err){
  throw err;
}
}

   });

  }
)
);

//login a user
passport.use('login', new LocalStrategy({usernameField:'email',
passwordField:'password',
passReqToCallback : true},
  function(req, username, password, done) {
    console.log("Strategy "+username);
 
User.find(username, function (user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password' });
      }
     else{
       //compare user imputed password with database password
        bcrypt.compare (password, user.password,  (error, valid) => {
          if(error){console.log(error);}
         else if (!password ||!valid) {
            return done(null, false, { message: 'Incorrect username or password' });
          }
        else{ 
          const token = jwt.sign ({
            userId: user.id,
          },
        process.env.SECRET,
          {expiresIn: '24h'}
        );

            console.log("passport strategy "+user.firstname);
        return done(null, user, { message: 'logged in', user, token }); 
        }
        });
      }
    });
  }
)
);




//verify a user token
const opts ={jwtFromRequest: ExtractJWT.fromHeader('authorization'),
secretOrKey: process.env.SECRET
};
passport.use('jwt',  new JWTstrategy(opts, (jwt_payload, done)=>{
  try {
    console.log("JWT passport: "+jwt_payload.userId);
    //Pass the user details to the next middleware
    return done(null, jwt_payload.userId);
  } catch (error) {
    done(error,false);
  }
} 
)
);
module.exports = passport;